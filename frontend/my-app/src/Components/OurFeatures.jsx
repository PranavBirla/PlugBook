import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurFeatures = () => {

    const sectionRef = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            // IMAGE
            gsap.from(".feature-image", {
                x: 100,
                opacity: 0,
                scale: 0.96,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // TAG
            gsap.from(".feature-tag", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                }
            });

            // HEADING
            gsap.from(".feature-heading", {
                y: 60,
                opacity: 0,
                duration: 1,
                delay: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 76%",
                }
            });

            // TEXT
            gsap.from(".feature-text", {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 74%",
                }
            });

            // STATS
            gsap.from(".feature-pill", {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 72%",
                }
            });

            // BUTTON
            gsap.from(".feature-btn", {
                y: 25,
                opacity: 0,
                duration: 0.8,
                delay: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            ref={sectionRef}
            className="relative py-28 md:py-40 px-4 md:px-8 overflow-hidden"
        >

            {/* BACKGROUND GLOW */}

            <div className="absolute top-0 left-0 w-full h-full bg-[#895CE7]/5 blur-[140px] -z-10" />

            {/* CONTAINER */}

            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-5 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.2)]">

                    {/* INNER GLOW */}

                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#895CE7]/10 blur-[120px]" />

                    {/* GRID */}

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">

                        {/* LEFT CONTENT */}

                        <div className="flex flex-col justify-center order-2 lg:order-1">

                            {/* TAG */}

                            <div className="feature-tag w-fit px-5 py-2 rounded-full border border-[#caaeff]/20 bg-[#895CE7]/10 backdrop-blur-xl text-[#eadfff] text-sm font-medium mb-6">
                                Intelligent Mobility
                            </div>

                            {/* HEADING */}

                            <h1 className="feature-heading text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">

                                Our <br />

                                <span className="text-[#d9c3ff]">
                                    Features
                                </span>

                            </h1>

                            {/* TEXT */}

                            <p className="feature-text mt-8 text-zinc-300 text-base md:text-xl leading-relaxed max-w-xl">

                                Experience seamless EV charging with real-time station availability, effortless slot booking and a modern mobility ecosystem designed for stress-free journeys.

                            </p>

                            {/* FEATURE PILLS */}

                            <div className="mt-8 flex flex-wrap gap-3">

                                <div className="feature-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white text-sm font-medium">
                                    Real-time Slots
                                </div>

                                <div className="feature-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white text-sm font-medium">
                                    Fast Booking
                                </div>

                                <div className="feature-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white text-sm font-medium">
                                    24/7 Access
                                </div>

                            </div>

                            {/* BUTTON */}

                            <button className="feature-btn group mt-10 w-fit px-7 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white font-medium flex items-center gap-4 hover:bg-white/15 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

                                Explore Features

                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-all duration-300"
                                />

                            </button>

                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="feature-image relative overflow-hidden rounded-[30px] group order-1 lg:order-2">

                            {/* IMAGE */}

                            <img
                                src="/features.jpg"
                                alt=""
                                className="w-full h-[280px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                            />

                            {/* OVERLAY */}

                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-[#895CE7]/30" />

                            {/* FLOATING CARDS */}

                            <div className="absolute top-5 left-5 px-5 py-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

                                <p className="text-xs text-zinc-300">
                                    Available Slots
                                </p>

                                <h2 className="text-2xl font-black mt-1">
                                    24
                                </h2>

                            </div>

                            <div className="absolute bottom-5 right-5 px-5 py-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

                                <p className="text-xs text-zinc-300">
                                    Booking Time
                                </p>

                                <h2 className="text-2xl font-black mt-1">
                                    {"<"}2 min
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default OurFeatures;