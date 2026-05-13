import React from "react";

import {
    Users,
    CalendarRange,
    Zap,
    Cpu,
} from "lucide-react";

import { motion } from "framer-motion";

const StatsGrid = ({ dashboard }) => {

    const cards = [
        {
            title: "Total Users",
            value: dashboard.totalUsers,
            icon: Users,
        },
        {
            title: "Total Bookings",
            value: dashboard.totalBookings,
            icon: CalendarRange,
        },
        {
            title: "Available Chargers",
            value: dashboard.totalAvailableSlots,
            icon: Zap,
        },
        {
            title: "System Load",
            value: `${dashboard.occupancyRate}%`,
            icon: Cpu,
        },
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            {
                cards.map((card, index) => {

                    const Icon = card.icon;

                    return (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-6 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                        >

                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#895CE7]/10 blur-[90px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            <div className="relative z-10">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.06] flex items-center justify-center">
                                    <Icon size={20} className="text-white" />
                                </div>

                                <p className="mt-8 text-zinc-500 uppercase tracking-[0.25em] text-xs">
                                    {card.title}
                                </p>

                                <h1 className="mt-3 text-5xl font-black tracking-tight text-white">
                                    {card.value}
                                </h1>

                            </div>

                        </motion.div>

                    )

                })
            }

        </div>

    );

};

export default StatsGrid;