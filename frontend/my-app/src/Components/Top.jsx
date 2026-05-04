import React from 'react'
import { Bell } from 'lucide-react';
import NavTop from './NavTop';
import BackButton from './BackButton';

const Top = () => {
  return (
    <div className='flex justify-between items-center mb-2  p-4'>
        <div className='text-xl font-medium'>PlugBook</div>
        <div className='hidden md:flex justify-center items-center'>
          <NavTop />
        </div>

        <BackButton/>
      </div>
  )
}

export default Top
