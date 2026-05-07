import React from 'react'
import Ticket from '../Components/Ticket'
import Navbar from '../Components/Navbar'
import Top from '../Components/Top'
import BgIcons from "../Components/BgIcons"


import { useLocation } from "react-router-dom";


const TicketPage = () => {

  const location = useLocation();

  const bookingFromCreate = location.state?.bookingData?.booking;
  const bookingFromCard = location.state?.booking;

  // final booking object
  const booking = bookingFromCreate || bookingFromCard;

  return (
    <div>
      <Top />
      <div>
        <div className='m-4 text-2xl text-zinc-700 font-black'>MY Ticket</div>

        <div className='flex justify-center'><Ticket booking={booking} /></div>
      </div>

      <Navbar />
    </div>
  )
}

export default TicketPage
