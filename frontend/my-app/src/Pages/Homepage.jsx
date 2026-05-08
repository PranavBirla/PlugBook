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


        <div className='my-15'>


          <OurResearch/>
          
          <div className='border-t border-black/10 my-8 mx-6'></div>

          <div className='flex flex-col gap-4  tracking-widest mt-8'>
            <div className='flex '> 
              <h1 className='text-2xl font-medium bg-sky-100 px-1 w-fit '>Our Vision</h1>
            </div>
            <p className='text-sm text-zinc-500 ml-5 leading-loose '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum iusto, dolores recusandae molestias fuga iure ex sapiente illo possimus qui ratione amet eaque, inventore dolorum unde error accusantium provident?</p>
            <div className='flex justify-end '>
              <button className='shadow-[0_6px_20px_rgba(0,0,0,0.18)] flex gap-1 items-center text-md text-white bg-black rounded-3xl py-1 px-3 mx-4'>View <ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />


    </div>
  )
}

export default Homepage
