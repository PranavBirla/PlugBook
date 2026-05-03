import React from 'react'

import { Link } from 'react-router-dom'





const Icon = (prop) => {
    return (
        <div className='w-2/9 '>
            <Link to={prop.link} className='flex flex-col gap-1 justify-center items-center  px-2 py-3 border-[1px] border-zinc-200 rounded-2xl shadow-sm'>
                <div className='flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-4 md:py-4'>
                    <div className='lg:hidden' >
                        {prop.icon}
                    </div>
                    <div className='hidden lg:block'>
                        {prop.lg}
                    </div>
                    <div className=''>
                        <p className='text-[9px] font-medium md:text-[11px] md:font-medium lg:text-[17px] lg:font-medium'>{prop.name} </p>
                        <p className='hidden md:block md:text-[8px] font-normal lg:text-[10px]'>{prop.def}</p>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default Icon
