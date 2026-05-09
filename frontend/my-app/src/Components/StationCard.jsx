import { useNavigate } from "react-router-dom";

import {
    MapPin,
    ArrowRight,
} from "lucide-react";

export default function StationCard({
    station,
    isSelected,
    onSelect,
    refProp,
    mobile = false
}) {

    const navigate = useNavigate();

    const totalAvailable =
        station.chargers.AC.available +
        station.chargers.DC.available;

    const totalSlots =
        station.chargers.AC.total +
        station.chargers.DC.total;

    const handleSelect = (e) => {

        e.stopPropagation();

        navigate("/slots", {
            state: { station }
        });

    };

    return (

        <div
            ref={refProp}
            onClick={onSelect}
            className={`
                group relative overflow-hidden cursor-pointer
                border transition-all duration-500 backdrop-blur-md
                shadow-[0_10px_40px_rgba(0,0,0,0.18)]

                ${mobile
                    ? "rounded-[20px]"
                    : "rounded-[30px]"
                }

                ${isSelected
                    ? "border-[#895CE7]/40 bg-[#895CE7]/15 scale-[1.01]"
                    : "border-white/10 bg-white/[0.05] hover:bg-white/[0.08] hover:border-white/20"
                }
            `}
        >

            {/* GLOW */}

            <div className={`
                absolute inset-0 blur-3xl transition-all duration-500

                ${isSelected
                    ? "bg-[#895CE7]/15 opacity-100"
                    : "bg-[#895CE7]/10 opacity-0 group-hover:opacity-100"
                }
            `} />

            {/* MOBILE BG IMAGE */}

            {mobile && (

                <div className="absolute inset-0 overflow-hidden">

                    {/* IMAGE */}

                    <img
                        src="/charging-station.png"
                        alt=""
                        className="w-full h-full object-cover opacity-0.8"
                    />

                    {/* DARK OVERLAY */}

                    <div className="absolute inset-0 bg-black/65" />

                    {/* PURPLE TINT */}

                    <div className="absolute inset-0 bg-[#895CE7]/10" />

                </div>

            )}

            {/* CONTENT */}

            <div className={`
                relative z-10

                ${mobile
                    ? "p-3"
                    : "p-5"
                }
            `}>

                {/* DESKTOP IMAGE */}

                {!mobile && (

                    <div className="relative overflow-hidden rounded-[24px]">

                        <img
                            src="/charging-station.png"
                            alt=""
                            className="w-full h-[180px] object-cover transition-all duration-700 group-hover:scale-105"
                        />

                        {/* OVERLAY */}

                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-[#895CE7]/30" />

                        {/* SLOT */}

                        <div className="absolute top-4 left-4 px-4 py-2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl">

                            <p className="text-[11px] text-zinc-300">
                                Available Slots
                            </p>

                            <h2 className="text-2xl font-black text-white mt-1">
                                {totalAvailable}
                            </h2>

                        </div>

                        {/* DISTANCE */}

                        <div className="absolute bottom-4 right-4 px-4 py-2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl flex items-center gap-2 text-white text-sm">

                            <MapPin size={15} />

                            {station.distance < 1
                                ? `${(station.distance * 1000).toFixed(0)}m`
                                : `${station.distance.toFixed(1)}km`
                            }

                        </div>

                    </div>

                )}

                {/* MOBILE LAYOUT */}

                {mobile ? (

                    <div className="relative z-10">

                        {/* TOP */}

                        <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">

                                <h2 className="text-base font-black tracking-tight text-white leading-tight truncate">
                                    {station.stationName}
                                </h2>

                                <div className="flex items-center gap-2 mt-2 text-zinc-300 text-[11px]">

                                    <MapPin size={11} />

                                    {station.distance < 1
                                        ? `${(station.distance * 1000).toFixed(0)}m away`
                                        : `${station.distance.toFixed(1)}km away`
                                    }

                                </div>

                            </div>

                            {/* STATUS */}

                            <div className={`
                                shrink-0 px-2.5 py-1 rounded-full text-[10px]
                                font-medium border backdrop-blur-xl

                                ${totalAvailable > 0
                                    ? "border-green-400/20 bg-green-400/10 text-green-300"
                                    : "border-red-400/20 bg-red-400/10 text-red-300"
                                }
                            `}>

                                {totalAvailable > 0
                                    ? "Available"
                                    : "Busy"
                                }

                            </div>

                        </div>

                        {/* STATS */}

                        <div className="mt-3 flex items-center gap-2 flex-wrap">

                            {/* AVAILABLE */}

                            <div className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl">

                                <p className="text-[9px] text-zinc-300">
                                    Available
                                </p>

                                <h3 className="text-sm font-black text-white mt-0.5">
                                    {totalAvailable}/{totalSlots}
                                </h3>

                            </div>

                            {/* AC */}

                            <div className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl">

                                <p className="text-[9px] text-zinc-300">
                                    AC
                                </p>

                                <h3 className="text-sm font-black text-white mt-0.5">
                                    {station.chargers.AC.available}/{station.chargers.AC.total}
                                </h3>

                            </div>

                            {/* DC */}

                            <div className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-black/30 backdrop-blur-xl">

                                <p className="text-[9px] text-zinc-300">
                                    DC
                                </p>

                                <h3 className="text-sm font-black text-white mt-0.5">
                                    {station.chargers.DC.available}/{station.chargers.DC.total}
                                </h3>

                            </div>

                        </div>

                        {/* CTA */}

                        <button
                            onClick={handleSelect}
                            className="
                                group/btn mt-3 w-full px-3 py-2.5 rounded-lg
                                border border-white/10 bg-white/10
                                backdrop-blur-xl text-white text-xs font-medium
                                flex items-center justify-center gap-2
                                transition-all duration-300 hover:bg-white/15
                            "
                        >

                            See Station

                            <ArrowRight
                                size={14}
                                className="group-hover/btn:translate-x-1 transition-all duration-300"
                            />

                        </button>

                    </div>

                ) : (

                    /* DESKTOP LAYOUT */

                    <div className="mt-5">

                        {/* TITLE */}

                        <div className="flex items-start justify-between gap-3">

                            <div>

                                <h2 className="text-2xl font-black tracking-tight text-white leading-tight">
                                    {station.stationName}
                                </h2>

                                <p className="text-zinc-400 text-sm mt-2">
                                    Smart EV Charging Station
                                </p>

                            </div>

                            {/* STATUS */}

                            <div className={`
                                shrink-0 px-3 py-2 rounded-full text-xs
                                font-medium border backdrop-blur-xl

                                ${totalAvailable > 0
                                    ? "border-green-400/20 bg-green-400/10 text-green-300"
                                    : "border-red-400/20 bg-red-400/10 text-red-300"
                                }
                            `}>

                                {totalAvailable > 0
                                    ? "Available"
                                    : "Busy"
                                }

                            </div>

                        </div>

                        {/* STATS */}

                        <div className="mt-6 flex flex-wrap gap-3">

                            <div className="px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

                                <p className="text-[11px] text-zinc-400">
                                    AC Slots
                                </p>

                                <h3 className="text-lg font-black text-white mt-1">
                                    {station.chargers.AC.available}/{station.chargers.AC.total}
                                </h3>

                            </div>

                            <div className="px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

                                <p className="text-[11px] text-zinc-400">
                                    DC Slots
                                </p>

                                <h3 className="text-lg font-black text-white mt-1">
                                    {station.chargers.DC.available}/{station.chargers.DC.total}
                                </h3>

                            </div>

                            <div className="px-4 py-3 rounded-2xl border border-white/10 bg-[#895CE7]/10 backdrop-blur-xl">

                                <p className="text-[11px] text-zinc-300">
                                    Total
                                </p>

                                <h3 className="text-lg font-black text-white mt-1">
                                    {totalAvailable}/{totalSlots}
                                </h3>

                            </div>

                        </div>

                        {/* CTA */}

                        <button
                            onClick={handleSelect}
                            className="
                                group/btn mt-6 w-full px-5 py-4 rounded-2xl
                                border border-white/10 bg-white/10
                                backdrop-blur-xl text-white font-medium
                                flex items-center justify-center gap-3
                                hover:bg-white/15 transition-all duration-300
                            "
                        >

                            See Station

                            <ArrowRight
                                size={18}
                                className="group-hover/btn:translate-x-1 transition-all duration-300"
                            />

                        </button>

                    </div>

                )}

            </div>

        </div>

    );

}