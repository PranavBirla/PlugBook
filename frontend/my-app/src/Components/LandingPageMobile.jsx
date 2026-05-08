import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import {
    ArrowRight,
    MapPinned,
    BatteryCharging,
    Clock3,
    Zap,
    ChevronRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/plugbook.png";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPageMobile() {

    const pageRef = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".hero-badge", {
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
            });

            gsap.from(".hero-heading", {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.1,
                ease: "power3.out",
            });

            gsap.from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 0.9,
                delay: 0.2,
                ease: "power3.out",
            });

            gsap.from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
            });

            gsap.utils.toArray(".fade-section").forEach((section) => {

                gsap.from(section, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 88%",
                    }
                });

            });

            gsap.from(".feature-pill", {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".feature-pill-wrapper",
                    start: "top 90%",
                }
            });

        }, pageRef);

        return () => ctx.revert();

    }, []);

    return (

        <div
            ref={pageRef}
            className="relative min-h-screen overflow-hidden"
        >

            {/* BACKGROUND */}

            <div className="fixed inset-0 z-0">

                <div
                    className="h-screen w-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{
                        backgroundImage: "url('/full-bg2.jpg')"
                    }}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

            </div>

            {/* TOP BLUR */}

            <div className="absolute top-0 left-0 w-full h-[300px] bg-[#895CE7]/15 blur-[120px] -z-10" />

            {/* CONTENT */}

            <div className="relative z-20 px-5 pt-8 pb-24">

                {/* NAV */}

                <div className="flex items-center justify-between">

                    <img
                        src={logo}
                        alt="PlugBook"
                        className="w-66 object-contain"
                    />

                </div>

                {/* HERO */}

                <section className="pt-20">

                    {/* BADGE */}

                    <div className="hero-badge w-fit px-5 py-2 rounded-full border border-[#caaeff]/20 bg-[#895CE7]/10 backdrop-blur-xl text-[#eadfff] text-sm font-medium">
                        Intelligent EV Mobility
                    </div>

                    {/* HEADING */}

                    <h1 className="hero-heading mt-8 text-[3.6rem] leading-[0.92] font-black tracking-tight text-white">

                        Book EV <br />

                        <span className="text-[#d9c3ff]">
                            Slots
                        </span>

                        <br />

                        Seamlessly.

                    </h1>

                    {/* TEXT */}

                    <p className="hero-text mt-7 text-zinc-300 text-[15px] leading-relaxed max-w-md">

                        Real-time charging station availability with a premium booking experience built for modern EV drivers.

                    </p>

                    {/* CTA */}

                    <Link
                        to="/register"
                        className="hero-btn mt-10 w-fit px-7 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl text-white font-medium flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                    >

                        Get Started

                        <ArrowRight size={19} />

                    </Link>

                    {/* PILLS */}

                    <div className="feature-pill-wrapper mt-10 flex flex-wrap gap-3">

                        <div className="feature-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white text-sm">
                            Fast Booking
                        </div>

                        <div className="feature-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white text-sm">
                            Live Availability
                        </div>

                        <div className="feature-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white text-sm">
                            24/7 Access
                        </div>

                    </div>

                </section>

                {/* FEATURE CARD */}

                <section className="fade-section mt-24">

                    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5 shadow-[0_10px_50px_rgba(0,0,0,0.25)]">

                        {/* GLOW */}

                        <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#895CE7]/10 blur-[100px]" />

                        {/* IMAGE */}

                        <div className="relative overflow-hidden rounded-[28px]">

                            <img
                                src="/features.jpg"
                                alt=""
                                className="w-full h-[240px] object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-[#895CE7]/30" />

                            {/* FLOATING CARD */}

                            <div className="absolute bottom-4 left-4 px-5 py-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl text-white">

                                <p className="text-xs text-zinc-300">
                                    Booking Time
                                </p>

                                <h2 className="text-2xl font-black mt-1">
                                    {"<"}2 min
                                </h2>

                            </div>

                        </div>

                        {/* CONTENT */}

                        <div className="mt-7">

                            <div className="w-fit px-4 py-2 rounded-full border border-[#caaeff]/20 bg-[#895CE7]/10 backdrop-blur-xl text-[#eadfff] text-xs font-medium">
                                Smart Charging
                            </div>

                            <h2 className="mt-6 text-4xl leading-[0.95] font-black text-white">

                                Built for <br />

                                Modern Drivers

                            </h2>

                            <p className="mt-5 text-zinc-300 text-[15px] leading-relaxed">

                                Discover nearby charging stations, check live slot availability and reserve your EV charging experience effortlessly.

                            </p>

                            <button className="mt-7 w-fit px-6 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white font-medium flex items-center gap-3">

                                Explore Features

                                <ChevronRight size={18} />

                            </button>

                        </div>

                    </div>

                </section>

                {/* HOW IT WORKS */}

                <section className="fade-section mt-24">

                    <div className="mb-10">

                        <div className="w-fit px-4 py-2 rounded-full border border-[#caaeff]/20 bg-[#895CE7]/10 backdrop-blur-xl text-[#eadfff] text-xs font-medium">
                            How It Works
                        </div>

                        <h2 className="mt-6 text-5xl leading-[0.95] font-black text-white">

                            Charge <br />

                            Smarter.

                        </h2>

                    </div>

                    {/* STEPS */}

                    <div className="flex flex-col gap-5">

                        {/* STEP 1 */}

                        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5">

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#895CE7]/10 blur-[90px]" />

                            <div className="relative z-10">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center text-white">
                                    <MapPinned size={20} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-white">
                                    Find Stations
                                </h3>

                                <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                                    Discover nearby EV charging stations with real-time availability.
                                </p>

                            </div>

                        </div>

                        {/* STEP 2 */}

                        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5">

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#895CE7]/10 blur-[90px]" />

                            <div className="relative z-10">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center text-white">
                                    <Clock3 size={20} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-white">
                                    Reserve Instantly
                                </h3>

                                <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                                    Select your preferred slot and confirm your booking in seconds.
                                </p>

                            </div>

                        </div>

                        {/* STEP 3 */}

                        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-5">

                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#895CE7]/10 blur-[90px]" />

                            <div className="relative z-10">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center text-white">
                                    <BatteryCharging size={20} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-white">
                                    Charge Seamlessly
                                </h3>

                                <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                                    Enjoy a smooth and stress-free EV charging experience anytime.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* CTA */}

                <section className="fade-section mt-28">

                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-7 text-center">

                        {/* GLOW */}

                        <div className="absolute inset-0 bg-[#895CE7]/10 blur-[100px]" />

                        <div className="relative z-10">

                            <div className="mx-auto w-14 h-14 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center text-white">
                                <Zap size={24} />
                            </div>

                            <h2 className="mt-8 text-4xl leading-[0.95] font-black text-white">

                                Start Your <br />

                                EV Journey

                            </h2>

                            <p className="mt-5 text-zinc-300 text-sm leading-relaxed max-w-sm mx-auto">

                                Experience smarter charging with PlugBook and reserve EV slots effortlessly.

                            </p>

                            <Link
                                to="/register"
                                className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/10 bg-white text-black font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                            >

                                Get Started

                                <ArrowRight size={18} />

                            </Link>

                        </div>

                    </div>

                </section>

            </div>

        </div>

    );

}