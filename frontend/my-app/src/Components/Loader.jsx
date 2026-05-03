import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import FloatingIcons from "../Components/FloatingIcons";


export default function PremiumLoader() {
    const orbRef = useRef();
    const eyesRef = useRef([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Text pop
        gsap.fromTo(
            ".loader-text",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        // Floating animation
        gsap.to(orbRef.current, {
            y: 12,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Particle system
        const interval = setInterval(() => {
            const id = Date.now();

            setParticles((prev) => [
                ...prev,
                {
                    id,
                    angle: Math.random() * Math.PI * 2,
                    distance: 100 + Math.random() * 300,
                },
            ]);

            // remove particle after animation
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== id));
            }, 1500);
        }, 60);

        // Mouse tracking (eyes)
        const handleMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            eyesRef.current.forEach((eye) => {
                gsap.to(eye, {
                    x,
                    y,
                    duration: 0.1,
                    ease: "power2.out",
                });
            });
        };

        window.addEventListener("mousemove", handleMove);


        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <div style={styles.container}>

            <FloatingIcons />  

            <div ref={orbRef} style={styles.orb} >
                {particles.map((p) => (
                    <Particle key={p.id} angle={p.angle} distance={p.distance} />
                ))}
                <div style={styles.glow}></div>

                <div style={styles.core}></div>

                <div style={styles.eyes}>
                    <div ref={(el) => (eyesRef.current[0] = el)} style={styles.eye}></div>
                    <div ref={(el) => (eyesRef.current[1] = el)} style={styles.eye}></div>
                </div>
            </div>

            <p className="loader-text" style={styles.text}>
                <span style={styles.highlight}>Preparing</span> your charging experience!
            </p>
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
                duration: 2,
                ease: "power2.out",
            }
        );
    }, []);

    return <div ref={ref} style={particleStyle} />;
}


const styles =
{
    container: {
        height: "100vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    highlight: {
        color: "#6C5CE7",
        fontWeight: 700,
    },

    orb: {
        width: "30vw",
        height: "30vw",
        maxWidth: "200px",
        maxHeight: "200px",
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(108,92,231,0.05)",
        boxShadow: "0 0 80px rgba(108,92,231,0.3)",
        overflow: "visible",
        zIndex: 5,
    },

    glow: {
        position: "absolute",
        width: "140%",
        height: "140%",
        borderRadius: "50%",
        background:
            "radial-gradient(circle, rgba(108,92,231,0.4), transparent)",
        animation: "pulse 2s infinite",
    },

    core: {
        width: "45%",
        height: "45%",
        borderRadius: "50%",
        background: "#6C5CE7",
        boxShadow: "0 0 40px #6C5CE7, 0 0 80px #6C5CE7",
        zIndex: 2,
    },

    eyes: {
        position: "absolute",
        display: "flex",
        gap: "12px",
        zIndex: 3,
    },

    eye: {
        width: "10px",
        height: "10px",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 0 10px #fff",
    },

    text: {
        marginTop: "30px",
        fontSize: "40px",
        fontWeight: 600,
        color: "#1a1a1a",
        letterSpacing: "0.3px",
        textAlign: "center",
        maxWidth: "460px",
        lineHeight: "1.5",
        zIndex: 5,
    },


};

const particleStyle = {
    position: "absolute",
    width: "20px",
    height: "20px",
    background: "#6C5CE7",
    borderRadius: "50%",
    boxShadow: "0 0 20px #6C5CE7, 0 0 40px #6C5CE7",
    pointerEvents: "none",
};