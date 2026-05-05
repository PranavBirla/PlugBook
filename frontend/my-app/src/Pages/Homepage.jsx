import React from 'react'

import CardHome from '../Components/CardHome';
import IconSet from '../Components/IconSet';
import Navbar from '../Components/Navbar';
import { Percent } from 'lucide-react';
import OfferCardSet from '../Components/OfferCardSet';
import Top from '../Components/Top';
import CardDekstop from '../Components/CardDekstop';
import MagicCard from "../Components/MagicCard";

const Homepage = () => {
  return (
    <div className='relative '>
      <div className="pb-20 md:pb-0">
        <Top />
        <div className="md:hidden">
          <CardHome />
        </div>
        <div className='hidden md:block'>
          <MagicCard>
            <CardDekstop />
          </MagicCard>
        </div>
        <IconSet />
        <div className=' flex items-center text-xl mx-4 font-medium  md:text-2xl sm:mx-8 md:mx-10 lg:text-3xl lg:mx-12 '>
          <div className='hidden lg:block'><Percent size={32} strokeWidth={2} /> </div>
          <div className='hidden md:block lg:hidden'><Percent size={26} strokeWidth={2} /> </div>
          <div className='md:hidden'><Percent size={22} strokeWidth={2} /> </div>
          <h1>Offers</h1>
        </div>
        <OfferCardSet />
        <OfferCardSet />

      </div>
      <Navbar />


    </div>
  )
}

export default Homepage
