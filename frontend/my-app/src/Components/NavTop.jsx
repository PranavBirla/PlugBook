import React from 'react'
import { User } from "lucide-react";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className=" mx-auto w-fit flex items-center md:mx-auto justify-center  bg-transparent">
            <div className=" gap-2 flex items-center justify-center md:gap-4 px-4 md:px-6 py-3 bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm rounded-full ">

               
               

                
                

                    <div className="flex items-center gap-10 text-zinc-700">
                        
                      
                 <Link to='/home'>Home</Link>
                 <Link to='/map'>Map</Link>
                 <Link to='/slots'>Slot-Booking</Link>
                 <Link to='/'>User</Link>
                 

                   
                    </div>
                

                
                
            </div>
        </div>
    )
}

export default Nav
