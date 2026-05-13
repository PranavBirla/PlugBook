import React from "react";

import {
    ShieldCheck,
    BatteryCharging,
    Gauge,
    Clock3,
} from "lucide-react";

import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { motion } from "framer-motion";

const HeroSection = ({ dashboard }) => {

    return (

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-7 md:p-10"
        >

            <div className="absolute -top-24 -right-10 w-[400px] h-[400px] bg-[#895CE7]/10 blur-[160px]" />

            <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.4fr_0.6fr] gap-12 items-center">

                <div>

                    <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
                        Real-Time EV Infrastructure Intelligence
                    </p>

                    <h1 className="mt-5 text-5xl md:text-7xl leading-[0.9] font-black tracking-tight text-white">
                        GRID
                        <br />
                        CONTROL
                        <br />
                        CENTER
                    </h1>

                    <p className="mt-6 text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
                        Operational visibility across charging infrastructure and live booking intelligence.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

                        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">

                            <ShieldCheck className="text-[#cbb1ff]" size={22} />

                            <h2 className="mt-5 text-4xl font-black text-white">
                                {dashboard.activeBookings}
                            </h2>

                            <p className="mt-2 text-zinc-400 text-sm">
                                Active Sessions
                            </p>

                        </div>

                        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">

                            <BatteryCharging className="text-[#cbb1ff]" size={22} />

                            <h2 className="mt-5 text-4xl font-black text-white">
                                {dashboard.totalStations}
                            </h2>

                            <p className="mt-2 text-zinc-400 text-sm">
                                Stations Online
                            </p>

                        </div>

                        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">

                            <Gauge className="text-[#cbb1ff]" size={22} />

                            <h2 className="mt-5 text-4xl font-black text-white">
                                {dashboard.occupancyRate}%
                            </h2>

                            <p className="mt-2 text-zinc-400 text-sm">
                                Occupancy
                            </p>

                        </div>

                        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">

                            <Clock3 className="text-[#cbb1ff]" size={22} />

                            <h2 className="mt-5 text-4xl font-black text-white">
                                {dashboard.peakHour}
                            </h2>

                            <p className="mt-2 text-zinc-400 text-sm">
                                Peak Demand
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex items-center justify-center">

                    <div className="w-[260px] h-[260px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8">

                        <CircularProgressbar
                            value={dashboard.gridHealth}
                            text={`${dashboard.gridHealth}%`}
                            styles={buildStyles({
                                pathColor: "#895CE7",
                                trailColor: "rgba(255,255,255,0.08)",
                                textColor: "#fff",
                                textSize: "14px",
                            })}
                        />

                        <div className="mt-6 text-center">

                            <h2 className="text-2xl font-black text-white">
                                Grid Health
                            </h2>

                            <p className="mt-2 text-zinc-400 text-sm">
                                Infrastructure stability across the charging network.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>

    );

};

export default HeroSection;