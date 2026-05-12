import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../api/axios";

import {
    ArrowRight,
    LoaderCircle,
    BatteryCharging,
    Zap,
    Globe,
} from "lucide-react";

export default function SignUpPage() {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError("");

        if (!fullName || !email || !password) {

            setError("Please fill all fields");
            return;

        }

        try {

            setLoading(true);

            await API.post(
                "/api/auth/user/register",
                {
                    fullName,
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            );

            navigate("/home");

        } catch (error) {

            const msg =
                error.response?.data?.message ||
                "Signup failed";

            setError(msg);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="relative h-screen overflow-hidden bg-black flex items-center justify-center px-0 lg:px-4">

            {/* BG */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <img
                    src="/full-bg2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 bg-[#895CE7]/15" />

                {/* GLOWS */}

                <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#895CE7]/25 blur-[120px]" />

                <div className="absolute bottom-[0%] right-[0%] w-[340px] h-[340px] rounded-full bg-fuchsia-500/15 blur-[110px]" />

            </div>

            {/* MAIN */}

            <div className="w-full max-w-[1450px] h-screen lg:h-[90vh] overflow-hidden lg:rounded-[36px] lg:border lg:border-white/10 lg:bg-white/[0.04] lg:backdrop-blur-3xl lg:shadow-[0_20px_120px_rgba(0,0,0,0.45)] flex">

                {/* LEFT */}

                <div className="hidden lg:flex relative w-[55%] overflow-hidden p-12 flex-col justify-between">

                    {/* GLOW */}

                    <div className="absolute top-[10%] left-[5%] w-[420px] h-[420px] rounded-full bg-[#895CE7]/20 blur-[120px]" />

                    <div className="absolute bottom-[-5%] right-[0%] w-[300px] h-[300px] rounded-full bg-fuchsia-500/10 blur-[100px]" />

                    {/* LOGO */}

                    <div className="relative z-10 flex items-center gap-3">

                        <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.08] flex items-center justify-center">

                            <Zap size={20} className="text-white" />

                        </div>

                        <h1 className="text-xl font-bold text-white">
                            PlugBook
                        </h1>

                    </div>

                    {/* CONTENT */}

                    <div className="relative z-10">

                        {/* BADGE */}

                        <div className="w-fit px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] text-[11px] tracking-[0.18em] uppercase text-[#eadfff]">

                            Future of EV Infrastructure

                        </div>

                        {/* TITLE */}

                        <h1 className="mt-6 text-[4.2rem] leading-[0.9] tracking-[-0.06em] font-black text-white">

                            Power the
                            <br />

                            Future of
                            <br />

                            EV Mobility.

                        </h1>

                        {/* PARA */}

                        <p className="mt-6 max-w-[560px] text-zinc-300 text-[16px] leading-relaxed">

                            Join PlugBook to access seamless EV charging,
                            smart reservations and real-time station
                            availability through a futuristic mobility network.

                        </p>

                        {/* PILLS */}

                        <div className="mt-8 flex flex-wrap gap-3">

                            {[
                                "120+ Stations",
                                "Real-Time Booking",
                                "Smart Navigation"
                            ].map((item, i) => (

                                <div
                                    key={i}
                                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] text-sm text-zinc-200"
                                >

                                    {item}

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* TILTED CARDS */}

                    <div className="relative z-10 flex items-center gap-5">

                        {/* CARD */}

                        <div className="rotate-[-8deg] rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-[#895CE7]/15 flex items-center justify-center">

                                    <BatteryCharging size={20} className="text-white" />

                                </div>

                                <div>

                                    <p className="text-zinc-400 text-[11px]">
                                        Charging Stations
                                    </p>

                                    <h2 className="mt-1 text-2xl font-black text-white">
                                        120+
                                    </h2>

                                </div>

                            </div>

                        </div>

                        {/* CARD */}

                        <div className="rotate-[8deg] rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-[#895CE7]/15 flex items-center justify-center">

                                    <Globe size={20} className="text-white" />

                                </div>

                                <div>

                                    <p className="text-zinc-400 text-[11px]">
                                        Smart Network
                                    </p>

                                    <h2 className="mt-1 text-2xl font-black text-white">
                                        Live
                                    </h2>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="relative w-full lg:w-[45%] flex items-center justify-center px-6 py-10 lg:p-10 bg-black/20 lg:border-l lg:border-white/10 overflow-hidden">

                    {/* GLOW */}

                    <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#895CE7]/10 blur-[120px]" />

                    {/* FORM */}

                    <div className="relative z-10 w-full max-w-[420px]">

                        {/* MOBILE LOGO */}

                        <div className="flex lg:hidden items-center gap-3 mb-10">

                            <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.08] flex items-center justify-center">

                                <Zap size={20} className="text-white" />

                            </div>

                            <h1 className="text-xl font-bold text-white">
                                PlugBook
                            </h1>

                        </div>

                        {/* TOP */}

                        <h1 className="text-[2.6rem] lg:text-4xl font-black tracking-tight text-white">

                            Create
                            <br />

                            Account.

                        </h1>

                        <p className="mt-4 text-zinc-400 leading-relaxed">

                            Start your PlugBook journey and access
                            smarter EV charging experiences.

                        </p>

                        {/* FORM */}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col gap-4"
                        >

                            {/* FULL NAME */}

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                onChange={() => setError("")}
                                className="w-full h-[58px] rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                            />

                            {/* EMAIL */}

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                onChange={() => setError("")}
                                className="w-full h-[58px] rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                            />

                            {/* PASSWORD */}

                            <input
                                type="password"
                                name="password"
                                placeholder="Create Password"
                                onChange={() => setError("")}
                                className="w-full h-[58px] rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                            />

                            {/* ERROR */}

                            {error && (

                                <div className="rounded-[18px] border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">

                                    {error}

                                </div>

                            )}

                            {/* INFO */}

                            {loading && (

                                <div className="rounded-[18px] border border-[#895CE7]/20 bg-[#895CE7]/10 px-4 py-3 text-sm text-zinc-300 leading-relaxed">

                                    Creating your account may take a few seconds while the server wakes up.

                                </div>

                            )}

                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`mt-2 w-full h-[60px] rounded-[22px] flex items-center justify-center gap-3 text-[16px] font-semibold transition-all duration-300 ${
                                    loading
                                        ? "bg-zinc-700 text-zinc-300 cursor-not-allowed"
                                        : "bg-white text-black hover:scale-[1.01]"
                                }`}
                            >

                                {loading ? (
                                    <>
                                        <LoaderCircle
                                            size={18}
                                            className="animate-spin"
                                        />

                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        Create Account

                                        <ArrowRight size={17} />
                                    </>
                                )}

                            </button>

                        </form>

                        {/* DIVIDER */}

                        <div className="relative flex items-center justify-center my-7">

                            <div className="absolute w-full h-[1px] bg-white/10" />

                            <div className="relative px-4 bg-black/20 text-zinc-500 text-sm">

                                or

                            </div>

                        </div>

                        {/* GOOGLE */}

                        <button className="w-full h-[58px] rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center gap-4 text-white hover:bg-white/[0.08] transition-all duration-300">

                            <svg width="22" height="22" viewBox="0 0 48 48">

                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.23 3.61l6.9-6.9C35.73 2.36 30.28 0 24 0 14.82 0 6.88 5.48 3.1 13.44l8.05 6.26C13.36 13.09 18.23 9.5 24 9.5z" />

                                <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9h12.73c-.55 2.97-2.21 5.49-4.72 7.18l7.33 5.7C43.98 37.5 46.5 31.5 46.5 24.5z" />

                                <path fill="#FBBC05" d="M11.15 28.09c-.5-1.5-.79-3.08-.79-4.59s.29-3.09.79-4.59l-8.05-6.26C1.12 16.14 0 19.97 0 24s1.12 7.86 3.1 11.35l8.05-6.26z" />

                                <path fill="#34A853" d="M24 48c6.48 0 11.92-2.14 15.9-5.82l-7.33-5.7c-2.03 1.36-4.63 2.17-8.57 2.17-5.77 0-10.64-3.59-12.85-8.7l-8.05 6.26C6.88 42.52 14.82 48 24 48z" />

                            </svg>

                            <span className="font-medium">
                                Continue with Google
                            </span>

                        </button>

                        {/* FOOTER */}

                        <p className="mt-7 text-center text-zinc-400 text-sm">

                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="font-semibold text-white hover:text-[#d8c0ff] transition-all duration-300"
                            >

                                Sign In

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}