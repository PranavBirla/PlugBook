import React from 'react';
import { House, MapPin, CalendarCheck, User } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        { icon: House, path: "/home" },
        { icon: MapPin, path: "/map" },
        { icon: CalendarCheck, path: "/activebooking" },
        { icon: User, path: "/user" },
    ];

    return (

        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000] md:hidden">

            {/* GLOW */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[220px] h-14 rounded-full bg-[#895CE7]/20 blur-3xl" />
            </div>

            {/* NAVBAR */}
            <div className="relative flex items-center gap-2 px-2.5 py-2.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.28)] overflow-hidden">

                {/* BORDER */}
                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-white/10 via-[#895CE7]/20 to-white/10 opacity-80" />

                {/* INNER */}
                <div className="absolute inset-[1px] rounded-full bg-black/20 backdrop-blur-2xl" />

                {/* ITEMS */}
                <div className="relative z-10 flex items-center gap-2">

                    {navItems.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <NavLink key={index} to={item.path}>

                                {({ isActive }) => (

                                    <div className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 overflow-hidden ${isActive
                                            ? "bg-white/15 border border-white/10 shadow-[0_0_25px_rgba(137,92,231,0.35)] scale-105"
                                            : "hover:bg-white/[0.05] active:scale-95"
                                        }`}>

                                        {/* ACTIVE GLOW */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-[#895CE7]/15 blur-xl" />
                                        )}

                                        {/* ICON */}
                                        <Icon
                                            strokeWidth={1.7}
                                            size={20}
                                            className={`relative z-10 transition-all duration-300 ${isActive ? "text-white" : "text-zinc-200"
                                                }`}
                                        />

                                    </div>

                                )}

                            </NavLink>

                        );

                    })}

                </div>

            </div>

        </div>

    );

};

export default Navbar;