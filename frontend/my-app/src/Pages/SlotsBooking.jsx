import React, { useState } from "react";
import { Bell } from 'lucide-react';
import CardHome from '../Components/CardHome';
import Navbar from '../Components/Navbar';
import { MoveRight } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Plug } from 'lucide-react';
import { Zap } from 'lucide-react';
import Top from "../Components/Top";
import axios from "axios";

const SlotsBooking = () => {
    const [formData, setFormData] = useState({
        stationId: "69f50dcc4bf009da6712fcec",
        chargerType: "",
        fromDate: "",
        toDate: "",
        fromTime: "",
        toTime: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleType = (type) => {
        setFormData({
            ...formData,
            chargerType: type
        });
        console.log(type);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (
            !formData.chargerType ||
            !formData.fromDate ||
            !formData.toDate ||
            !formData.fromTime ||
            !formData.toTime
        ) {
            alert("Please fill all fields");
            return;
        }

        try {

            const startDateTime = new Date(`${formData.fromDate}T${formData.fromTime}:00`);
            const endDateTime = new Date(`${formData.toDate}T${formData.toTime}:00`);

            const startTimeISO = startDateTime.toISOString();
            const endTimeISO = endDateTime.toISOString();

            const res = await axios.post(
                "http://localhost:3000/api/bookings/create",
                {
                    stationId: formData.stationId,
                    chargerType: formData.chargerType,
                    startTime: startTimeISO,
                    endTime: endTimeISO
                },
                {
                    withCredentials: true
                }
            );

            console.log(res.data);

        } catch (err) {
            console.error("Booking Error:", err.response?.data || err.message);
        }
    };


    return (
        <div className=' '>
            <Top />
            <div className='w-full h-full flex flex-col lg:flex lg:flex-row'>
                <div className='w-full lg:w-1/2'>

                    <div className='lg:hidden'>
                        <CardHome />
                    </div>
                </div>

                <div className='pb-10  lg:px-20 '>
                    <form onSubmit={handleSubmit}
                        className=" bg-white flex items-center justify-center border border-gray-200 rounded-2xl mx-4 md:mx-12 p-4 mt-3 lg:p-11 lg:h-130">

                        <div className="w-full md bg-white rounded-2xl p-1 flex flex-col gap-4 md:flex-row md:justify-center md:gap-20 lg:justify-center lg:flex-col  ">

                            <div id="leftsection">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        Select Date(from)
                                    </label>

                                    <input
                                        type="date"
                                        name="fromDate"
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 mt-2 block">
                                        Select Date(to)
                                    </label>

                                    <input
                                        type="date"
                                        name="toDate"
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>


                                <div className="flex items-center justify-center gap-4">

                                    <div className="flex-1 w-1/2">
                                        <label className="text-xs text-gray-500">From</label>
                                        <input
                                            type="time"
                                            name="fromTime"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-3 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                        />
                                    </div>



                                    <div className="flex-1 w-1/2">
                                        <label className="text-xs text-gray-500">To</label>
                                        <input
                                            type="time"
                                            name="toTime"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-3 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div id="rightsection">
                                <div>
                                    <div className="flex flex-col justify-between gap-3 mb-3">
                                        <h2 className="text-sm font-semibold text-gray-700">Charging Type</h2>

                                        <div className="flex items-center justify-center gap-3 text-xs transition-all duration-200">
                                            <button
                                                type="button"
                                                onClick={() => handleType("AC")}
                                                className={`w-32 flex items-center justify-center gap-2 py-4 px-2 rounded-2xl border transition 
                                                        ${formData.chargerType === "AC"
                                                        ? "bg-black text-white border-black scale-105"
                                                        : "bg-white text-black border-gray-300 hover:scale-105"
                                                    }`}
                                            >
                                                <h1 className="text-lg">AC</h1>
                                                <Plug size={22} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleType("DC")}
                                                className={`w-32 flex items-center justify-center gap-2 py-4 px-2 rounded-2xl border transition 
                                                        ${formData.chargerType === "DC"
                                                        ? "bg-black text-white border-black scale-105"
                                                        : "bg-white text-black border-gray-300 hover:scale-105"
                                                    }`}
                                            >
                                                <h1 className="text-lg">DC</h1>
                                                <Zap size={22} />
                                            </button>
                                        </div>
                                    </div>


                                </div>


                                <div className="flex justify-center mt-3">
                                    <button
                                        type="submit"
                                        className="font-light w-32 text-sm flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-3xl hover:scale-105 transition" >
                                        <h1 className='text-lg'> Book</h1>
                                        <CalendarCheck size={18} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>

                <Navbar />
            </div>
        </div>
    )
}

export default SlotsBooking
