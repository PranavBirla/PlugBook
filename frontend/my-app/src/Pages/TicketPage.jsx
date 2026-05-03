import React from 'react'
import Ticket from '../Components/Ticket'
import Navbar from '../Components/Navbar'
import Top from '../Components/Top'

const TicketPage = () => {
  return (
    <div>
      <Top />
      <div>
        <div className='m-4 text-xl '>MY Tickets</div>

        <div className='flex justify-center'><Ticket /></div>
      </div>

      <Navbar />
    </div>
  )
}

export default TicketPage
