import React from 'react'
import { Link } from 'react-router-dom'
import { House } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <>
  <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] sm:hidden">
      <div className="flex justify-around items-center py-3">
        <Link ><House strokeWidth={1}/></Link>
        <Link><MapPin strokeWidth={1}/></Link>
        <Link><Bookmark strokeWidth={1}/></Link>
        <Link><User strokeWidth={1}/></Link>
      </div>
    </div>
    </>
  )
}

export default Navbar

