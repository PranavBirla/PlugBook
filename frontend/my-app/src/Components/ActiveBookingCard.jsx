import React from 'react'
import { MoveRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { EvCharger } from 'lucide-react';
import { TicketCheck } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Plug } from 'lucide-react';

import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActiveBookingCard = () => {
  return (
    <div className=' py-3 px-2 m-2 sm:p-4 rounded-3xl text-white bg-black w-full fit flex gap-4 sm:gap-5 md:gap-7 items-center md:mx-20  xl:mx-20'>
      <div className='h-22 w-28 overflow-hidden rounded-3xl md:h-30 md:w-35 '>
        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rgEBL1FjFn6TYclGqveFIxyFJB98yhnF2gvFXOWzNacOZ3yc3XR2ovvSJckUo8JAiYxE7_3f6SxEessO1ucwanukfXCii1h-wQMuORI&s=10" alt="" />

      </div> 
      <div className='gap-1 flex flex-col sm:gap-2   w-full'>
        <div className='flex justify-between md:mx-4 '>
          {/* <div className='bg-gray-300 text-xs p-1 rounded-xl text-green-500 md:text-sm w-fit'>upcoming</div> */}
          <div>
            {/* <Link to="/tickets" ><ChevronRight /></Link> */}
            
            </div>
        </div>

        <div className=' mx-2 text-lg font-black flex justify-between md:gap-3 font-light'>
          <div className=''>

            <h1 className=' '>5:30 PM</h1>
          </div>
          <div className='flex items-center'><MoveRight strokeWidth={1} size={23} /></div>
          <div>
            <h1 className=' '>6:34 PM</h1>
          </div>



        </div>

        <div className='w-full flex my-4 bg-black gap-[1.5px] '>
          <div className='w-1/3 flex justify-center items-center gap-1 bg-black '>
            <div><CalendarDays strokeWidth={1} size={18} /></div>
            <div className='text-sm flex flex-col gap-2 items-center'>

              <p className='text-xs text-zinc-400' >24-04-2026</p>
            </div>
          </div>
          <div className='w-1/3 flex justify-center items-center gap-2 bg-black'>
            <div><Clock strokeWidth={1} size={18} /></div>
            <div className='text-sm flex flex-col gap-2 items-center'>

              <p className='text-xs text-zinc-400' >5:30 PM</p>
            </div>
          </div>
          <div className='w-1/3 flex justify-center items-center gap-2 bg-black'>
            <div><Plug strokeWidth={1} size={18} /></div>
            <div className='text-sm flex flex-col gap-2 items-center'>

              <p className='text-xs text-zinc-400' >AC</p>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default ActiveBookingCard
