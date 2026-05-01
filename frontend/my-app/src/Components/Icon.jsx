import React from 'react'

import { Link } from 'react-router-dom'





const Icon = (prop) => {
    return (
        <div className='w-2/9'>
            <Link className='flex flex-col gap-1 justify-center items-center  px-2 py-3 border-[1px] border-zinc-200 rounded-2xl'>
                {prop.icon}
                <p className='text-[9px] font-medium'>{prop.name} </p>
            </Link>
        </div>
    )
}

export default Icon
