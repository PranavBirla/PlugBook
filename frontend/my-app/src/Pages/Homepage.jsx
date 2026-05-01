import React from 'react'
import { Bell } from 'lucide-react';
import CardHome from '../Components/CardHome';
import IconSet from '../Components/IconSet';

const Homepage = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center m-4'>
        <div className='text-xl font-medium'>PlugBook</div>
        <Bell strokeWidth={1} />
       </div>
       <CardHome/>
       <IconSet/>
       <CardHome/>
       <CardHome/>
       
       
    </div>
  )
}

export default Homepage
