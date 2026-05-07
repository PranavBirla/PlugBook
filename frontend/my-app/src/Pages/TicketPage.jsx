import React from 'react'
import Ticket from '../Components/Ticket'
import Navbar from '../Components/Navbar'
import Top from '../Components/Top'


import { useLocation } from "react-router-dom";


const TicketPage = () => {

  const location = useLocation();

  const bookingFromCreate = location.state?.bookingData?.booking;
  const bookingFromCard = location.state?.booking;

  // final booking object
  const booking = bookingFromCreate || bookingFromCard;
return (
  <div className='relative min-h-screen overflow-hidden'>
  
  <Top />

  {/* Background image behind lower ticket area */}
  

  {/* Content */}
  <div className='relative z-10'>
    
    <div className='m-4 text-2xl text-zinc-700 font-black shadow-2xl'>
      MY Ticket
    </div>

    <div className='flex justify-center mt-8'>
      <Ticket booking={booking} />
    </div>

  </div>

  <Navbar />
</div>
)
}

export default TicketPage
