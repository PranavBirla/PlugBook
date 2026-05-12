import React from 'react';

import HistoryBookingCard from '../Components/HistoryBookingCard';
import Loader from "../Components/Loader"

import Top from '../Components/Top';
import Navbar from '../Components/Navbar';

import { useEffect, useState } from "react";

import API from "../api/axios";

const HistorySlotBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const res = await API.get(
                    "/api/bookings/my-bookings",
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

            } finally {
                setLoading(false);
            }

        };

        fetchBookings();

    }, []);
    
    if (loading) {
        return <Loader />;
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

            {/* ATMOSPHERIC GLOW */}

            <div className="
                absolute
                top-0
                left-0

                w-full
                h-[500px]

                bg-zinc-500/10

                blur-[140px]

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

                        text-zinc-100
                    ">
                        Booking
                    </h1>

                    <h1 className="
                        text-4xl
                        md:text-6xl

                        font-black

                        tracking-tight

                        text-zinc-500
                    ">
                        History
                    </h1>

                    <p className="
                        mt-4

                        text-zinc-400

                        max-w-xl

                        text-sm
                        md:text-base
                    ">
                        Your previous charging sessions and completed bookings are archived here for future reference.
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

                            bg-zinc-400/10

                            border
                            border-zinc-500/10

                            backdrop-blur-xl

                            text-zinc-200

                            text-sm
                            md:text-base
                        ">
                            {bookings.length} Archived
                        </div>

                        {/* COMPLETED */}

                        <div className="
                            px-5
                            py-3

                            rounded-full

                            bg-zinc-500/10

                            border
                            border-zinc-500/10

                            backdrop-blur-xl

                            text-zinc-300

                            text-sm
                            md:text-base
                        ">
                            Completed Sessions
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
                            border-zinc-500/10

                            bg-white/[0.03]

                            backdrop-blur-2xl

                            p-10
                            md:p-16

                            text-center
                        ">

                            {/* GLOW */}

                            <div className="
                                absolute
                                inset-0

                                bg-zinc-500/10

                                blur-[120px]
                            " />

                            <div className="relative z-10">

                                <h2 className="
                                    text-2xl
                                    md:text-4xl

                                    font-bold

                                    text-zinc-200
                                ">
                                    No Booking History
                                </h2>

                                <p className="
                                    mt-4

                                    text-zinc-400

                                    max-w-md
                                    mx-auto
                                ">
                                    Your completed charging sessions will appear here once your bookings expire.
                                </p>

                            </div>

                        </div>

                    ) : (

                        bookings.map((booking) => (

                            <HistoryBookingCard
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

export default HistorySlotBookings;