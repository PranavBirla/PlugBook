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
    <div onClick={handleOpenTicket} className=' flex flex-col mx-4 bg-white relative rounded-4xl overflow-hidden shadow-[0_0_20px_0_rgba(0,0,0,0.2)] sm:mx-12 md:flex-row'>
      <div className='md:w-1/3'><img src="/img1.png" alt="" /></div>

      <div className='flex justify-center md:mx-20 md:w-2/3 md:justify-around'>
        <div className='flex justify-between items-center py-3 px-5 absolute bottom-0  my-2 rounded-4xl bg-white/[0.90] w-12/13 md:static md:gap-4'>
          <div className='flex flex-col gap-1 md:gap-4 '>
            <h2 className="text-xs   font-medium md:text-lg">{booking.station?.stationName}</h2>
            <div className='text-zinc-600 flex justify-between font-light'>


              <h1 className='text-xs  md:text-sm '>{new Date(booking?.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>

              <div className='flex items-center'><MoveRight strokeWidth={1} size={18} /></div>


              <h1 className='text-xs md:text-sm'>{new Date(booking?.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>

            </div>
          </div>
          <div className={`text-xs px-2 py-2 rounded-4xl w-fit md:text-sm lg:p-3
                  ${status === "Ongoing" ? "bg-green-200 text-green-600" : "bg-gray-400 text-gray-700"}
                `}>
            {status}
          </div>

        </div>
      </div>





    </div>
  )
}

export default ActiveBookingCard
