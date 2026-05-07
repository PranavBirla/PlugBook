import React from "react";
import {
    MoveRight,
    Clock,
    CalendarDays,
    Plug,
    ChevronRight,
    History,
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
        group
        relative
        overflow-hidden
        cursor-pointer
        py-3
        px-3
        sm:p-4
        mx-1
        md:mx-20
        xl:mx-28
        rounded-[28px]
        border
        border-zinc-300/50
        bg-gradient-to-br
        from-zinc-100
        via-zinc-50
        to-zinc-200/70
        shadow-[0_6px_25px_rgba(0,0,0,0.08)]
        hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
      "
        >
            {/* subtle glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-zinc-300/10 to-white/10"></div>

            <div className="relative flex gap-4 sm:gap-5 md:gap-7 items-center">

                {/* IMAGE */}
                <div
                    className="
            h-24
            w-28
            md:h-32
            md:w-36
            overflow-hidden
            rounded-3xl
            bg-zinc-200
            shrink-0
          "
                >
                    <img
                        className="
              w-full
              h-full
              object-cover
              grayscale-[25%]
              opacity-90
            "
                        src="/img-car-home.png"
                        alt=""
                    />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-2 w-full">

                    {/* TOP */}
                    <div className="flex justify-between items-start">

                        <div>
                            <h2 className="text-sm md:text-base font-semibold text-zinc-800">
                                {booking.station?.stationName}
                            </h2>

                            <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                                <History size={13} />
                                Booking Completed
                            </p>
                        </div>

                        {/* STATUS */}
                        <div
                            className="
                px-3
                py-1
                rounded-full
                text-[11px]
                md:text-xs
                font-medium
                bg-zinc-300/70
                text-zinc-700
                border
                border-zinc-400/40
                backdrop-blur-md
              "
                        >
                            Expired
                        </div>
                    </div>

                    {/* TIME SECTION */}
                    <div
                        className="
              mx-1
              md:mx-2
              flex
              justify-between
              md:justify-center
              md:gap-24
              items-center
            "
                    >
                        <div>
                            <h1 className="text-lg md:text-2xl font-light text-zinc-800 tracking-wide">
                                {new Date(booking.startTime).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </h1>
                        </div>

                        <div className="flex items-center text-zinc-500">
                            <MoveRight strokeWidth={1.5} size={24} />
                        </div>

                        <div>
                            <h1 className="text-lg md:text-2xl font-light text-zinc-800 tracking-wide">
                                {new Date(booking.endTime).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </h1>
                        </div>
                    </div>

                    {/* INFO STRIP */}
                    <div
                        className="
              mt-1
              w-full
              grid
              grid-cols-3
              overflow-hidden
              rounded-2xl
              border
              border-zinc-300/60
              bg-white/50
              backdrop-blur-xl
            "
                    >
                        {/* DATE */}
                        <div className="flex justify-center items-center gap-2 py-3 border-r border-zinc-300/50">
                            <CalendarDays
                                strokeWidth={1.5}
                                size={17}
                                className="text-zinc-600"
                            />

                            <p className="text-[11px] md:text-xs text-zinc-700 font-medium">
                                {new Date(booking.startTime).toLocaleDateString()}
                            </p>
                        </div>

                        {/* START TIME */}
                        <div className="flex justify-center items-center gap-2 py-3 border-r border-zinc-300/50">
                            <Clock
                                strokeWidth={1.5}
                                size={17}
                                className="text-zinc-600"
                            />

                            <p className="text-[11px] md:text-xs text-zinc-700 font-medium">
                                {new Date(booking.startTime).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>

                        {/* CHARGER */}
                        <div className="flex justify-center items-center gap-2 py-3">
                            <Plug
                                strokeWidth={1.5}
                                size={17}
                                className="text-zinc-600"
                            />

                            <p className="text-[11px] md:text-xs text-zinc-700 font-medium">
                                {booking.chargerType}
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT ICON */}
                <div
                    className="
            hidden
            md:flex
            items-center
            justify-center
            text-zinc-400
            group-hover:text-zinc-700
            transition-colors
          "
                >
                    <ChevronRight strokeWidth={1.5} />
                </div>
            </div>
        </div>
    );
};

export default HistoryBookingCard;