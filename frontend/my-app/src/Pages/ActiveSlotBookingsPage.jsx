import React from 'react';
import ActiveBookingCard from '../Components/ActiveBookingCard';
import Top from '../Components/Top';
import Navbar from '../Components/Navbar';
import Loader from "../Components/Loader"
import { CircleArrowLeft } from 'lucide-react';

import { useEffect, useState } from "react";
import API from "../api/axios";

const ActiveSlotBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const res = await API.get(
                    "/api/bookings/active-bookings",
                    {
                        withCredentials: true
                    }
                );

                setBookings(res.data);

            } catch (err) {
                console.error(
                    "Fetch bookings error:",
                    err
                );
            }
            finally{
                setLoading(false);
            }

        };

        fetchBookings();

    }, []);

    const ongoingCount = bookings.filter((booking) => {

        const now = new Date();
        const start = new Date(booking.startTime);
        const end = new Date(booking.endTime);

        return now >= start && now <= end;

    }).length;

    if(loading){
        return <Loader/>;
    }

    return (

        <div className="
            relative
            min-h-screen
            overflow-hidden
        ">

            {/* BACKGROUND */}

            <div className="fixed inset-0 -z-10">

                {/* IMAGE */}

                <div
                    className="
                        h-full
                        w-full
                        bg-cover
                        bg-center
                        bg-no-repeat
                    "
                    style={{
                        backgroundImage:
                            "url('/background1.jpg')"
                    }}
                />

                {/* DARK OVERLAY */}

                <div className="
                    absolute
                    inset-0
                    bg-black/40
                " />

            </div>

            {/* TOP */}

            <Top />

            {/* GLOW */}

            <div className="
                absolute
                top-0
                left-0
                w-full
                h-[500px]
                bg-[#895CE7]/10
                blur-[120px]
                -z-10
            " />

            {/* CONTENT */}

            <div className="
                relative
                z-10

                max-w-6xl
                mx-auto

                px-4
                md:px-8

                pt-8
                md:pt-14

                pb-28
                md:pb-16
            ">

                {/* HEADING */}

                <div className="mb-10">

                    <h1 className="
                        text-4xl
                        md:text-6xl
                        font-black
                        tracking-tight
                        text-white
                    ">
                        Active
                    </h1>

                    <h1 className="
                        text-4xl
                        md:text-6xl
                        font-black
                        tracking-tight
                        text-[#d8c2ff]
                    ">
                        Bookings
                    </h1>

                    <p className="
                        mt-4
                        text-zinc-300
                        max-w-xl
                        text-sm
                        md:text-base
                    ">
                        Track your ongoing and upcoming charging sessions with real-time booking access.
                    </p>

                </div>

                {/* STATS PILLS */}

                {bookings.length > 0 && (

                    <div className="
                        flex
                        flex-wrap
                        gap-3
                        mb-10
                    ">

                        {/* TOTAL */}

                        <div className="
                            px-5
                            py-3

                            rounded-full

                            bg-white/10
                            border
                            border-white/10

                            backdrop-blur-xl

                            text-white
                            text-sm
                            md:text-base
                        ">
                            {bookings.length} Active
                        </div>

                        {/* ONGOING */}

                        <div className="
                            px-5
                            py-3

                            rounded-full

                            bg-green-400/10
                            border
                            border-green-300/20

                            backdrop-blur-xl

                            text-green-200
                            text-sm
                            md:text-base
                        ">
                            {ongoingCount} Ongoing
                        </div>

                        {/* UPCOMING */}

                        <div className="
                            px-5
                            py-3

                            rounded-full

                            bg-[#895CE7]/20
                            border
                            border-[#d7c1ff]/10

                            backdrop-blur-xl

                            text-[#eadfff]
                            text-sm
                            md:text-base
                        ">
                            {bookings.length - ongoingCount} Upcoming
                        </div>

                    </div>

                )}

                {/* BOOKINGS */}

                <div className="
                    flex
                    flex-col
                    gap-6
                ">

                    {bookings.length === 0 ? (

                        <div className="
                            relative
                            overflow-hidden

                            rounded-[32px]

                            border
                            border-white/10

                            bg-white/10
                            backdrop-blur-2xl

                            p-10
                            md:p-16

                            text-center
                        ">

                            {/* GLOW */}

                            <div className="
                                absolute
                                inset-0
                                bg-[#895CE7]/10
                                blur-[100px]
                            " />

                            <div className="relative z-10">

                                <h2 className="
                                    text-2xl
                                    md:text-4xl
                                    font-bold
                                    text-white
                                ">
                                    No Active Bookings
                                </h2>

                                <p className="
                                    mt-4
                                    text-zinc-300
                                    max-w-md
                                    mx-auto
                                ">
                                    Your upcoming and ongoing charging sessions will appear here.
                                </p>

                            </div>

                        </div>

                    ) : (

                        bookings.map((booking) => (
                            <ActiveBookingCard
                                key={booking._id}
                                booking={booking}
                            />
                        ))

                    )}

                </div>

            </div>

            {/* MOBILE NAVBAR */}

            <div className="md:hidden">
                <Navbar />
            </div>

        </div>

    );
};

export default ActiveSlotBookings;