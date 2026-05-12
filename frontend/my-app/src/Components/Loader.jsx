import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PremiumLoader() {

    const orbRef = useRef();
    const eyesRef = useRef([]);
    const statusRef = useRef();

    const [particles, setParticles] = useState([]);

    useEffect(() => {

        // MAIN ENTRANCE

        gsap.fromTo(
            ".loader-content",
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            }
        );

        // ORB FLOAT

        gsap.to(orbRef.current, {
            y: 16,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // STATUS PULSE

        gsap.to(statusRef.current, {
            opacity: 0.5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // PARTICLES

        const interval = setInterval(() => {

            const id = Date.now();

            setParticles((prev) => [
                ...prev,
                {
                    id,
                    angle: Math.random() * Math.PI * 2,
                    distance: 120 + Math.random() * 240,
                },
            ]);

            setTimeout(() => {
                setParticles((prev) =>
                    prev.filter((p) => p.id !== id)
                );
            }, 2200);

        }, 90);

        // EYES FOLLOW

        const handleMove = (e) => {

            const x =
                (e.clientX / window.innerWidth - 0.5) * 18;

            const y =
                (e.clientY / window.innerHeight - 0.5) * 18;

            eyesRef.current.forEach((eye) => {

                gsap.to(eye, {
                    x,
                    y,
                    duration: 0.10,
                    ease: "power2.out",
                });

            });

        };

        window.addEventListener("mousemove", handleMove);

        return () => {

            clearInterval(interval);

            window.removeEventListener(
                "mousemove",
                handleMove
            );

        };

    }, []);

    return (

        <div className="relative h-screen overflow-hidden flex items-center justify-center bg-black px-6">

            {/* BG */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <img
                    src="/full-bg2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

                {/* GLOWS */}

                <div className="absolute top-[5%] left-[5%] w-[420px] h-[420px] rounded-full bg-[#895CE7]/20 blur-[120px]" />

                <div className="absolute bottom-[0%] right-[0%] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-[100px]" />

            </div>

            {/* CONTENT */}

            <div className="loader-content relative z-10 flex flex-col items-center">

                {/* ORB */}

                <div
                    ref={orbRef}
                    className="relative flex items-center justify-center"
                    style={{
                        width: "clamp(170px, 24vw, 240px)",
                        height: "clamp(170px, 24vw, 240px)",
                    }}
                >

                    {/* PARTICLES */}

                    {particles.map((p) => (
                        <Particle
                            key={p.id}
                            angle={p.angle}
                            distance={p.distance}
                        />
                    ))}

                    {/* OUTER GLOW */}

                    <div className="absolute w-[145%] h-[145%] rounded-full bg-[radial-gradient(circle,rgba(137,92,231,0.22),transparent)] animate-pulse" />

                    {/* ORB */}

                    <div className="relative w-full h-full rounded-full border border-white/10 bg-white/[0.08] backdrop-blur-3xl shadow-[0_0_80px_rgba(137,92,231,0.35)] flex items-center justify-center overflow-hidden">

                        {/* INNER GLOW */}

                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent)]" />

                        {/* CORE */}

                        <div className="w-[42%] h-[42%] rounded-full bg-[#895CE7] shadow-[0_0_40px_#895CE7,0_0_80px_#895CE7]" />

                        {/* EYES */}

                        <div className="absolute flex gap-4">

                            <div
                                ref={(el) => (eyesRef.current[0] = el)}
                                className="w-[11px] h-[11px] rounded-full bg-white shadow-[0_0_10px_#fff]"
                            />

                            <div
                                ref={(el) => (eyesRef.current[1] = el)}
                                className="w-[11px] h-[11px] rounded-full bg-white shadow-[0_0_10px_#fff]"
                            />

                        </div>

                    </div>

                </div>

                {/* TEXT */}

                <div className="mt-14 text-center">

                    <h1 className="text-[clamp(2rem,4vw,3.6rem)] font-black tracking-[-0.05em] text-white leading-[1]">

                        Synchronizing
                        <br />

                        PlugBook Network

                    </h1>

                    <p className="mt-5 text-zinc-400 text-[15px] sm:text-[17px] max-w-[520px] leading-relaxed">

                        Preparing intelligent charging infrastructure
                        and optimizing your EV experience.

                    </p>

                </div>

                {/* STATUS */}

                <div className="mt-10 flex flex-col items-center">

                    {/* BAR */}

                    <div className="w-[220px] h-[5px] rounded-full bg-white/10 overflow-hidden">

                        <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-[#895CE7] to-white animate-pulse" />

                    </div>

                    {/* STATUS TEXT */}

                    <div
                        ref={statusRef}
                        className="mt-4 text-sm tracking-[0.25em] uppercase text-zinc-500"
                    >

                        Initializing System

                    </div>

                </div>

            </div>

        </div>

    );

}



function Particle({ angle, distance }) {

    const ref = useRef();

    useEffect(() => {

        gsap.fromTo(
            ref.current,
            {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
            },
            {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                scale: 0,
                duration: 2.2,
                ease: "power2.out",
            }
        );

    }, []);

    return (

        <div
            ref={ref}
            className="absolute w-[12px] h-[12px] rounded-full bg-white shadow-[0_0_20px_#fff,0_0_40px_#895CE7] pointer-events-none"
        />

    );

}