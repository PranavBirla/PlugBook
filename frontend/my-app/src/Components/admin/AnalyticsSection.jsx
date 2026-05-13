import React from "react";

import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const AnalyticsSection = ({ bookingsTrend, dashboard }) => {

    const usageData = [
        {
            name: "AC",
            value: dashboard.acUsage,
        },
        {
            name: "DC",
            value: dashboard.dcUsage,
        }
    ];

    return (

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6 mt-8">

            <div className="rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-7">

                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                    Analytics
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                    Booking Trend
                </h2>

                <div className="h-[340px] mt-8">

                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart data={bookingsTrend}>

                            <defs>

                                <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">

                                    <stop offset="0%" stopColor="#895CE7" stopOpacity={0.8} />

                                    <stop offset="100%" stopColor="#895CE7" stopOpacity={0} />

                                </linearGradient>

                            </defs>

                            <Tooltip />

                            <Area
                                type="monotone"
                                dataKey="bookings"
                                stroke="#895CE7"
                                fill="url(#colorBookings)"
                                strokeWidth={3}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>

            </div>

            <div className="rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-7">

                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                    Charger Analytics
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                    Usage Distribution
                </h2>

                <div className="h-[260px] mt-6">

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={usageData}
                                innerRadius={70}
                                outerRadius={100}
                                dataKey="value"
                                paddingAngle={6}
                            >

                                <Cell fill="#895CE7" />
                                <Cell fill="#C7A7FF" />

                            </Pie>

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>

    );

};

export default AnalyticsSection;