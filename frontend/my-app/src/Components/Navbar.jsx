import React from 'react'
import { Link } from 'react-router-dom'
import { House } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { User } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] md:hidden z-50">
        <div className="flex justify-around items-center py-5">


          <NavLink to="/home">
            {({ isActive }) => (
              <House strokeWidth={1} className={isActive ? "text-black" : "text-gray-400"} />
            )}
            
          </NavLink>

          <NavLink to="/map">
            {({ isActive }) => (
              <MapPin
                strokeWidth={1}
                className={isActive ? "text-black" : "text-gray-400"}
              />
            )}
          </NavLink>

          <NavLink to="/map">
            {({ isActive }) => (
              <CalendarCheck
                strokeWidth={1}
                className={isActive ? "text-black" : "text-gray-400"}
              />
            )}
          </NavLink>

          <NavLink to="/user">
            {({ isActive }) => (
              <User
                strokeWidth={1}
                className={isActive ? "text-black" : "text-gray-400"}
              />
            )}
          </NavLink>


        </div>
      </div>
    </>
  )
}

export default Navbar











