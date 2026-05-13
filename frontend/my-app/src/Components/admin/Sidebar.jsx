import React from "react";

import {
    LayoutDashboard,
    Activity,
    MapPinned,
    CalendarRange,
    Users,
    Settings,
} from "lucide-react";

const Sidebar = () => {

    const sidebarItems = [
        {
            icon: LayoutDashboard,
            label: "Overview"
        },
        {
            icon: Activity,
            label: "Analytics"
        },
        {
            icon: MapPinned,
            label: "Stations"
        },
        {
            icon: CalendarRange,
            label: "Bookings"
        },
        {
            icon: Users,
            label: "Users"
        },
        {
            icon: Settings,
            label: "Settings"
        }
    ];

    return (

        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">

            <div className="w-[92px] rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl py-6 px-4 flex flex-col items-center gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

                {
                    sidebarItems.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <button
                                key={index}
                                className="group relative w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center hover:bg-[#895CE7]/15 hover:border-[#895CE7]/30 transition-all duration-300"
                            >

                                <Icon
                                    size={20}
                                    className="text-zinc-300 group-hover:text-white transition-all"
                                />

                                <div className="absolute left-[80px] opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl whitespace-nowrap text-sm text-zinc-200">
                                    {item.label}
                                </div>

                            </button>

                        )

                    })
                }

            </div>

        </div>

    );

};

export default Sidebar;