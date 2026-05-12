import React from "react";

import Ticket from "../Components/Ticket";

import Navbar from "../Components/Navbar";
import Top from "../Components/Top";
import API from "../api/axios";

import { useLocation } from "react-router-dom";

const TicketPage = () => {

    const location = useLocation();

    const bookingFromCreate =
        location.state?.bookingData?.booking;

    const bookingFromCard =
        location.state?.booking;

    const booking =
        bookingFromCreate || bookingFromCard;

        const handleCancel = async () => {

            try {
        
                await API.patch(
                `/api/bookings/cancel/${booking._id}`,
                {},
                {
                    withCredentials: true
                }
            );
        
            alert("Booking cancelled");
        
            } catch (err) {
        
            console.error(err);
        
            }
        
        };

    return (

        <div className="
            relative min-h-screen overflow-hidden
            bg-black
        ">

            {/* BACKGROUND */}

            <div className="fixed inset-0 z-0">

                <img
                    src="/background2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

            </div>

            {/* GLOW */}

            <div className="
                absolute top-0 left-0
                w-full h-[350px]
                bg-[#895CE7]/10 blur-[120px]
                z-0
            " />

            {/* NAVTOP */}

            <div className="
                relative z-[100] md:block
            ">

                <Top />

            </div>

            {/* CONTENT */}

            <div className="
                relative z-10
                px-4 md:px-8
                py-6 md:py-10
            ">

                {/* HEADER */}

                <div className="
                    text-center
                    mb-10
                ">

                    <p className="
                        text-zinc-400
                        text-sm
                    ">

                        PlugBook Reservation

                    </p>

                    <h1 className="
                        mt-3
                        text-4xl md:text-6xl
                        leading-[0.95]
                        font-black
                        tracking-tight
                        text-white
                    ">

                        Your Ticket

                    </h1>

                </div>

                {/* TICKET */}

                <div className="
                    flex justify-center
                ">

                    <Ticket booking={booking} />

                </div>

                <button onClick={handleCancel}>
                    Cancel Booking
                </button>

            </div>

            {/* MOBILE NAVBAR */}

            <div className="
                fixed bottom-0 left-0
                w-full z-[1200]
                md:hidden
            ">

                <Navbar />

            </div>

        </div>

    );

};

export default TicketPage;














// import React from 'react'
// import Ticket from '../Components/Ticket'
// import Navbar from '../Components/Navbar'
// import Top from '../Components/Top'
// import BgIcons from "../Components/BgIcons"


// import { useLocation } from "react-router-dom";


// const TicketPage = () => {

//   const location = useLocation();

//   const bookingFromCreate = location.state?.bookingData?.booking;
//   const bookingFromCard = location.state?.booking;

//   // final booking object
//   const booking = bookingFromCreate || bookingFromCard;
// return (
//   <div className='relative min-h-screen overflow-hidden'>
  
//   <Top />

//   {/* Background image behind lower ticket area */}
  

//   {/* Content */}
//   <div className='relative z-10'>
    
//     <div className='m-4 text-2xl text-zinc-700 font-black '>
//       MY Ticket
//     </div>

//     <div className='flex justify-center mt-8'>
//       <Ticket booking={booking} />
//     </div>

//   </div>

//   <Navbar />
// </div>
// )
// }

// export default TicketPage
