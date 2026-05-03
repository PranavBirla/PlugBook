import React from 'react'
import { Bell } from 'lucide-react';
import NavTop from './NavTop';

const Top = () => {
  return (
    <div className='flex justify-between items-center mb-2  p-4'>
        <div className='text-xl font-medium'>PlugBook</div>
        <div className='hidden md:flex justify-center items-center'>
          <NavTop />
        </div>

        <Bell strokeWidth={1} />
      </div>
  )
}

export default Top
