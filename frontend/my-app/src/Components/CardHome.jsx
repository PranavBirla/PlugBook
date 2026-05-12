import React from 'react'
import { ArrowRight } from 'lucide-react';

const CardHome = () => {
 return (

  <section className="px-4 mt-3 sm:px-10 md:px-12 lg:px-14">

    <div className="relative">

      {/* GLOW */}

      <div className="absolute inset-0 bg-[#595CE7]/40 blur-[100px]" />

      {/* CARD */}

      <div className="
        group relative overflow-hidden
        h-[230px] sm:h-[320px]
        rounded-[32px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.22)]

        transition-all duration-700
      ">

        {/* IMAGE */}

        <img
          src="/bmw-img.jpg"
          alt=""
          className="
            absolute inset-0
            w-full h-full object-cover
            transition-all duration-1000
            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}

        <div className="
          absolute inset-0
          bg-black/30
        " />

        {/* PURPLE TINT */}

        <div className="
          absolute inset-0
          bg-[#895CE7]/10
        " />

        {/* GRADIENT */}

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/10
          to-transparent
        " />

        {/* GLOW */}

        <div className="
          absolute inset-0 opacity-0
          bg-[#895CE7]/10 blur-3xl
          transition-all duration-700
          group-hover:opacity-100
        " />

        {/* CONTENT */}

        <div className="
          absolute bottom-0 left-0
          w-full p-5 sm:p-8
          z-10
        ">

          {/* TAG */}

          <div className="
            w-fit px-4 py-2 mb-4
            rounded-full
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            text-[#eadfff]
            text-[10px] sm:text-xs
            font-medium tracking-[0.18em]
            uppercase
          ">

            Fast Charging

          </div>

          {/* TITLE */}

          <h1 className="
            text-3xl sm:text-5xl
            font-black tracking-tight
            text-white leading-[0.95]
          ">

            Book EV Slots
            <br /> <span className='text-[#d9c3ff]'>
             Seamlessly
             </span>
          </h1>

          {/* DESC */}

          <p className="
            mt-3
            text-zinc-300
            text-sm sm:text-base
            max-w-md
          ">

            Real-time reservations with futuristic charging infrastructure.

          </p>

        </div>

      </div>

    </div>

  </section>

)
}

export default CardHome
