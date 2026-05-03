import React from 'react'
import { Bell } from 'lucide-react';
import CardHome from '../Components/CardHome';
import Navbar from '../Components/Navbar';
import { MoveRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const SlotsBooking = () => {
    return (
        <div>
            <div className='flex justify-between items-center m-4 md:m-12 '>
                <div className='text-xl font-medium'>PlugBook</div>
                <Bell strokeWidth={1} />
            </div>
            <div>
                <CardHome />
            </div>
            <div className='pb-10'>
                <div className=" flex items-center justify-center border-[1px] border-gray-200 rounded-2xl mx-4 md:mx-12 lg:mx-14 mt-10 p-4">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">

                        {/* Select Date */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 mb-2">Select Date</h2>
                            <div className="border rounded-lg px-4 py-3 flex items-center justify-between text-gray-500">
                                <span>May 20, 2025</span>

                            </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 border rounded-lg px-3 py-2 text-gray-500">
                                <p className="text-xs">From</p>
                                <p className="text-sm">09:00 AM </p>
                            </div>

                            <span ><MoveRight /></span>

                            <div className="flex-1 border rounded-lg px-3 py-2 text-gray-500">
                                <p className="text-xs">To</p>
                                <p className="text-sm">11:00 AM </p>
                            </div>
                        </div>


                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-sm font-semibold text-gray-700">Select a Slot</h2>
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="flex items-center gap-1 text-purple-500">
                                        Available
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-400">
                                        Occupied
                                    </span>
                                </div>
                            </div>



                        </div>
                        <div className='flex justify-center'>

                        <button className=' font-light w-30 text-xs flex items-center justify-center gap-2 bg-black text-white py-2 px-3 rounded-3xl'>Add Details <ArrowRight strokeWidth={2} size={20} /> </button>
</div>

                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default SlotsBooking
