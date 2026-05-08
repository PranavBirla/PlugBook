import React, { useEffect, useState } from "react";

import LandingPageDesktop from "../Components/LandingPageDesktop";
import LandingPageMobile from "../Components/LandingPageMobile";

const LandingPage = () => {

    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768
    );

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };

    }, []);

    return isMobile
        ? <LandingPageMobile />
        : <LandingPageDesktop />;

};

export default LandingPage;