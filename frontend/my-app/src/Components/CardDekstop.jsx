import React from 'react'

const CardDekstop = () => {
  return (
    <div className="h-[350px] mx-4 mt-2 sm:mx-10 md:mx-12 lg:mx-14">

      <div className="shadow-sm hover:shadow-[0_10px_35px_rgba(137,92,231,0.18)] bg-zinc-200 border border-gray-200 h-full w-full flex gap-1.5 overflow-hidden rounded-2xl">

        {/* IMAGE 1 */}
        <div className="w-1/2 lg:w-1/3 relative ">
          <img
            className="h-full w-full object-cover"
            src="/img2.png"
            alt=""
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* text */}
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-[10px] tracking-widest uppercase opacity-80">
              Eco Friendly
            </p>
            <h2 className="text-lg font-semibold leading-tight">
              Drive Clean Energy
            </h2>
            <p className="text-xs opacity-80">
              Sustainable Future
            </p>
          </div>
        </div>

        {/* IMAGE 2 */}
        <div className="w-1/2 lg:w-1/3 relative">
          <img
            className="h-full w-full object-cover"
            src="/img1.png"
            alt=""
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>


          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-[10px] tracking-widest uppercase opacity-80">
              Find Chargers
            </p>
            <h2 className="text-lg font-semibold leading-tight">
              Nearby Instantly
            </h2>
            <p className="text-xs opacity-80">
              Real-Time Locations
            </p>
          </div>
        </div>


        <div className="hidden lg:block lg:w-1/3 relative">
          <img
            className="h-full w-full object-cover"
            src="/img-car-home.png"
            alt=""
          />

         
          <div className="absolute inset-0  bg-gradient-to-t from-black/50 to-transparent "></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>


          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-[10px] tracking-widest uppercase opacity-80">
              Fast Charging
            </p>
            <h2 className="text-lg font-semibold leading-tight">
              Book Your Slot
            </h2>
            <p className="text-xs opacity-80">
              No Waiting Time
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardDekstop