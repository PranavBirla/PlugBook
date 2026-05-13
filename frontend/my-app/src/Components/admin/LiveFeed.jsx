import React from "react";

const LiveFeed = ({ recentBookings }) => {

    return (

        <div className="rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-7">

            <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                Live Operations
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                Grid Activity
            </h2>

            <div className="mt-7 flex flex-col gap-4 max-h-[650px] overflow-y-auto pr-2">

                {
                    recentBookings.map((booking) => (

                        <div
                            key={booking._id}
                            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <div className="flex items-center gap-2">

                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                                        <p className="text-sm text-zinc-400">
                                            Live Booking Event
                                        </p>

                                    </div>

                                    <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                                        {booking.user?.fullName} booked {booking.chargerType} charger
                                    </h3>

                                    <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                                        {booking.station?.stationName}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};

export default LiveFeed;