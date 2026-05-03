import React from 'react'
import { CalendarDays } from 'lucide-react';
import { Clock } from 'lucide-react';
import { EvCharger } from 'lucide-react';
const Ticket = () => {
    return (
        <div className='bg-gray-100 h-53 w-86  flex flex-col justify-around items-center rounded-4xl px-2 relative'>

            <div className="absolute top-35 left-0 bg-gray-100 h-1 w-1 rounded-full  p-2">  </div>
            <div className="absolute top-35 right-0  bg-gray-100 h-1 w-1 rounded-full  p-2"></div>


            <div className='bg-black text-white h-full w-full p-4 flex flex-col justify-around rounded-4xl'>
                <div className='flex justify-between text-xl '>
                    <p className=''><EvCharger /></p>
                    <p>Scedule & Time</p>
                </div>
                <div className='flex justify-between font-light'>
                    <div className='flex flex-col'>
                        <p className='text-gray-400 font-sans'>From</p>
                        <h1 className='text-xl font-light'>Kolkata</h1>
                    </div>
                    <div>
                        <p className='text-gray-400 font-sans'>To</p>
                        <h1 className='text-xl font-light'>Mumbai</h1>
                    </div>
                </div>

                <div className='relative w-full '>
                    
                    <div className="border-t border-dashed border-gray-400 w-full "></div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>


                </div>
                <div>
                    <div className="border-t-2 border-dashed border-gray-900 px-6 w-full relative"></div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <CalendarDays />

                        <h1>Today</h1>
                    </div>
                    <div className='flex gap-2'>
                        <Clock />
                        <h1>5:30 PM</h1>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Ticket
