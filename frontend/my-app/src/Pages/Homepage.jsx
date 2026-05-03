import React from 'react'
import { Bell } from 'lucide-react';
import CardHome from '../Components/CardHome';
import IconSet from '../Components/IconSet';
import Navbar from '../Components/Navbar';
import { Percent } from 'lucide-react';
import OfferCardSet from '../Components/OfferCardSet';

const Homepage = () => {
  return (
    <div className='relative '>
      <div className='flex justify-between items-center m-4 md:m-12 '>
        <div className='text-xl font-medium'>PlugBook</div>

        <Bell strokeWidth={1} />
      </div>
      <CardHome />
      <IconSet />
      <div className=' flex items-center text-xl mx-4 font-medium  md:text-2xl md:mx-10 lg:text-3xl lg:mx-12 '>
        <div className='hidden lg:block'><Percent size={32} strokeWidth={2} /> </div>
        <div className='hidden md:block lg:hidden'><Percent size={26} strokeWidth={2} /> </div>
        <div className='md:hidden'><Percent size={22} strokeWidth={2} /> </div>
        <h1>Offers</h1>
        </div>
      <OfferCardSet />
      <OfferCardSet />
      

      <Navbar />


    </div>
  )
}

export default Homepage
