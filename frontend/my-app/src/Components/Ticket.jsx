import React from 'react'

import { Clock } from 'lucide-react';
import { EvCharger } from 'lucide-react';
import { TicketCheck } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Plug } from 'lucide-react';
import { MoveRight } from 'lucide-react';


const Ticket = () => {
    return (
        <div className='relative '>
              <div className="absolute bottom-16 left-[-2px] bg-white h-3 w-3 rounded-full   p-2">  </div>
                <div className="absolute bottom-16 right-[-2px]  bg-white h-3 w-3 rounded-full  p-2"></div>
            <div className='bg-black h-fit w-89  flex flex-col justify-around items-center rounded-4xl '>

              


                <div className='bg-purple-100 text-black h-full w-full px-4 flex flex-col justify-around rounded-2xl'>
                    <div className='flex justify-between text-m py-4 '>
                        <p className='flex justify-center items-center gap-1'>Plugbook<TicketCheck strokeWidth={1} size={25} /></p>
                        <p className='text-green-400 bg-gray-200 px-2 py-1 rounded-2xl' >upcoming</p>
                        {/* <p className='text-gray-500 bg-gray-200 px-2 py-1 rounded-2xl' >Expired</p> */}

                    </div>
                    <div className='flex justify-between font-light'>
                        <div className='flex flex-col'>
                            <p className='text-gray-500 font-sans'>From</p>
                            <h1 className='text-xl font-light'>5:30 PM</h1>
                        </div>
                        <div className='flex items-center'><MoveRight strokeWidth={1} size={23} /></div>
                        <div>
                            <p className='text-purple-400 font-sans'>To</p>
                            <h1 className='text-xl font-light'>6:34 PM</h1>
                        </div>
                    </div>

                    <div className='relative w-full my-2'>

                        <div className="border-t border-dashed border-gray-800 w-full "></div>

                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-300 rounded-full"></div>

                    </div>

                    <div className='w-full flex my-4 bg-gray-200 gap-[1.5px] sh'>
                        <div className='w-1/3 flex justify-center items-center gap-2 bg-purple-100 '>
                            <div><CalendarDays strokeWidth={1} size={18} /></div>
                            <div className='text-sm flex flex-col gap-2 items-center'>
                                <p>Date</p>
                                <p className='text-xs text-zinc-500' >24-04-2026</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex justify-center items-center gap-2 bg-purple-100'>
                            <div><Clock strokeWidth={1} size={18} /></div>
                            <div className='text-sm flex flex-col gap-2 items-center'>
                                <p>Time</p>
                                <p className='text-xs text-zinc-500' >5:30 PM</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex justify-center items-center gap-2 bg-purple-100'>
                            <div><Plug strokeWidth={1} size={18} /></div>
                            <div className='text-sm flex flex-col gap-2 items-center'>
                                <p>Charger</p>
                                <p className='text-xs text-zinc-500' >AC</p>
                            </div>
                        </div>

                    </div>



                    <div className='flex justify-between'>

                    </div>


                </div>

            </div>

            <div className="border-t-2 border-dashed border-gray-400 mx-4 flex justify-center items-center relative "></div>


            <div className='bg-purple-300 p-4 flex justify-between rounded-2xl'>
                <div><p className='text-xs text-zinc-500'>Booking ID</p>
                    <p className='text-sm'>PB-638-263-78</p>
                </div>
                <div><p className='text-xs text-zinc-500'>Total fare</p>
                    <p className='text-m text-green-600'>$ 12</p>
                </div>

            </div>
        </div>

    )
}

export default Ticket
