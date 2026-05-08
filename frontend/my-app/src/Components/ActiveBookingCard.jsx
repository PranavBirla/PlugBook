import React from 'react';
import { MoveRight, CalendarDays, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const ActiveBookingCard = ({ booking }) => {

    const now = new Date();
    const start = new Date(booking.startTime);
    const end = new Date(booking.endTime);

    const navigate = useNavigate();

    const handleOpenTicket = () => {
        navigate("/tickets", {
            state: { booking }
        });
    };

    let status = "";

  if (now < start) {
    status = "Upcoming";
  } else if (now >= start && now <= end) {
    status = "Ongoing";
  }


    return (

        <div
            onClick={handleOpenTicket}
            className="
                booking-card
                relative
                overflow-hidden
                rounded-[32px]

                min-h-[260px]
                md:min-h-[290px]

                p-5
                md:p-7

                flex
                flex-col
                justify-between

                cursor-pointer
                group
            "
            style={{
                backgroundImage:
                    "url('/booking-bg.jpg')"
            }}
        >

            {/* IMAGE OVERLAY */}

            <div className="
                absolute
                inset-0
                bg-gradient-to-br
                from-black/80
                via-black/65
                to-[#895CE7]/30
            " />

            {/* GLASS LAYER */}

            <div className="
                absolute
                inset-0
                backdrop-blur-[2px]
            " />

            {/* PURPLE GLOW */}

            <div className="
                absolute
                -bottom-10
                -right-10
                w-52
                h-52
                bg-[#895CE7]/20
                blur-[90px]
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
            " />

            {/* CONTENT */}

            <div className="relative z-10 flex flex-col h-full">

                {/* TOP */}

                <div className="flex items-start justify-between gap-4">

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
                            ">
                                {new Date(booking?.startTime).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </h1>

                            <MoveRight
                                strokeWidth={1.5}
                                className="opacity-70"
                            />

                            <h1 className="
                                text-3xl
                                md:text-5xl
                                font-black
                                tracking-tight
                            ">
                                {new Date(booking?.endTime).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </h1>

                        </div>

                        {/* TIMELINE ACCENT */}

                        <div className="
                            mt-4
                            w-24
                            h-[3px]
                            rounded-full
                            bg-gradient-to-r
                            from-[#895CE7]
                            to-[#c9afff]
                        " />

                    </div>

                    {/* STATUS PILL */}

                    <div
                        className={` px-4 py-2 rounded-full text-xs md:text-sm font-medium border backdrop-blur-xl shadow-lg whitespace-nowrap

                            ${status === "Ongoing"
                                ? "bg-green-400/10 text-green-300 border-green-300/20"
                                : "bg-[#895CE7]/20 text-[#e7d8ff] border-[#caaeff]/20"
                            }
                        `}
                    >
                        {status}
                    </div>

                </div>

                {/* MIDDLE */}

                <div className="mt-8">

                    {/* STATION NAME */}

                    <h2 className="
                        text-2xl
                        md:text-4xl
                        font-bold
                        text-white
                        leading-tight
                        max-w-[90%]
                    ">
                        {booking.station?.stationName}
                    </h2>

                    {/* DATE */}

                    <div className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-zinc-300
                    ">

                        <CalendarDays size={16} />

                        <p className="
                            text-sm
                            md:text-base
                        ">
                            {new Date(booking?.startTime).toDateString()}
                        </p>

                    </div>

                </div>

                {/* BOTTOM */}

                <div className="
                    mt-8
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

                        bg-white/10
                        border
                        border-white/10

                        backdrop-blur-xl

                        text-white
                        text-sm
                        md:text-base
                    ">

                        <div className="
                            w-2
                            h-2
                            rounded-full
                            bg-[#caaeff]
                        " />

                        Active Booking

                    </div>

                    {/* BUTTON */}

                    <div className="
                        flex
                        items-center
                        gap-2

                        text-white

                        group-hover:translate-x-1
                        transition-all
                        duration-300
                    ">

                        <span className="
                            text-sm
                            md:text-base
                            font-medium
                        ">
                            Open Ticket
                        </span>

                        <ChevronRight size={18} />

                    </div>

                </div>

            </div>

            <style jsx>{`

                .booking-card {
                    background-size: cover;
                    background-position: center;
                    transition:
                        transform 0.45s ease,
                        box-shadow 0.45s ease;
                    box-shadow:
                        0 10px 40px rgba(0,0,0,0.15);
                }

                .booking-card:hover {
                    transform:
                        translateY(-5px)
                        scale(1.01);

                    box-shadow:
                        0 20px 60px rgba(137,92,231,0.28);
                }

            `}</style>

        </div>

    );
};

export default ActiveBookingCard;