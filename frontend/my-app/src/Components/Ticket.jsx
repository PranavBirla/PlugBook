import React from 'react'

import { Clock } from 'lucide-react';
import { EvCharger } from 'lucide-react';
import { TicketCheck } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Plug } from 'lucide-react';
import { MoveRight } from 'lucide-react';



const Ticket = ({ booking }) => {

    const now = new Date();
    const start = new Date(booking.startTime);
    const end = new Date(booking.endTime);

    if (!booking) {
        return <p className="text-center mt-10">No booking data found</p>;
    }

    let status = ""

    if (now < start) {
        status = "Upcoming";
    } else if (now >= start && now <= end) {
        status = "Ongoing";
    } else {
        status = "Expired"
    }

    return (

        <div className='relative w-89 bg-white p-3 flex justify-center items-center flex-col rounded-2xl'>
            <div className="absolute top-51 left-[2px] bg-white h-6 w-6 rounded-full   p-2">  </div>
            <div className="absolute top-51 right-[2px]  bg-white h-6 w-6 rounded-full  p-2"></div>
            <div className='bg-white h-fit w-full  flex flex-col justify-around items-center rounded-4xl '>




                <div className='bg-zinc-300 text-black h-full w-full px-4 flex flex-col justify-around rounded-2xl'>
                    <div className='flex justify-between text-m py-4 '>
                        <p className='flex justify-center items-center gap-1'>Plugbook<TicketCheck strokeWidth={1} size={25} /></p>
                        <div className={`text-xs px-2 py-1 rounded-xl w-fit 
                  ${status === "Ongoing" ? "bg-green-200 text-green-600" : status === "Upcoming" ? "bg-blue-200 text-blue-600" : "bg-gray-200 text-gray-600"}
                `}>
                            {status}
                        </div>
                        {/* <p className='text-gray-500 bg-gray-200 px-2 py-1 rounded-2xl' >Expired</p> */}

                    </div>
                    <div className='flex justify-between font-light'>
                        <div className='flex flex-col'>
                            <p className='text-gray-500 font-sans'>From</p>
                            <h1 className='text-xl font-light'>{new Date(booking?.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
                        </div>
                        <div className='flex items-center'><MoveRight strokeWidth={1} size={23} /></div>
                        <div>
                            <p className='text-[#9981ce] font-sans'>To</p>
                            <h1 className='text-xl font-light'>{new Date(booking?.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
                        </div>
                    </div>

                    <div className='relative w-full my-2'>

                        <div className="border-t border-dashed border-gray-800 w-full "></div>

                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#9981ce] rounded-full"></div>

                    </div>

                    <div className='w-full flex my-4  gap-[1.5px] sh'>
                        <div className='w-1/3 flex justify-center items-center gap-2  '>
                            <div><CalendarDays strokeWidth={1} size={18} /></div>
                            <div className='text-sm flex flex-col gap-2 items-center'>
                                <p>Date</p>
                                <p className='text-xs text-zinc-500' >{new Date(booking?.startTime).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex justify-center items-center gap-2 '>
                            <div><Clock strokeWidth={1} size={18} /></div>
                            <div className='text-sm flex flex-col gap-2 items-center'>
                                <p>Time</p>
                                <p className='text-xs text-zinc-500' >{new Date(booking?.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex justify-center items-center gap-2 '>
                            <div><Plug strokeWidth={1} size={18} /></div>
                            <div className='text-sm flex flex-col gap-2 items-center'>
                                <p>Charger</p>
                                <p className='text-xs text-zinc-500' >{booking?.chargerType}</p>
                            </div>
                        </div>

                    </div>



                    <div className='flex justify-between'>

                    </div>


                </div>

            </div>

  <div className="w-full px-2">
    <div className="border-t-2 border-dashed border-gray-500"></div>
</div>

            <div className='bg-gray-400 p-4 flex flex-col justify-between rounded-2xl w-full'>
                <div ><p className='text-sm text-zinc-500 mb-2'>Booking ID :</p>
                    <p className='text-xs '>{booking?._id}</p>
                </div>
                <div className='w-1/2 m-auto mt-2'>
                    <img src="public\dummy barcode.png" alt="" />
                </div>

            </div>
        </div>

    )
}

export default Ticket
