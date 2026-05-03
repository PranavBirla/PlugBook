import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/plugbook.png";
import logoDark from "../assets/plugbook-dark.png";
import "../css/landingPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPageNew() {
    const maskRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=400%",
                scrub: 1.5,
                pin: true,
            },
        });

        // 1️⃣ REVEAL WHITE LAYER
        tl.to(maskRef.current, {
            clipPath: "circle(80% at center)",
            ease: "none",
        }, 0);

        // 4️⃣ MOVE LOGO UP + SHRINK (MAIN HERO TRANSITION)
        tl.to(".logoDark", {
            top: "10%",
            scale: 0.4,
            ease: "none",
        }, 1);

        // 5️⃣ TEXT APPEARS
        tl.to(".hero-text", {
            y: -70,
            opacity: 1,
            ease: "power2.out",
        }, 1.2);

        // 6️⃣ BUTTON APPEARS
        tl.to(".hero-btn", {
            y: -70,
            opacity: 1,
            ease: "power2.out",
        }, 1.4);

    }, []);

    return (
        <div className="body">

            {/* HERO SECTION */}
            <section ref={heroRef} style={styles.hero}>

                {/* PURPLE BACKGROUND */}
                <div style={styles.purpleBg}>
                    <img src={logo} style={styles.logo} />
                </div>

                {/* WHITE REVEAL LAYER */}
                <div ref={maskRef} style={styles.maskLayer}>

                    <div className="layer2">

                        {/* LOGO */}
                        <img src={logoDark} className="logoDark" />

                        {/* TEXT */}
                        <h2 className="hero-text">
                            <div className="text-container">
                                <span className="hero-text1">Book EV</span>
                                <span className="hero-text2">Slots</span>
                                <div className="hero-text1">Seamlessly and Easily</div>
                                <div className="hero-text1">From anywhere</div>
                            </div>
                        </h2>

                        {/* BUTTON */}
                        <button className="hero-btn">
                            Get Started
                        </button>

                    </div>


                </div>

            </section>

            {/* EXTRA SCROLL SPACE */}
            <section style={{ height: "100vh", background: "#A83AC7" }}></section>

        </div>
    );
}

const styles = {
    body: {
        margin: 0,
        padding: 0,
    },

    hero: {
        position: "relative",
        height: "100vh",
        overflow: "hidden",
    },

    purpleBg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at center, #7c3aed, #4c1d95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: "800px",
        height: "auto",
    },

    maskLayer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#ffffff",

        clipPath: "circle(0% at center)", // 👈 IMPORTANT

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

};