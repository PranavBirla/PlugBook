import React from 'react'
import { MoveRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { EvCharger } from 'lucide-react';
import { TicketCheck } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Plug } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const ActiveBookingCard = ({ booking }) => {

  const now = new Date();
  const start = new Date(booking.startTime);
  const end = new Date(booking.endTime);
  
  const navigate = useNavigate();

  const handleOpenTicket = () => {
    navigate("/tickets", {
      state: { booking }
    });
  };

  let status = "";

  if (now < start) {
    status = "Upcoming";
  } else if (now >= start && now <= end) {
    status = "Ongoing";
  }


  return (
    <div onClick={handleOpenTicket} className='py-3 px-2 m-4 sm:p-4 md:mx-30 rounded-3xl text-white bg-black border-purple-300 border-2 w-full fit flex gap-4 sm:gap-5 md:gap-7 items-center   xl:mx-20'>
      <div className='h-22 w-28 overflow-hidden rounded-3xl md:h-30 md:w-35 '>
        <img className='w-full h-full' src="public\selectedStationIcon.png" alt="" />

      </div>
      <div className='gap-1 flex flex-col sm:gap-2   w-full'>
      <h2 className="text-sm">{booking.station?.stationName}</h2>
        <div className='flex justify-between md:mx-4 '>
          <div className={`text-xs px-2 py-1 rounded-xl w-fit 
                  ${status === "Ongoing" ? "bg-green-200 text-green-600" : "bg-gray-200 text-gray-600"}
                `}>
            {status}
          </div>
          <div>
            {/* <Link to="/tickets" ><ChevronRight /></Link> */}

          </div>
        </div>

        <div className=' mx-2 text-lg font-light flex justify-between md:justify-center md:gap-25 lg:gap:35'>
          <div className=''>

            <h1 className=' '>{new Date(booking.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h1>
          </div>
          <div className='flex items-center'><MoveRight strokeWidth={1} size={23} /></div>
          <div>
            <h1 className=' '>{new Date(booking.endTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h1>
          </div>



        </div>

        <div className='w-full flex my-4 bg-black gap-[1.5px] '>
          <div className='w-1/3 flex justify-center items-center gap-1 bg-black '>
            <div><CalendarDays strokeWidth={1} size={18} /></div>
            <div className='text-sm flex flex-col gap-2 items-center'>

              <p className='text-xs text-zinc-400' >{new Date(booking.startTime).toLocaleDateString()}</p>
            </div>
          </div>
          <div className='w-1/3 flex justify-center items-center gap-2 bg-black'>
            <div><Clock strokeWidth={1} size={18} /></div>
            <div className='text-sm flex flex-col gap-2 items-center'>

              <p className='text-xs text-zinc-400' >{new Date(booking.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
          </div>
          <div className='w-1/3 flex justify-center items-center gap-2 bg-black'>
            <div><Plug strokeWidth={1} size={18} /></div>
            <div className='text-sm flex flex-col gap-2 items-center'>

              <p className='text-xs text-zinc-400' >{booking.chargerType}</p>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default ActiveBookingCard
