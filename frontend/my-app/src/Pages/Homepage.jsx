import React from 'react'

import CardHome from '../Components/CardHome';
import IconSet from '../Components/IconSet';
import Navbar from '../Components/Navbar';
import { Percent } from 'lucide-react';
import OfferCardSet from '../Components/OfferCardSet';
import Top from '../Components/Top';
import CardDekstop from '../Components/CardDekstop';
import MagicCard from "../Components/MagicCard";
import BgIcons from '../Components/BgIcons';
import { ArrowRight } from 'lucide-react';
import CardHome2 from '../Components/CardHome2';
import OurResearch from '../Components/OurResearch';
import OurFeatures from '../Components/OurFeatures';

const Homepage = () => {
  return (
    <div className='relative '>
      {/* <BgIcons/> */}

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10">

        {/* GRADIENT TOP */}
        <div
          className="
        h-screen
        bg-cover
        bg-center
        bg-no-repeat
        opacity-90
    "

          style={{
            backgroundImage:
              "url('/background1.jpg')"
          }}
        />

        {/* DARK OVERLAY */}

        <div className="
                    absolute
                    inset-0
                    bg-black/40
                " />

      </div>

      <div className="pb-20 md:pb-0">
        <Top />
        <div className="mb-10 md:hidden">
          <CardHome />
        </div>
        <div className='hidden md:block'>
          {/* <MagicCard> */}
          <CardDekstop />
          {/* </MagicCard> */}
        </div>
        <IconSet />

        <div className=" mt-10 md:hidden">
          <CardHome2 />
        </div>


        <div className='my-10'>


          <OurResearch />

        

          <OurFeatures />

        </div>

        <div className="w-full">
          <img src="/vector2.svg" alt="" className='w-full' />
        </div>
      </div>
      <Navbar />


    </div>
  )
}

export default Homepage
