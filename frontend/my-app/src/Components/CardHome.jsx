import React from 'react'
import { ArrowRight } from 'lucide-react';

const CardHome = () => {
  return (
    <div className='mx-4 mt-2 sm:mx-10 md:mx-12 lg:mx-14'>

      <div className='relative overflow-hidden rounded-4xl border border-gray-200 
      bg-gradient-to-br from-white via-gray-100/80 to-purple-100/40 
      shadow-sm h-53 sm:h-70 md:h-85 p-3 sm:p-10 lg:px-10'>

        {/* subtle glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-indigo-300/20 rounded-full blur-3xl"></div>

        {/* car image */}
        <div className="absolute right-0 bottom-0 h-full flex items-end justify-end pointer-events-none">
          <img
            src="public\Photopea.png"
            alt="EV"
            className="h-[82%] sm:h-[90%] md:h-[95%] w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* content */}
        <div className='relative z-10 w-45 m-4 text-xl font-medium flex flex-col gap-4 
        sm:text-2xl sm:w-55 
        md:text-3xl md:w-70 md:m-8 
        lg:text-5xl lg:w-120 lg:m-16 lg:gap-10'>

          <h1 className="leading-tight text-gray-900">
            Book EV Slots
            <span className='block text-purple-500 font-semibold'>
              Seamlessly,
            </span>
            <span className="text-gray-800">
              Anytime, Anywhere
            </span>
          </h1>

          {/* button */}
          <button className='mt-1 w-fit text-xs flex items-center gap-2 
          bg-black text-white py-2.5 px-4 rounded-full 
          shadow-md active:scale-95 transition'>

            Get Started 
            <ArrowRight strokeWidth={1.5} size={16} />

          </button>

        </div>

      </div>
    </div>
  )
}

export default CardHome
