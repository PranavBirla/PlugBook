import React from 'react'
import HistoryBookingCard from '../Components/HistoryBookingCard'
import Navtop from '../Components/NavTop'
import Top from '../Components/Top'
import Navbar from '../Components/Navbar'
import { useEffect, useState } from "react";
import API from "../api/axios";


const HistorySlotBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await API.get("/api/bookings/my-bookings", {
                    withCredentials: true
                });

                setBookings(res.data);

            } catch (err) {
                console.error("Fetch bookings error:", err);
            }
        };

        fetchBookings();
    }, []);


    return (
        <div className='w-full '>
            <Top />

            <div className='mx-2 flex flex-col items-center justify-center lg:w-4/5 lg:m-auto'>

                {bookings.length === 0 ? (
                    <p className="text-center mt-10 text-gray-500">
                        No Bookings Till Now!
                    </p>
                ) : (
                    bookings.map((booking) => (
                        <HistoryBookingCard key={booking._id} booking={booking} />
                    ))
                )}

            </div>

            <Navbar />
        </div>
    );
}

export default HistorySlotBookings
