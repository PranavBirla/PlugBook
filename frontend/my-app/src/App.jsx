import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AppRoutes from './routes/AppRoutes'

import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PremiumCursor from "./Components/PremiumCursor";
// import CustomCursor from './Components/CustomCursor';
// import FollowCursor from './Components/FollowCursor';
// import RippleCursor from './Components/RippleCursor';
// import CanvasCursor from "./Components/CanvasCursor";

gsap.registerPlugin(ScrollTrigger);


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

  }, []);

  return (
    <>
      <PremiumCursor />
      
      <AppRoutes />
    </>
  );
}


export default App
