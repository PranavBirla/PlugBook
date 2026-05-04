import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/plugbook.png";
import logoDark from "../assets/plugbook-dark.png";
import "../css/landingPage.css";
import BgIcons from "../Components/BgIcons"

gsap.registerPlugin(ScrollTrigger);

export default function LandingPageNew() {
    const maskRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.set(".logoDark", {
            position: "absolute",
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            scale: 1,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=400%",
                scrub: 1.5,
                pin: true,
            },
        });

        tl.to(".purple-bg", {
            opacity: 0,
            duration: 0.3,
        }, 0.2);
        
        tl.set(".purple-bg", {
            display: "none",
        });

        //  REVEAL WHITE LAYER
        tl.to(maskRef.current, {
            clipPath: "circle(80% at center)",
            backgroundColor: "transparent",
            ease: "none",
        }, 0);

        // MOVE LOGO UP + SHRINK (MAIN HERO TRANSITION)
        tl.to(".logoDark", {
            top: "10%",
            scale: 0.6,
            ease: "none",
        }, 1);

        // TEXT APPEARS
        tl.to(".hero-text", {
            opacity: 1,
            y: 0,
        }, 1.2);

        //  BUTTON APPEARS
        tl.to(".hero-btn", {
            opacity: 1,
            y: 0,
        }, 1.4);


        // PARALLAX EFFECT
        gsap.to(".bg-wrapper", {
            y: 80,
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        gsap.to(".logoDark", {
            y: -120,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        gsap.to(".hero-text", {
            y: -180,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        gsap.to(".hero-btn", {
            y: -140,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });

    }, []);

    return (
        <div className="body">
            <BgIcons />

            {/* HERO SECTION */}
            <section ref={heroRef} className="hero">

                {/* PURPLE BACKGROUND */}
                <div className="purple-bg">
                    <img src={logo} className="logo1" />
                </div>

                {/* WHITE REVEAL LAYER */}
                <div ref={maskRef} className="mask-layer">


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
            <section>

                <div className="section-2">

                </div>

            </section>

        </div>
    );
}
