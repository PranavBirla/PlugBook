import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap } from "lucide-react";

const Nav = () => {
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/home" },
        { name: "Map", path: "/map" },
        { name: "Bookings", path: "/activebooking" },
        { name: "User", path: "/user" },
    ];

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-fit flex justify-center px-4 z-[1000]">

            {/* OUTER GLOW */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[320px] h-16 bg-purple-500/20 blur-3xl rounded-full"></div>
            </div>

            {/* NAVBAR */}
            <div
                className=" relative flex items-center gap-3 px-3 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden
        "
            >

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-zinc-500/40 via-white/20 to-white-500/40 opacity-70"></div>

                {/* Inner Background */}
                <div className="absolute inset-[1px] rounded-full bg-black/20 backdrop-blur-2xl"></div>

                {/* LOGO */}
                <div className="relative z-10 flex items-center gap-2 px-4">


                    <h1 className="text-white font-semibold tracking-wide text-sm md:text-base">
                        PlugBook
                    </h1>
                </div>

                {/* LINKS */}
                <div className="relative z-10 flex items-center gap-2">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={` relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden
                                    ${isActive
                                        ? "text-white bg-white/40 shadow-lg"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }
                `}
                            >
                                {/* ACTIVE GLOW */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-purple-500/20 blur-xl"></div>
                                )}

                                <span className="relative z-10">
                                    {link.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Nav;