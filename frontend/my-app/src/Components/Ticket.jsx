
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
    Clock3,
    Plug,
    TicketCheck,
    CalendarDays,
    MoveRight,
    MapPin,
} from "lucide-react";

const Ticket = ({ booking }) => {
    const [showBarcode, setShowBarcode] = useState(false);
    const navigate = useNavigate();

    if (!booking) {
        return null;
    }

    const now = new Date();

    const start = new Date(booking.startTime);

    const end = new Date(booking.endTime);

    let status = "";

    let liveText = "";

    if (now < start) {

        status = "Upcoming";

        const diffMs = start - now;

        const mins = Math.floor(diffMs / (1000 * 60));

        liveText =
            mins < 60
                ? `Starts in ${mins} mins`
                : `Starts in ${Math.floor(mins / 60)}h ${mins % 60}m`;

    } else if (now >= start && now <= end) {

        status = "Ongoing";

        const diffMs = end - now;

        const mins = Math.floor(diffMs / (1000 * 60));

        liveText =
            mins < 60
                ? `Ends in ${mins} mins`
                : `Ends in ${Math.floor(mins / 60)}h ${mins % 60}m`;

    } else {

        status = "Expired";

        liveText = "Reservation completed";

    }

    return (

        <div
            className="
                relative overflow-hidden
                w-full max-w-[430px]
                rounded-[36px]
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-3xl
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
        >

            {/* BG */}

            <div className="absolute inset-0">

                <img
                    src="/charging-station.png"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

            </div>

            {/* GLOW */}

            <div className="
                absolute top-0 left-0
                w-full h-[300px]
                bg-[#895CE7]/10 blur-[120px]
            " />

            {/* TICKET CUTS */}


            {/* CONTENT */}

            <div className="relative z-10 p-5 md:p-6">

                {/* HEADER */}

                <div className="flex items-start justify-between gap-4">

                    <div>

                        <div className="
                            w-fit px-4 py-2
                            rounded-full
                            border border-white/10
                            bg-white/10
                            backdrop-blur-xl
                            text-[#eadfff]
                            text-[11px]
                            font-medium
                            tracking-[0.18em]
                            uppercase
                        ">

                            Reservation Pass

                        </div>

                        <h1 className="
                            mt-5
                            text-3xl md:text-4xl
                            leading-[0.95]
                            font-black
                            tracking-tight
                            text-white
                        ">

                            {booking.station?.stationName || "PlugBook Station"}

                        </h1>

                        <div className="
                            mt-4
                            flex items-center gap-2
                            text-zinc-300 text-sm
                        ">

                            <MapPin size={15} />

                            PlugBook EV Network

                        </div>

                    </div>

                    {/* STATUS */}

                    <div className={`
                        shrink-0
                        px-4 py-2
                        rounded-full
                        border
                        backdrop-blur-xl
                        text-xs font-medium

                        ${status === "Ongoing"
                            ? "border-green-400/20 bg-green-400/10 text-green-300"
                            : status === "Upcoming"
                                ? "border-[#895CE7]/20 bg-[#895CE7]/15 text-[#e5d8ff]"
                                : "border-zinc-400/10 bg-zinc-400/10 text-zinc-400"
                        }
                    `}>

                        {status}

                    </div>

                </div>

                {/* TIMELINE */}

                <div className="
                    mt-10
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.05]
                    backdrop-blur-2xl
                    p-5
                ">

                    <div className="
                        flex  justify-between
                    ">

                        {/* FROM */}

                        <div>

                            <p className="
                                text-zinc-400 text-sm
                            ">

                                From

                            </p>

                            <h2 className="
                                mt-2
                                text-2xl md:text-3xl
                                font-black
                                text-white
                            ">

                                {new Date(booking?.startTime)
                                    .toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}

                            </h2>

                        </div>

                        {/* LINE */}

                        <div className="
                            flex-1
                            px-4
                            flex items-center
                            relative
                        ">



                            <MoveRight
                                size={20}
                                className="
                                    absolute left-1/2
                                    -translate-x-1/2
                                    text-[#d9c3ff]
                                    mt-6
                                "
                            />

                        </div>

                        {/* TO */}

                        <div className="text-right">

                            <p className="
                                text-zinc-400 text-sm
                            ">

                                To

                            </p>

                            <h2 className="
                                mt-2
                                text-2xl md:text-3xl
                                font-black
                                text-white
                            ">

                                {new Date(booking?.endTime)
                                    .toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}

                            </h2>

                        </div>

                    </div>

                    {/* LIVE */}

                    <div className="
                        mt-6
                        rounded-2xl
                        border border-white/10
                        bg-black/20
                        backdrop-blur-xl
                        px-4 py-4
                        text-center
                    ">

                        <p className="
                            text-[#e5d8ff]
                            text-sm font-medium
                        ">

                            {liveText}

                        </p>

                    </div>

                </div>

                {/* DIVIDER */}

                <div className="
                    relative my-8
                    h-[1px]
                    border-t border-dashed border-white/10
                " />

                {/* LOWER SECTION */}

                <div className="
                    flex gap-4
                    items-stretch
                ">

                    {/* DETAILS */}

                    <div className="
                        flex-1
                        grid grid-cols-2
                        gap-3
                    ">

                        {/* DATE */}

                        <div className="
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-2xl
                            flex flex-col
                            justify-center
                            items-center
                            py-2
                            px-1
                            sm:p-4
                        ">

                            <div className="
                                flex items-center gap-2
                                text-zinc-300
                            ">

                                <CalendarDays size={20} />

                                <p className=" hidden sm:block sm:text-xs">
                                    Reservation Date
                                </p>

                            </div>

                            <h3 className="
                                mt-3
                                text-sm 
                                sm:font-semibold
                                text-white
                            ">

                                {new Date(booking?.startTime)
                                    .toLocaleDateString()}

                            </h3>

                        </div>

                        {/* CHARGER */}

                        <div className="
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-2xl
                            flex flex-col
                            justify-center
                            items-center
                            py-2
                            px-1
                            sm:p-4
                        ">

                            <div className="
                                flex items-center gap-2
                                text-zinc-300
                            ">

                                <Plug size={20} />

                                <p className=" hidden sm:block sm:text-xs">
                                    Charger Type
                                </p>

                            </div>

                            <h3 className="
                                mt-3
                                text-sm 
                                sm:font-semibold
                                text-white
                            ">

                                {booking?.chargerType}

                            </h3>

                        </div>

                        {/* STATUS */}

                        <div className="
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-2xl
                            flex flex-col
                            justify-center
                            items-center
                            py-2
                            px-2
                            sm:p-4
                        ">

                            <div className="
                                flex flex-col sm:flex-row items-center gap-2
                                text-zinc-300
                            ">

                                <Clock3 size={20} />

                                <p className="text-xs">
                                    Reservation Status
                                </p>

                            </div>

                            <h3 className="
                                mt-3
                                text-sm font-semibold
                                text-white
                            ">

                                {status}

                            </h3>

                        </div>

                        {/* BOOKING ID */}

                        <div className="
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-2xl
                            p-4
                        ">

                            <div className="
                                flex items-center gap-2
                                text-zinc-300
                            ">

                                <TicketCheck size={20} />

                                <p className="text-xs">
                                    Booking ID
                                </p>

                            </div>

                            <h3 className="
                                mt-3
                                text-[11px]
                                font-medium
                                text-white
                                break-all
                            ">

                                {booking?._id}

                            </h3>

                        </div>

                    </div>

                    {/* QR */}

                    <div
                        onClick={() => setShowBarcode(true)}
                        className="
                        shrink-0
                        w-[110px]
                        rounded-[24px]
                        border border-white/10
                        bg-white/[0.05]
                        backdrop-blur-2xl
                        p-3
                        flex flex-col
                        items-center justify-around
                    ">
<div className="text-sm text-zinc-400">click to zoom</div>
                        <img
                            src='/dummy-barcode.png'
                            alt=''
                            className='
                                w-full aspect-square
                                object-contain
                                rounded-xl invert
                            '
                        />

                        <p className='
                            mt-3
                            text-[10px]
                            text-zinc-400
                            text-center
                        '>

                            Scan Verification

                        </p>

                    </div>

                </div>

            </div>

            {
                showBarcode && (

                    <div
                        onClick={() => setShowBarcode(false)}
                        className="
            fixed inset-0
            z-[999]
            bg-black/[0.5]
            backdrop-blur-md

            flex items-center justify-center
            p-6
         "
                    >

                        {/* POPUP CARD */}

                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="
               relative
               w-[320px] sm:w-[420px]
               rounded-[36px]
               border border-white/10
               bg-black/[0.05]
               backdrop-blur-2xl
               p-6

               shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
                        >

                            {/* GLOW */}

                            <div className="
               absolute inset-0
               bg-[#895CE7]/10
               blur-[100px]
            " />

                            {/* CONTENT */}

                            <div className="relative z-10">

                                <img
                                    src="/dummy-barcode.png"
                                    alt=""
                                    className="
                     w-full
                     aspect-square
                     object-contain
                     invert
                  "
                                />

                                <p className="
                  mt-5
                  text-center
                  text-zinc-300
                  text-md
               ">

                                  Booking id : <span className="text-sm text-zinc"> {booking?._id}</span> 

                                </p>

                            </div>

                        </div>

                    </div>

                )
            }


        </div>

    );

};

export default Ticket;