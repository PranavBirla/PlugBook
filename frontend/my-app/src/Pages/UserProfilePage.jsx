import React, { useState } from "react";

import {
    CalendarDays,
    Clock3,
    ChevronRight,
    Mail,
    Zap,
    History,
    User2,
    LogOut,
    X,
} from "lucide-react";

import Navbar from "../Components/Navbar";
import Top from "../Components/Top";

import API from "../api/axios";

import { useNavigate } from "react-router-dom";

const UserPage = () => {

    const navigate = useNavigate();

    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const user = {
        fullName: "Pranav Birla",
        email: "pranav@gmail.com",
        createdAt: "2025-01-14T10:00:00Z",
    };

    const initials = user.fullName
        .split(" ")
        .map((word) => word[0])
        .join("");

    const handleLogout = async () => {

        try {

            setLoading(true);

            await API.post(
                "/api/auth/user/logout",
                {},
                {
                    withCredentials: true
                }
            );

            navigate("/login");

        } catch (err) {

            console.error("Logout error:", err);

        } finally {

            setLoading(false);
            setShowLogoutPopup(false);

        }

    };

    return (

        <div className="relative min-h-screen overflow-hidden">

            {/* BACKGROUND */}

            <div className="fixed inset-0 -z-10">

                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/background1.jpg')"
                    }}
                />

                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-[#895CE7]/10" />

            </div>

            {/* TOP */}
            <Top />

            {/* GLOW */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[#895CE7]/10 blur-[140px] -z-10" />

            {/* CONTENT */}

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-8 md:pt-14 pb-28 md:pb-16">

                {/* HERO */}

                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-10">

                    <div>

                        <h2 className="text-zinc-300 text-xl md:text-2xl font-medium">
                            Hello!
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mt-2">
                            {user.fullName}
                        </h1>

                        <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-xl">
                            Powering your seamless EV charging experience.
                        </p>

                    </div>

                    {/* AVATAR */}

                    <div className="relative">

                        <div className="absolute inset-0 bg-[#895CE7]/20 blur-3xl rounded-full" />

                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                            <h1 className="text-3xl md:text-5xl font-black text-white">
                                {initials}
                            </h1>

                        </div>

                    </div>

                </div>

                {/* MAIN GRID */}

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">

                    {/* LEFT */}

                    <div className="flex flex-col gap-6">

                        {/* PROFILE CARD */}

                        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">

                            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#895CE7]/10 blur-[100px]" />

                            <div className="relative z-10">

                                <div className="flex items-center gap-3 mb-8">

                                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                                        <User2 size={18} className="text-white" />
                                    </div>

                                    <h2 className="text-2xl font-bold text-white">
                                        Profile Details
                                    </h2>

                                </div>

                                <div className="flex flex-col gap-5">

                                    <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">

                                        <div>
                                            <p className="text-zinc-400 text-sm">
                                                Full Name
                                            </p>

                                            <h3 className="text-white text-lg font-semibold mt-1">
                                                {user.fullName}
                                            </h3>
                                        </div>

                                    </div>

                                    <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">

                                        <div>
                                            <p className="text-zinc-400 text-sm">
                                                Email Address
                                            </p>

                                            <h3 className="text-white text-lg font-semibold mt-1 break-all">
                                                {user.email}
                                            </h3>
                                        </div>

                                        <Mail size={18} className="text-zinc-400 shrink-0" />

                                    </div>

                                    <div className="flex items-center justify-between gap-4">

                                        <div>
                                            <p className="text-zinc-400 text-sm">
                                                Member Since
                                            </p>

                                            <h3 className="text-white text-lg font-semibold mt-1">
                                                {new Date(user.createdAt).toLocaleDateString()}
                                            </h3>
                                        </div>

                                        <CalendarDays size={18} className="text-zinc-400 shrink-0" />

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ACTIONS */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <button className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5 text-left hover:bg-white/[0.08] transition-all duration-300">

                                <div className="absolute inset-0 bg-[#895CE7]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl" />

                                <div className="relative z-10">

                                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
                                        <Zap size={18} className="text-white" />
                                    </div>

                                    <h2 className="text-white text-xl font-bold">
                                        Active Bookings
                                    </h2>

                                    <p className="text-zinc-400 text-sm mt-2">
                                        Manage your ongoing charging sessions.
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-zinc-300">
                                        <span className="text-sm font-medium">
                                            Open
                                        </span>

                                        <ChevronRight size={16} />
                                    </div>

                                </div>

                            </button>

                            <button className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5 text-left hover:bg-white/[0.08] transition-all duration-300">

                                <div className="absolute inset-0 bg-zinc-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl" />

                                <div className="relative z-10">

                                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
                                        <History size={18} className="text-white" />
                                    </div>

                                    <h2 className="text-white text-xl font-bold">
                                        Booking History
                                    </h2>

                                    <p className="text-zinc-400 text-sm mt-2">
                                        View your completed charging sessions.
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-zinc-300">
                                        <span className="text-sm font-medium">
                                            Open
                                        </span>

                                        <ChevronRight size={16} />
                                    </div>

                                </div>

                            </button>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="flex flex-col gap-6">

                        {/* STATS */}

                        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">

                            <div className="flex items-center gap-3 mb-8">

                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                                    <Clock3 size={18} className="text-white" />
                                </div>

                                <h2 className="text-2xl font-bold text-white">
                                    Charging Stats
                                </h2>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">

                                    <p className="text-zinc-400 text-sm">
                                        Total Sessions
                                    </p>

                                    <h1 className="text-4xl font-black text-white mt-3">
                                        12
                                    </h1>

                                </div>

                                <div className="rounded-[24px] border border-white/10 bg-[#895CE7]/10 p-5">

                                    <p className="text-zinc-300 text-sm">
                                        Active
                                    </p>

                                    <h1 className="text-4xl font-black text-white mt-3">
                                        2
                                    </h1>

                                </div>

                                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 col-span-2">

                                    <p className="text-zinc-400 text-sm">
                                        Favourite Charger
                                    </p>

                                    <h1 className="text-3xl font-black text-white mt-3">
                                        DC Fast Charging
                                    </h1>

                                </div>

                            </div>

                        </div>

                        {/* LOGOUT */}

                        <button
                            onClick={() => setShowLogoutPopup(true)}
                            className="group relative overflow-hidden rounded-[30px] border border-red-400/10 bg-red-500/[0.05] backdrop-blur-2xl p-6 text-left hover:bg-red-500/[0.08] transition-all duration-300"
                        >

                            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl" />

                            <div className="relative z-10 flex items-center justify-between">

                                <div>

                                    <h2 className="text-white text-2xl font-bold">
                                        Logout
                                    </h2>

                                    <p className="text-zinc-400 text-sm mt-2">
                                        Securely sign out from your account.
                                    </p>

                                </div>

                                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                                    <LogOut size={18} className="text-white" />
                                </div>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            {/* LOGOUT POPUP */}

            {showLogoutPopup && (

                <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-md px-4">

                    <div className="relative w-full max-w-md overflow-hidden rounded-[34px] border border-white/10 bg-zinc-900/80 backdrop-blur-2xl p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                        {/* GLOW */}
                        <div className="absolute -top-16 -right-10 w-56 h-56 bg-red-500/10 blur-[120px]" />

                        {/* CLOSE */}
                        <button
                            onClick={() => setShowLogoutPopup(false)}
                            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/10 transition-all"
                        >
                            <X size={16} />
                        </button>

                        <div className="relative z-10">

                            <h1 className="text-3xl font-black text-white">
                                Logout?
                            </h1>

                            <p className="mt-3 text-zinc-400 leading-relaxed">
                                Do you really want to logout from your PlugBook account?
                            </p>

                            {/* BUTTONS */}

                            <div className="flex gap-3 mt-8">

                                {/* CANCEL */}

                                <button
                                    onClick={() => setShowLogoutPopup(false)}
                                    className="flex-1 py-3 rounded-2xl border border-white/10 bg-white/5 text-zinc-300 font-medium hover:bg-white/10 transition-all"
                                >
                                    No
                                </button>

                                {/* LOGOUT */}

                                <button
                                    onClick={handleLogout}
                                    disabled={loading}
                                    className="flex-1 py-3 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all shadow-[0_10px_30px_rgba(239,68,68,0.35)]"
                                >
                                    {loading ? "Logging out..." : "Yes"}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* MOBILE NAVBAR */}

            <div className="md:hidden">
                <Navbar />
            </div>

        </div>

    );

};

export default UserPage;