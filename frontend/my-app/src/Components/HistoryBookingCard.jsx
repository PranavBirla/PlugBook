import React from "react";

import {
    MoveRight,
    CalendarDays,
    Plug,
    ChevronRight,
    History,
    Clock3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const HistoryBookingCard = ({ booking }) => {

    const navigate = useNavigate();

    const handleOpenTicket = () => {

        navigate("/tickets", {
            state: { booking },
        });

    };

    return (

        <div
            onClick={handleOpenTicket}
            className="
                history-card
                group

                relative
                overflow-hidden

                cursor-pointer

                rounded-[34px]

                min-h-[260px]
                md:min-h-[290px]

                p-5
                md:p-7

                flex
                flex-col
                justify-between
            "
            style={{
                backgroundImage:
                    "url('/booking-bg-dead.jpg')"
            }}
        >

            {/* DEAD OVERLAY */}

            <div className="
                absolute
                inset-0

                bg-gradient-to-br
                from-zinc-400/10
                via-zinc-200/15
                to-zinc-400/10
            " />

            {/* GRAY GLASS LAYER */}

            <div className="
                absolute
                inset-0

                backdrop-blur-[3px]

                bg-zinc-100/10
            " />

            {/* SUBTLE GLOW */}

            <div className="
                absolute
                -bottom-16
                -right-10

                w-60
                h-60

                bg-zinc-400/10

                blur-[100px]

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-500
            " />

            {/* FADED NOISE EFFECT */}

            <div className="
                absolute
                inset-0

                opacity-[0.03]

                bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
                bg-[size:18px_18px]
            " />

            {/* CONTENT */}

            <div className="
                relative
                z-10

                flex
                flex-col
                h-full
            ">

                {/* TOP */}

                <div className="
                    flex
                    items-start
                    justify-between
                    gap-4
                ">

                    {/* TIME */}

                    <div>

                        <div className="
                            flex
                            items-center
                            gap-3

                            text-white
                        ">

                            <h1 className="
                                text-3xl
                                md:text-5xl

                                font-black

                                tracking-tight

                                text-zinc-100
                            ">
                                {new Date(booking.startTime).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </h1>

                            <MoveRight
                                strokeWidth={2}
                                className="
                                    text-zinc-300
                                "
                            />

                            <h1 className="
                                text-3xl
                                md:text-5xl

                                font-black

                                tracking-tight

                                text-zinc-400
                            ">
                                {new Date(booking.endTime).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </h1>

                        </div>

                        {/* FADED TIMELINE */}

                        <div className="
                            mt-4

                            w-24
                            h-[3px]

                            rounded-full

                            bg-gradient-to-r
                            from-zinc-500
                            to-zinc-700
                        " />

                    </div>

                    {/* STATUS */}

                    <div
                        className={` px-4 py-2 rounded-full text-xs md:text-sm font-medium border backdrop-blur-xl shadow-lg whitespace-nowrap

                ${booking.status === "cancelled"
                                ? `
                border-red-500/60
                bg-red-500/40
                text-red-700
                `
                                : `
                border-gray-500/20
                bg-gray-500/10
                text-gray-300
                `
                            }
                `}
                    >

                        {booking.status === "cancelled"
                            ? "Cancelled"
                            : "Expired"
                        }

                    </div>

                </div>

                {/* MIDDLE */}

                <div className="mt-8">

                    {/* STATION */}

                    <h2 className="
                        text-2xl
                        md:text-4xl

                        font-bold

                        text-zinc-200

                        leading-tight

                        max-w-[90%]
                    ">
                        {booking.station?.stationName}
                    </h2>

                    {/* SUBTEXT */}

                    <div className="
                        mt-5

                        flex
                        flex-wrap
                        items-center
                        gap-3

                        text-zinc-400
                    ">

                        <div className="
                            flex
                            items-center
                            gap-2
                        ">
                            <History size={15} />

                            <p className="
                                text-sm
                                md:text-base
                            ">
                                Session Completed
                            </p>
                        </div>

                        <div className="
                            w-1
                            h-1
                            rounded-full
                            bg-zinc-600
                        " />

                        <div className="
                            flex
                            items-center
                            gap-2
                        ">
                            <Clock3 size={15} />

                            <p className="
                                text-sm
                                md:text-base
                            ">
                                Archived Booking
                            </p>
                        </div>

                    </div>

                </div>

                {/* INFO STRIP */}

                <div className="
                    mt-8

                    grid
                    grid-cols-3

                    overflow-hidden

                    rounded-[24px]

                    border
                    border-zinc-500/10

                    bg-white/[0.04]

                    backdrop-blur-2xl
                ">

                    {/* DATE */}

                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center

                        gap-2

                        py-4

                        border-r
                        border-zinc-500/10
                    ">

                        <CalendarDays
                            strokeWidth={1.5}
                            size={17}
                            className="text-zinc-900"
                        />

                        <p className="
                            text-[11px]
                            md:text-xs

                            text-zinc-800

                            font-medium

                            text-center
                        ">
                            {new Date(booking.startTime).toLocaleDateString()}
                        </p>

                    </div>

                    {/* START */}

                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center

                        gap-2

                        py-4

                        border-r
                        border-zinc-500/10
                    ">

                        <Clock3
                            strokeWidth={1.5}
                            size={17}
                            className="text-zinc-900"
                        />

                        <p className="
                            text-[11px]
                            md:text-xs

                            text-zinc-800

                            font-medium
                        ">
                            {new Date(booking.startTime).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>

                    </div>

                    {/* CHARGER */}

                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center

                        gap-2

                        py-4
                    ">

                        <Plug
                            strokeWidth={1.5}
                            size={17}
                            className="text-zinc-900"
                        />

                        <p className="
                            text-[11px]
                            md:text-xs

                            text-zinc-800

                            font-medium
                        ">
                            {booking.chargerType}
                        </p>

                    </div>

                </div>

                {/* BOTTOM */}

                <div className="
                    mt-6

                    flex
                    items-center
                    justify-between
                    gap-4
                ">

                    {/* GLASS PILL */}

                    <div className="
                        flex
                        items-center
                        gap-3

                        px-5
                        py-3

                        rounded-full

                        bg-zinc-400/10

                        border
                        border-zinc-500/10

                        backdrop-blur-xl

                        text-zinc-300

                        text-sm
                        md:text-base
                    ">

                        <div className="
                            w-2
                            h-2

                            rounded-full

                            bg-zinc-500
                        " />

                        Booking Archived

                    </div>

                    {/* ACTION */}

                    <div className="
                        flex
                        items-center
                        gap-2

                        text-zinc-300

                        group-hover:translate-x-1

                        transition-all
                        duration-300
                    ">

                        <span className="
                            text-sm
                            md:text-base

                            font-medium
                        ">
                            View Ticket
                        </span>

                        <ChevronRight size={18} />

                    </div>

                </div>

            </div>

            <style jsx>{`

                .history-card {

                    background-size: cover;
                    background-position: center;

                    transition:
                        transform 0.45s ease,
                        box-shadow 0.45s ease;

                    box-shadow:
                        0 10px 40px rgba(0,0,0,0.18);

                    filter:
                        saturate(0.65);
                }

                .history-card:hover {

                    transform:
                        translateY(-4px)
                        scale(1.005);

                    box-shadow:
                        0 20px 60px rgba(0,0,0,0.3);

                    filter:
                        saturate(0.8);
                }

            `}</style>

        </div>

    );

};

export default HistoryBookingCard;