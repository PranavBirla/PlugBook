import React, { useEffect } from "react";
import gsap from "gsap";
import "../css/BgIcons.css";

const icons = [
    "/icons/car1.svg",
    "/icons/car2.svg",
    "/icons/charger1.svg",
    "/icons/charger2.svg",
    "/icons/cable1.svg",
    "/icons/cable2.svg",
    "/icons/building1.svg",
    "/icons/building2.svg",
    "/icons/steering1.svg",
];

export default function BgIcons() {

    useEffect(() => {
        // subtle floating animation
        gsap.utils.toArray(".bg-icon").forEach((el, i) => {
            gsap.to(el, {
                y: "+=20",
                duration: 8 + i % 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2,
            });
        });
    }, []);

    return (
        <div className="bg-wrapper">

            {/* Generate multiple icons */}
            {Array.from({ length: 18 }).map((_, i) => {
                const randomIcon = icons[i % icons.length];

                return (
                    <img
                        key={i}
                        src={randomIcon}
                        className="bg-icon"
                        style={{
                            top: `${(i * 13) % 90}%`,
                            left: `${(i * 17) % 90}%`,
                        }}
                    />
                );
            })}

        </div>
    );
}