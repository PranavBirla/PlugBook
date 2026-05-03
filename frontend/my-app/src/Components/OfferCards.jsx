import React from 'react'

const OfferCards = () => {
    return (
        <div className='bg-gray-100 border-gray-300 border-[1px] mt-4 h-53 w-full p-4 flex rounded-4xl relative overflow-hidden'>
            <div className='absolute mx-4'>
                <h1 className='text-xl'>
                    Get  <span className='text-2xl font-medium'>20%</span> <br /> Metro Discount
                </h1>
                <p className='text-gray-500'>enjoy this offer for your first <br /> five trips.</p>
                <div className='bg-gray-200 w-fit p-2 rounded-4xl mt-2 text-gray-800'>METRO20</div>
            </div>
            

                <img className='h-full  object-contain' src="\src\assets\img1.png" alt="" />
            



        </div>
    )
}

export default OfferCards
