import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    ArrowRight,
    MapPin,
    BatteryCharging,
    Ticket,
    Zap,
    Clock3,
} from "lucide-react";

import logo from "../assets/plugbook.png";

import SplitText from "./SplitText";
import CurvedLoop from "./CurvedLoop";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPageDesktop() {

    const heroRef = useRef(null);

    useEffect(() => {

        const tl = gsap.timeline();

        tl.fromTo(
            ".hero-badge",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )

            .fromTo(
                ".hero-title",
                { opacity: 0, y: 70 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
                "-=0.4"
            )

            .fromTo(
                ".hero-para",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
                "-=0.7"
            )

            .fromTo(
                ".hero-pill",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.7"
            )

            .fromTo(
                ".hero-btn",
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "-=0.5"
            )

            .fromTo(
                ".hero-card",
                {
                    opacity: 0,
                    scale: 0.9,
                    y: 100
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.3,
                    ease: "power4.out"
                },
                "-=1"
            );

        gsap.to(".hero-image", {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.3,
            },
        });

        gsap.to(".hero-content", {
            y: -120,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
            },
        });

        gsap.to(".floating-card-1", {
            y: -30,
            repeat: -1,
            yoyo: true,
            duration: 4,
            ease: "sine.inOut",
        });

        gsap.to(".floating-card-2", {
            y: 30,
            repeat: -1,
            yoyo: true,
            duration: 5,
            ease: "sine.inOut",
        });

        gsap.to(".floating-card-3", {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: 4.5,
            ease: "sine.inOut",
        });

        gsap.fromTo(
            ".feature-row",
            {
                opacity: 0,
                y: 120,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.18,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".features-section",
                    start: "top 75%",
                },
            }
        );

        gsap.fromTo(
            ".cta-section",
            {
                opacity: 0,
                y: 120,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".cta-section",
                    start: "top 75%",
                },
            }
        );

    }, []);

    return (

        <div className="relative overflow-hidden ">

            {/* BG */}

            <div className="fixed inset-0 -z-10 overflow-hidden">

                <img
                    src="/full-bg2.jpg"
                    alt=""
                    className="hero-image w-full h-full object-cover scale-110"
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="absolute inset-0 bg-[#895CE7]/15" />

                <div className="absolute top-[10%] left-[8%] w-[500px] h-[500px] rounded-full bg-[#895CE7]/20 blur-[140px]" />

                <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

            </div>

            {/* HERO */}

            <section
                ref={heroRef}
                className="relative min-h-screen px-8 lg:px-16 pt-32 pb-40 flex items-center"
            >

                <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between gap-16">

                    {/* LEFT */}

                    <div className="hero-content w-[48%]">

                        {/* BADGE */}

                        <div className="hero-badge w-fit px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl flex items-center gap-3">

                            <img
                                src={logo}
                                alt=""
                                className="w-7"
                            />

                            <p className="text-sm text-[#eadfff] font-medium tracking-[0.18em] uppercase">
                                Smart EV Infrastructure
                            </p>

                        </div>

                        {/* TITLE */}

                        <h1 className="hero-title mt-8 text-[6.5rem] leading-[0.85] font-black tracking-[-0.06em] text-white">

                            Book EV
                            <br />

                            Charging
                            <br />

                            Before
                            <br />

                            You Arrive.

                        </h1>

                        {/* PARA */}

                        <p className="hero-para mt-8 max-w-[640px] text-zinc-300 text-xl leading-relaxed">

                            PlugBook transforms EV charging
                            into a seamless reservation experience
                            with live availability, instant booking
                            and futuristic mobility interactions.

                        </p>

                        {/* PILLS */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            {[
                                "Live Availability",
                                "Fast Reservations",
                                "Digital Tickets",
                                "Smart Navigation"
                            ].map((item, i) => (

                                <div
                                    key={i}
                                    className="hero-pill px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl text-sm text-zinc-200"
                                >

                                    {item}

                                </div>

                            ))}

                        </div>

                        {/* BUTTONS */}

                        <div className="mt-12 flex items-center gap-5">

                            <Link
                                to="/register"
                                className="hero-btn group px-8 py-5 rounded-[24px] bg-white text-black font-semibold flex items-center gap-3 hover:scale-[1.03] transition-all duration-300"
                            >

                                Get Started

                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-all duration-300"
                                />

                            </Link>

                            <button
                                onClick={() => {

                                    const section =
                                        document.getElementById("features");

                                    section?.scrollIntoView({
                                        behavior: "smooth"
                                    });

                                }}
                                className="hero-btn px-8 py-5 rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl text-white font-medium hover:bg-white/[0.08] transition-all duration-300"
                            >

                                Explore Features

                            </button>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="hero-card relative w-[52%]">

                        {/* MAIN CARD */}

                        <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl shadow-[0_25px_100px_rgba(0,0,0,0.35)]">

                            <div className="relative h-[820px] overflow-hidden">

                                <img
                                    src="/charging-station.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                <div className="absolute inset-0 bg-[#895CE7]/10" />

                            </div>

                            {/* TOP */}

                            <div className="absolute top-6 left-6 px-5 py-4 rounded-[24px] border border-white/10 bg-black/30 backdrop-blur-3xl">

                                <p className="text-zinc-300 text-sm">
                                    Available Slots
                                </p>

                                <h2 className="mt-2 text-6xl font-black text-white">
                                    24
                                </h2>

                            </div>

                            {/* BOTTOM */}

                            <div className="absolute bottom-6 left-6 right-6 rounded-[34px] border border-white/10 bg-black/30 backdrop-blur-3xl p-7">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-zinc-400 text-sm">
                                            Nearby Station
                                        </p>

                                        <h2 className="mt-2 text-4xl font-black text-white">
                                            PlugBook Central
                                        </h2>

                                        <div className="mt-4 flex items-center gap-2 text-zinc-300 text-sm">

                                            <MapPin size={15} />

                                            1.4km Away

                                        </div>

                                    </div>

                                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.08] flex items-center justify-center text-white">

                                        <BatteryCharging size={28} />

                                    </div>

                                </div>

                                <div className="mt-7 grid grid-cols-3 gap-3">

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">

                                        <p className="text-zinc-400 text-xs">
                                            AC
                                        </p>

                                        <h3 className="mt-2 text-2xl font-black text-white">
                                            12
                                        </h3>

                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">

                                        <p className="text-zinc-400 text-xs">
                                            DC
                                        </p>

                                        <h3 className="mt-2 text-2xl font-black text-white">
                                            12
                                        </h3>

                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-[#895CE7]/15 p-4">

                                        <p className="text-zinc-300 text-xs">
                                            Booking Time
                                        </p>

                                        <h3 className="mt-2 text-2xl font-black text-white">
                                            {"<2m"}
                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* FLOATING CARDS */}

                        <div className="floating-card-1 absolute -left-16 top-[15%] rotate-[-10deg] rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-[#895CE7]/15 border border-white/10 flex items-center justify-center text-white">

                                    <Ticket size={24} />

                                </div>

                                <div>

                                    <p className="text-zinc-400 text-xs">
                                        Reservation
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-white">
                                        Confirmed
                                    </h3>

                                </div>

                            </div>

                        </div>

                        <div className="floating-card-2 absolute -right-12 top-[38%] rotate-[8deg] rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-[#895CE7]/15 border border-white/10 flex items-center justify-center text-white">

                                    <Clock3 size={24} />

                                </div>

                                <div>

                                    <p className="text-zinc-400 text-xs">
                                        Reservation Time
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-white">
                                        8:30 PM
                                    </h3>

                                </div>

                            </div>

                        </div>

                        <div className="floating-card-3 absolute -left-8 bottom-[12%] rotate-[8deg] rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-[#895CE7]/15 border border-white/10 flex items-center justify-center text-white">

                                    <Zap size={24} />

                                </div>

                                <div>

                                    <p className="text-zinc-400 text-xs">
                                        Live Status
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-white">
                                        Active
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CURVED LOOP */}

            <div className="relative py-10 overflow-hidden">

                <div className="absolute inset-0 bg-[#895CE7]/10 blur-[100px]" />

                <CurvedLoop
                    marqueeText="EV CHARGING • FAST • SMART • AVAILABLE • RESERVE • "
                    speed={1.5}
                    curveAmount={170}
                    interactive={true}
                />

            </div>

            {/* FEATURES */}

            <section
                id="features"
                className="features-section relative px-8 lg:px-16 py-32"
            >

                <div className="max-w-[1600px] mx-auto">

                    {/* HEADER */}

                    <div className="max-w-[900px]">

                        <SplitText
                            text="Designed for Modern EV Mobility."
                            className="text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white"
                            delay={35}
                            duration={1}
                            ease="power4.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 80 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.2}
                            rootMargin="-100px"
                            textAlign="left"
                        />

                        <p className="mt-8 text-zinc-300 text-xl max-w-[720px] leading-relaxed">

                            Built with a futuristic reservation-first
                            approach that transforms EV charging into
                            a smooth, elegant and premium experience.

                        </p>

                    </div>

                    {/* FEATURE ROWS */}

                    <div className="mt-28 flex flex-col gap-24">

                        {/* ROW 1 */}

                        <div className="feature-row flex items-center justify-between gap-16">

                            <div className="w-[48%]">

                                <p className="text-[#d9c3ff] text-sm tracking-[0.2em] uppercase">
                                    Smart Discovery
                                </p>

                                <h2 className="mt-5 text-6xl font-black leading-[0.92] tracking-[-0.04em] text-white">

                                    Find Nearby
                                    <br />

                                    Charging Instantly.

                                </h2>

                                <p className="mt-7 text-zinc-300 text-lg leading-relaxed">

                                    Explore nearby EV stations with
                                    real-time availability, distance
                                    calculation and premium map interactions.

                                </p>

                                <Link
                                    to="/register"
                                    className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl text-white hover:bg-white/[0.08] transition-all duration-300"
                                >

                                    Explore Discovery

                                    <ArrowRight size={17} />

                                </Link>

                            </div>

                            {/* VISUAL */}

                            <div className="relative w-[52%] h-[520px] rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-3xl">

                                <img
                                    src="/features.jpg"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/55" />

                                <div className="absolute inset-0 bg-[#895CE7]/10" />

                                <div className="absolute top-8 left-8 px-5 py-4 rounded-[24px] border border-white/10 bg-black/30 backdrop-blur-3xl">

                                    <p className="text-zinc-300 text-sm">
                                        Nearby Stations
                                    </p>

                                    <h2 className="mt-2 text-5xl font-black text-white">
                                        18
                                    </h2>

                                </div>

                            </div>

                        </div>

                        {/* ROW 2 */}

                        <div className="feature-row flex items-center justify-between gap-16">

                            {/* VISUAL */}

                            <div className="relative w-[52%] h-[520px] rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-3xl">

                                <img
                                    src="/research.jpg"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/55" />

                                <div className="absolute inset-0 bg-[#895CE7]/10" />

                                <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border border-white/10 bg-black/30 backdrop-blur-3xl p-6">

                                    <h2 className="text-3xl font-black text-white">
                                        Instant Reservation
                                    </h2>

                                    <p className="mt-4 text-zinc-300 leading-relaxed">
                                        Reserve charging slots before arriving.
                                    </p>

                                </div>

                            </div>

                            {/* CONTENT */}

                            <div className="w-[48%]">

                                <p className="text-[#d9c3ff] text-sm tracking-[0.2em] uppercase">
                                    Smart Reservation
                                </p>

                                <h2 className="mt-5 text-6xl font-black leading-[0.92] tracking-[-0.04em] text-white">

                                    Reserve Your
                                    <br />

                                    Slot Before Arrival.

                                </h2>

                                <p className="mt-7 text-zinc-300 text-lg leading-relaxed">

                                    Avoid waiting lines with seamless
                                    booking interactions, live slot visibility
                                    and modern EV reservation flow.

                                </p>

                                <Link
                                    to="/register"
                                    className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl text-white hover:bg-white/[0.08] transition-all duration-300"
                                >

                                    Start Reservation

                                    <ArrowRight size={17} />

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="cta-section relative px-8 lg:px-16 pb-40">

                <div className="max-w-[1600px] mx-auto">

                    <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl px-14 py-24 text-center">

                        {/* BG */}

                        <div className="absolute inset-0 bg-[#895CE7]/10" />

                        <div className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#895CE7]/20 blur-[120px]" />

                        {/* CONTENT */}

                        <div className="relative z-10">

                            <p className="text-[#eadfff] text-sm tracking-[0.25em] uppercase">
                                Join The Future
                            </p>

                            <h2 className="mt-8 text-8xl font-black leading-[0.88] tracking-[-0.06em] text-white">

                                Experience
                                <br />

                                Smarter EV
                                <br />

                                Mobility.

                            </h2>

                            <p className="mt-8 max-w-[760px] mx-auto text-zinc-300 text-xl leading-relaxed">

                                PlugBook combines intelligent charging
                                discovery, reservation infrastructure and
                                futuristic ticketing into one seamless ecosystem.

                            </p>

                            <Link
                                to="/register"
                                className="mt-12 inline-flex items-center gap-4 px-10 py-6 rounded-[28px] bg-white text-black text-lg font-semibold hover:scale-[1.03] transition-all duration-300"
                            >

                                Get Started

                                <ArrowRight size={20} />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    );

}