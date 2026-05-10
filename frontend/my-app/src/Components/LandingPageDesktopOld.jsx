import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/plugbook.png";
import logoDark from "../assets/plugbook-dark.png";
import "../css/landingPage.css";
import BgIcons from "./BgIcons"
import { Link } from 'react-router-dom'
import SplitText from "./SplitText";
import CurvedLoop from "./CurvedLoop";



gsap.registerPlugin(ScrollTrigger);

export default function LandingPageDesktop() {

    const maskRef = useRef(null);
    const heroRef = useRef(null);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

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
        gsap.to(".bg-image", {
            y: 220,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
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

        gsap.to(".curved-section", {
            y: -50,
            scrollTrigger: {
                trigger: ".curved-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.8,
            },
        });

    }, []);

    return (
        <div className=" body h-full opacity-90">
            {/* <BgIcons /> */}

            {/* PARALLAX BACKGROUND */}

            <div className="bg-wrapper fixed inset-0 -z-10 overflow-hidden">

                <div
                    className="
    bg-image
    absolute
    inset-0
    bg-no-repeat
"
                    style={{
                        backgroundImage: "url('/full-bg2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* DARK OVERLAY */}
                <div className="
    absolute
    inset-0
    bg-black/35
" />

                {/* PURPLE TINT */}
                <div className="
    absolute
    inset-0
    bg-[#895CE7]/10
" />

            </div>





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



                        <Link to='/register' className="hero-btn">Get Started</Link>

                    </div>
                </div>

            </section>

            {/* CURVED LOOP TRANSITION */}
            <div className="curved-section">
                <CurvedLoop
                    marqueeText="EV CHARGING • FAST • BOOKING • AVAILABLE • "
                    speed={1.5}
                    curveAmount={150}
                    interactive={true}
                />
            </div>

            {/* EXTRA SCROLL SPACE */}
            <section>

                <div className="section-2">

                    <div className="section-2">


                        <SplitText
                            text="Welcom! To PlugBook..."
                            className="text-8xl font-semibold text-center"
                            delay={50}
                            duration={1.25}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                            showCallback
                        />

                    </div>

                </div>

            </section>

        </div>
    );
}
