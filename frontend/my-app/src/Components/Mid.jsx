import React from 'react'
import { ArrowRight } from 'lucide-react';

const Mid = () => {
    return (
        <div className='mt-25 flex flex-col items-center gap-6 '>
            <div className=' text-3xl md:flex flex-col items-center md:text-5xl font-medium gap-2'>
                <h1>Book <span className='bg-gradient-to-r from-blue-500 text-shadow-2xs to-purple-500 bg-clip-text text-transparent'>EV Charging Slots. </span></h1>
                <h1><span className=' bg-gradient-to-r from-blue-500 to-purple-500  bg-clip-text text-transparent'> Seamlessly, </span>Anytime </h1>
                <h1>Anywhere</h1>
            </div>
            <div className=' text-shadow-2xs text-zinc-700 flex flex-col items-center'>
                <p >Find, reserve, and charge with ease.</p> <p> Power your journey with smarter planning.</p>
            </div>
            <button className='flex items-center justify-center gap-3 bg-black text-white py-2 px-5 rounded-3xl'>Get Started <ArrowRight size={20} /> </button>
        </div>
    )
}

export default Mid
