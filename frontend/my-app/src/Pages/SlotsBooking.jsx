import React, { useState, useEffect } from "react";
import { Bell } from 'lucide-react';
import CardHome from '../Components/CardHome';
import Navbar from '../Components/Navbar';
import { MoveRight } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Plug } from 'lucide-react';
import { Zap } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Top from "../Components/Top";
import API from "../api/axios";
import { MapPinCheckInside } from 'lucide-react';

const SlotsBooking = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const station = location.state?.station;
    const stationIdFromState = station?._id;



    useEffect(() => {
        if (!station) {
            navigate("/map");
        }
    }, [station, navigate]);




    const [formData, setFormData] = useState({
        stationId: stationIdFromState || "",
        chargerType: "",
        fromDate: "",
        toDate: "",
        fromTime: "",
        toTime: ""
    });

    const [availability, setAvailability] = useState(null);


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


    const fetchAvailability = async () => {
        try {
            const startDateTime = new Date(`${formData.fromDate}T${formData.fromTime}:00`);
            const endDateTime = new Date(`${formData.toDate}T${formData.toTime}:00`);

            const res = await API.get(
                "/api/station/nearby-stations",
                {
                    params: {
                        lat: station.location.lat,
                        lng: station.location.lng,
                        startTime: startDateTime.toISOString(),
                        endTime: endDateTime.toISOString()
                    }
                }
            );

            // Find THIS station from response
            const updatedStation = res.data.find(
                (s) => s._id === station._id
            );

            setAvailability(updatedStation?.chargers);

        } catch (err) {
            console.error("Availability Error:", err);
        }
    };

    useEffect(() => {
        if (
            formData.fromDate &&
            formData.fromTime &&
            formData.toDate &&
            formData.toTime
        ) {
            fetchAvailability();
        }
    }, [formData.fromDate, formData.fromTime, formData.toDate, formData.toTime]);


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

            const res = await API.post(
                "/api/bookings/create",
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
            navigate("/tickets", {

                state: { bookingData: res.data },
            });

            console.log(res.data);

        } catch (err) {
            console.error("Booking Error:", err.res?.data || err.message);
        }
    };


    return (
        <div className=' '>
            <Top />
            <div className='w-full h-full flex flex-col lg:flex lg:flex-row justify-end'>
                <div className='w-full lg:w-1/2 lg:hidden'>

                    <div className='lg:hidden'>
                        <CardHome />
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 mx-4 mt-3 shadow-sm md:mx-12  lg:flex lg:flex-col lg:gap-4 lg:px-10 lg:mx-40 lg:h-2/3">
                    <div className="hidden lg:block lg:w-full"><img className="rounded-2xl" src="public\img-car-home.png" alt="" /></div>
                    <h2 className="text-lg font-semibold">
                        {station?.stationName}
                    </h2>

                    <p className="text-sm text-gray-500 flex">
                        <MapPinCheckInside size={20} />
                        {station?.distance !== undefined && (
                            station.distance < 1
                                ? `${(station.distance * 1000).toFixed(0)} m away`
                                : `${station.distance.toFixed(2)} km away`
                        )}
                    </p>

                    <div className="flex gap-4 mt-2 text-sm">

                        <p>
                            AC:
                            <span className="text-green-500 font-semibold ml-1">
                                {availability ? availability.AC.available : station?.chargers.AC.available}
                            </span>
                            / {station?.chargers.AC.total}
                        </p>

                        <p>
                            DC:
                            <span className="text-green-500 font-semibold ml-1">
                                {availability ? availability.DC.available : station?.chargers.DC.available}
                            </span>
                            / {station?.chargers.DC.total}
                        </p>

                        {availability && (
                            <p className="text-xs mt-2 text-gray-500">
                                Showing availability for selected time
                            </p>
                        )}

                    </div>

                </div>

                <div className='  '>
                    <form onSubmit={handleSubmit}
                        className=" bg-white flex items-center justify-center border border-gray-200 rounded-2xl mx-4 md:mx-12 p-4 mt-3  lg:h-2/3">

                        <div className="w-full h-full md bg-white rounded-2xl p-10 flex flex-col gap-4 md:flex-row md:justify-center md:gap-20 lg:justify-center lg:flex-col  ">

                            <div id="leftsection">
                                <div>



                                </div>
                                <div>
                                    <label className="text-m font-black   text-gray-500 mb-2 mt-2 block">
                                        Select Date & Time (from)
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            onChange={handleChange}
                                            name="fromDate"
                                            className="w-full border rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-1 focus:ring-purple-200"
                                        />
                                        <input
                                            type="time"
                                            name="fromTime"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-3 py-2 text-gray-500 outline-none focus:ring-1 focus:ring-purple-200"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-m font-black   text-gray-500 mb-2 mt-2 block">
                                        Select Date & Time (to)
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            name="toDate"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-1 focus:ring-purple-200"
                                        />
                                        <input
                                            type="time"
                                            name="toTime"
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-3 py-2 text-gray-500 outline-none focus:ring-1 focus:ring-purple-200"
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
                                    <div className="flex flex-col justify-between gap-4 mb-3 ">
                                        <h2 className="text-m font-black   text-gray-500">Charging Type</h2>

                                        <div className="flex items-center justify-center gap-3 text-xs transition-all duration-200">
                                            <button
                                                type="button"
                                                onClick={() => handleType("AC")}
                                                className={`w-32 flex items-center justify-center gap-2 py-2 px-2 rounded-2xl border transition 
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
                                                className={`w-32 flex items-center justify-center gap-2 py-2 px-2 rounded-2xl border transition 
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
                                        className="font-light w-full text-sm flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-3xl hover:scale-105 transition" >

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
