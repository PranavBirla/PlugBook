import React from 'react'

const BookedPage = () => {
  return (
    <div className=''>
      <Top />
      <div className=''>
        <div className='m-4 text-2xl text-zinc-700 font-black'>MY Ticket</div>

        <div className='flex justify-center'><Ticket /></div>
      </div>

      <Navbar />
    </div>
  )
}

export default BookedPage
