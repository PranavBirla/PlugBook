import React from 'react'

import { Link } from 'react-router-dom'





const Icon = (prop) => {
    return (

        <div className='w-2/9'>

            <Link
                to={prop.link}
                className=' group relative overflow-hidden flex flex-col justify-center items-center rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.04] hover:border-[#895CE7]/30 hover:bg-white/[0.08] '>

                {/* GLOW */}

                <div className=' absolute inset-0 opacity-0 bg-[#895CE7]/10 blur-2xl transition-all duration-500 group-hover:opacity-100 ' />

                {/* CONTENT */}

                <div className=' relative z-10 flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-4 px-3 py-4 md:px-4 md:py-5 '>

                    {/* ICON WRAPPER */}

                    <div className=' shrink-0 w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 rounded-2xl bg-black/20 backdrop-blur-xl flex items-center justify-center text-[#d9c3ff] shadow-[0_5px_20px_rgba(0,0,0,0.18)] '>

                        <div className='lg:hidden scale-90 md:scale-100'>
                            {prop.icon}
                        </div>

                        <div className='hidden lg:block'>
                            {prop.lg}
                        </div>

                    </div>

                    {/* TEXT */}

                    <div className='min-w-0'>

                        <p className=' text-white text-[7px] md:tracking-widest tracking-tight  md:text-[11px] lg:text-[16px] md:font-semibold font-extralight'>

                            {prop.name}

                        </p>

                        <p className=' hidden md:block text-zinc-400 text-[8px] lg:text-[10px] mt-1 '>

                            {prop.def}

                        </p>

                    </div>

                </div>

            </Link>

        </div>

    )
}

export default Icon
