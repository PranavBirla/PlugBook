import React, { useState } from "react";
import { Bell } from 'lucide-react';
import CardHome from '../Components/CardHome';
import Navbar from '../Components/Navbar';
import { MoveRight } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Plug } from 'lucide-react';
import { Zap } from 'lucide-react';
import Top from "../Components/Top";

const SlotsBooking = () => {
    const [formData, setFormData] = useState({
        stationId: "665f1a2b3c4d5e6f78901234",
        chargerType: "",
        from: "",
        to: ""
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
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const duration = getDuration();

        if (!formData.chargerType || duration <= 0) {
            alert("Invalid input");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/booking/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", 
                body: JSON.stringify({
                    stationId: formData.stationId,
                    chargerType: formData.chargerType,
                    duration: duration
                })
            });

            const data = await res.json();
            console.log(data);

        } catch (err) {
            console.error(err);
        }
    };


    const getDuration = () => {
        const [fh, fm] = formData.from.split(":").map(Number);
        const [th, tm] = formData.to.split(":").map(Number);

        return (th * 60 + tm) - (fh * 60 + fm);
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
                                        Select Date & Time(from)
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            name="fromDate"
                                            className="w-full border rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                        />
                                        <input
                                            type="time"
                                            name="fromTime"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-3 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 mt-2 block">
                                        Select Date & Time(to)
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            name="toDate"
                                            className="w-full border rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                        />
                                        <input
                                            type="time"
                                            name="toTime"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-3 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
                                        />

                                    </div>
                                </div>


                                {/* <div className="flex items-center justify-center gap-4">

                                    <div className="flex-1 w-1/2">
                                        <label className="text-xs text-gray-500">From</label>
                                      
                                    </div>



                                    <div className="flex-1 w-1/2">
                                        <label className="text-xs text-gray-500">To</label>
                                       
                                    </div>
                                </div> */}

                            </div>

                            <div id="rightsection">
                                <div>
                                    <div className="flex flex-col justify-between gap-3 mb-3 ">
                                        <h2 className="text-sm font-semibold text-gray-700">Charging Type</h2>

                                        <div className="flex items-center justify-center gap-3 text-xs">
                                            <button
                                                type="button"
                                                onClick={() => handleType("AC")}
                                                className="font-light w-32 text-sm flex items-center border-zinc-200 border-[1px] justify-center gap-2  text-black py-4 px-2 rounded-2xl hover:scale-105 transition" >
                                                <h1 className='text-lg'> AC</h1>
                                                <Plug size={22} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleType("DC")}
                                                className="font-light w-32 text-sm flex items-center justify-center gap-2 border-zinc-200 border-[1px] text-black py-4 px-2 rounded-2xl hover:scale-105 transition" >
                                                <h1 className='text-lg'>DC</h1>
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
