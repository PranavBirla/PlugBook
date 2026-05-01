import React from 'react'
import { ArrowRight } from 'lucide-react';

const CardHome = () => {
  return (
    <div className='mx-4 '>
      <div className='bg-gray-100 border-gray-300 border-[1px] h-53 w-full mx-auto  flex  rounded-4xl relative overflow-hidden'>
        <div className='absolute mx-4'>
        </div>


        <div className='w-full h-full overflow-hidden '>
          <img className=' absolute object-cover w-full h-full' src="public\img-car-home.png" alt="" />
        </div>
        <div className='w-40 absolute m-6 text-xl font-medium flex flex-col gap-5 '>
          <h1>Book EV Slots
            <span className='text-purple-400'> Seamlessly,</span> Anytime, Anywhere</h1>
          <button className=' font-light w-30 text-xs flex items-center justify-center gap-2 bg-black text-white py-2 px-3 rounded-3xl'>Get Started <ArrowRight strokeWidth={1} size={18} /> </button>
        </div>




      </div>
    </div>
  )
}

export default CardHome
