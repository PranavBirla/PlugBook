import React from 'react'
import { Bell } from 'lucide-react';
import NavTop from './NavTop';
import BackButton from './BackButton';

const Top = () => {
  return (
    <div className='sm:flex-row flex justify-between items-center mb-2 mx-4 md:mx-10 lg:mx-12 px-2 py-2 lg:p-4'>
      <div className='md:hidden'><BackButton /></div>
      <div className='m-4'>
        <img src="/plugbook.png" alt="PlugBook" className=' md:h-10 h-6 ' />
      </div>
      <div className='hidden md:flex justify-center items-center'>
        <NavTop />
      </div>

      <div class="relative">
        <img src="https://i.pravatar.cc/40"
          class="w-10 md:h-10  rounded-full cursor-pointer border-[2px] border-gray-500" />
      </div>


    </div>
  )
}

export default Top
