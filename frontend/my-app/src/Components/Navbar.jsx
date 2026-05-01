import React from 'react'
import { Link } from 'react-router-dom'
import { House } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='mt-5 mx-4 '>
    <div className='flex justify-between items-center bg-gray-100 p-4 border-gray-300 border-[1px] rounded-3xl'>
      <Link><House /></Link>
      <Link><MapPin /></Link>
      <Link><Bookmark /></Link>
      <Link><User /></Link>
    </div>
    </div>
  )
}

export default Navbar
