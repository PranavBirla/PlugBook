import { useEffect, useRef } from "react";

export default function PremiumCursor() {

    const cursorRef = useRef(null);

    useEffect(() => {

        // DESKTOP ONLY

        if (window.innerWidth < 1024) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let currentX = mouseX;
        let currentY = mouseY;

        const cursor = cursorRef.current;

        // TRACK MOUSE

        const moveCursor = (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

        };

        // HOVER EFFECTS

        const handleMouseEnter = () => {

            cursor.style.width = "48px";
            cursor.style.height = "48px";
            cursor.style.background = "rgba(255,255,255,0.8)";
            cursor.style.border = "1px solid rgba(255,255,255,0.75)";

        };

        const handleMouseLeave = () => {

            cursor.style.width = "24px";
            cursor.style.height = "24px";
            cursor.style.background = "rgba(255,255,255,0.9)";
            cursor.style.border = "none";

        };

        // SMOOTH FOLLOW

        const animate = () => {

            currentX += (mouseX - currentX) * 0.14;
            currentY += (mouseY - currentY) * 0.14;

            cursor.style.transform =
                `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

            requestAnimationFrame(animate);

        };

        // SELECT INTERACTIVE ELEMENTS

        const interactiveElements = document.querySelectorAll(
            "button, a, input, textarea, .cursor-hover, img"
        );

        interactiveElements.forEach((el) => {

            el.addEventListener("mouseenter", handleMouseEnter);

            el.addEventListener("mouseleave", handleMouseLeave);

        });

        window.addEventListener("mousemove", moveCursor);

        animate();

        return () => {

            window.removeEventListener(
                "mousemove",
                moveCursor
            );

            interactiveElements.forEach((el) => {

                el.removeEventListener(
                    "mouseenter",
                    handleMouseEnter
                );

                el.removeEventListener(
                    "mouseleave",
                    handleMouseLeave
                );

            });

        };

    }, []);

    return (

        <div
            ref={cursorRef}
            className="
                hidden lg:block
                fixed top-0 left-0
                w-[18px] h-[18px]
                rounded-full
                bg-white
                pointer-events-none
                z-[999999]
                mix-blend-difference
                shadow-[0_0_25px_rgba(255,255,255,0.7)]
                transition-[width,height,background,border]
                duration-300
            "
        />

    );

}