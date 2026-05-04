import React from 'react'
import ActiveBookingCard from '../Components/ActiveBookingCard'
import Navtop from '../Components/Navtop'
import Top from '../Components/Top'
import Navbar from '../Components/Navbar'

const ActiveSlotBookings = () => {
  return (
    <div className='w-full'>
      <Top/>
      <div className='flex justify-center lg:w-4/5 m-auto'>
      <ActiveBookingCard/></div>
      <Navbar/>

    </div>
  )
}

export default ActiveSlotBookings
