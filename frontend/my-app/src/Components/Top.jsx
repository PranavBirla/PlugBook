import React, { useState, useEffect } from "react";
import { Bell } from 'lucide-react';
import NavTop from './NavTop';
import BackButton from './BackButton';
import { useNavigate } from "react-router-dom";
import API from "../api/axios";



const Top = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchUser = async () => {

      try {

        const response = await API.get(
          "/api/auth/user/me",
          {
            withCredentials: true
          }
        );

        setUser(response.data);

      } catch (err) {

        console.error(err);

      }

    };

    fetchUser();

  }, []);


  const initials = user?.fullName
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("") || "U";

  return (
    <div className='sm:flex-row flex justify-between items-center mb-2 mx-4 md:mx-10 lg:mx-12 px-2 py-2 lg:p-4'>
      <div className='flex justify-center items-center md:hidden'><BackButton /></div>
      <div className='m-4'>
        <img src="/plugbook.png" alt="PlugBook" className=' md:h-10 h-6 ' />
      </div>
      <div className='hidden md:flex justify-center items-center'>
        <NavTop />
      </div>

      <div onClick={() => navigate("/user")} className="  flex justify-center items-center">



        <div className="  w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

          <h1 className="text-xl md:text-2xl font-black text-white flex justify-center">
            {initials}
          </h1>

        </div>


      </div>


    </div>
  )
}

export default Top
