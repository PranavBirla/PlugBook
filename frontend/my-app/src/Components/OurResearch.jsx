import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurResearch = () => {

    const sectionRef = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".research-image", {
                x: -80,
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(".research-heading", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                }
            });

            gsap.from(".research-text", {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            gsap.from(".research-btn", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 72%",
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

            {/* GLOW */}

            <div className="absolute top-0 left-0 w-full h-full bg-[#895CE7]/5 blur-[140px] -z-10" />

            {/* CONTAINER */}

            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-5 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.2)]">

                    {/* INNER GLOW */}

                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#895CE7]/10 blur-[120px]" />

                    {/* GRID */}

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 items-center">

                        {/* IMAGE */}

                        <div className="research-image relative overflow-hidden rounded-[30px] group">

                            {/* IMAGE */}

                            <img
                                src="/research.jpg"
                                alt=""
                                className="w-full h-[280px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                            />

                            {/* OVERLAY */}

                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-[#895CE7]/30" />

                        </div>

                        {/* CONTENT */}

                        <div className="flex flex-col justify-center">

                            {/* TAG */}

                            <div className="research-heading w-fit px-5 py-2 rounded-full border border-[#caaeff]/20 bg-[#895CE7]/10 backdrop-blur-xl text-[#eadfff] text-sm font-medium mb-6">
                                Research & Innovation
                            </div>

                            {/* HEADING */}

                            <h1 className="research-heading text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">

                                Our <br />

                                <span className="text-[#d9c3ff]">
                                    Research
                                </span>

                            </h1>

                            {/* TEXT */}

                            <p className="research-text mt-8 text-zinc-300 text-base md:text-xl leading-relaxed max-w-xl">

                                We analyze charging behavior, station availability and EV mobility patterns to create a seamless booking experience for modern electric vehicle users.

                            </p>

                            {/* BUTTON */}

                            <button className="research-btn group mt-10 w-fit px-7 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white font-medium flex items-center gap-4 hover:bg-white/15 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

                                Explore Research

                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-all duration-300" />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default OurResearch;