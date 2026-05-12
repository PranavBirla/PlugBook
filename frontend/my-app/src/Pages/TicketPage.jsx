import React from "react";

import Ticket from "../Components/Ticket";
import Navbar from "../Components/Navbar";
import Top from "../Components/Top";

import API from "../api/axios";

import { useLocation } from "react-router-dom";

import {
    TriangleAlert,
    LoaderCircle,
    X,
} from "lucide-react";

const TicketPage = () => {

    const location = useLocation();

    const bookingFromCreate =
        location.state?.bookingData?.booking;

    const bookingFromCard =
        location.state?.booking;

    const booking =
        bookingFromCreate || bookingFromCard;

        const isExpired =
        ["expired", "completed", "cancelled"]
            .includes(
                booking?.status?.toLowerCase()
            );

    const [showPopup, setShowPopup] =
        React.useState(false);

    const [loading, setLoading] =
        React.useState(false);

    const [message, setMessage] =
        React.useState("");

    const [messageType, setMessageType] =
        React.useState("");

    const handleCancel = async () => {

        try {

            setLoading(true);

            setMessage("");

            await API.patch(
                `/api/bookings/cancel-booking/${booking._id}`,
                {},
                {
                    withCredentials: true
                }
            );

            setMessageType("success");

            setMessage(
                "Booking cancelled successfully."
            );

            setShowPopup(false);

        } catch (err) {

            setMessageType("error");

            setMessage(
                err.response?.data?.message ||
                "Failed to cancel booking."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-black">

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

            <div className="absolute top-0 left-0 w-full h-[350px] bg-[#895CE7]/10 blur-[120px] z-0" />

            {/* NAVTOP */}

            <div className="relative z-[100] md:block">

                <Top />

            </div>

            {/* CONTENT */}

            <div className="relative z-10 px-4 md:px-8 py-6 md:py-10">

                {/* HEADER */}

                <div className="text-center mb-10">

                    <p className="text-zinc-400 text-sm">

                        PlugBook Reservation

                    </p>

                    <h1 className="mt-3 text-4xl md:text-6xl leading-[0.95] font-black tracking-tight text-white">

                        Your Ticket

                    </h1>

                </div>

                {/* TICKET */}

                <div className="flex justify-center">

                    <Ticket booking={booking} />

                </div>

                {/* CANCEL BUTTON */}

                {
                    !isExpired ? (

                        <div className="mt-8 flex justify-center">

                            <button
                                onClick={() => setShowPopup(true)}
                                className="group relative overflow-hidden px-7 py-4 rounded-[22px] border border-red-500/20 bg-red-500/10 backdrop-blur-2xl text-red-300 font-semibold transition-all duration-300 hover:bg-red-500/15 hover:scale-[1.02] active:scale-[0.98]"
                            >

                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

                                <span className="relative z-10 flex items-center gap-3">

                                    <TriangleAlert size={18} />

                                    Cancel Booking

                                </span>

                            </button>

                        </div>

                    ) : (

                        <div className="mt-8 flex justify-center">

                            <div className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-400 text-sm backdrop-blur-xl">

                                Booking Expired

                            </div>

                        </div>

                    )
                }

                {/* MESSAGE */}

                {
                    message && (

                        <div className="mt-6 flex justify-center">

                            <div className={`
                                max-w-[500px] w-full rounded-[24px] px-5 py-4 border backdrop-blur-2xl text-sm md:text-[15px]

                                ${messageType === "success"
                                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                                    : "bg-red-500/10 border-red-500/20 text-red-300"
                                }
                            `}>

                                {message}

                            </div>

                        </div>

                    )
                }

            </div>

            {/* POPUP */}

            {
                showPopup && (

                    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">

                        <div className="relative w-full max-w-[430px] rounded-[34px] border border-white/10 bg-zinc-950/90 backdrop-blur-3xl p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                            {/* CLOSE */}

                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                            >

                                <X size={18} />

                            </button>

                            {/* ICON */}

                            <div className="w-16 h-16 rounded-2xl border border-red-500/20 bg-red-500/10 flex items-center justify-center">

                                <TriangleAlert
                                    size={28}
                                    className="text-red-300"
                                />

                            </div>

                            {/* TEXT */}

                            <h2 className="mt-7 text-3xl leading-[1] font-black tracking-tight text-white">

                                Cancel
                                <br />

                                Booking?

                            </h2>

                            <p className="mt-5 text-zinc-400 leading-relaxed">

                                Do you really want to
                                cancel this reservation?
                                This action cannot
                                be undone.

                            </p>

                            {/* BUTTONS */}

                            <div className="mt-8 flex gap-4">

                                {/* NO */}

                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="flex-1 h-[58px] rounded-[20px] border border-white/10 bg-white/[0.05] text-white font-medium hover:bg-white/[0.08] transition-all duration-300"
                                >

                                    No

                                </button>

                                {/* YES */}

                                <button
                                    onClick={handleCancel}
                                    disabled={loading}
                                    className={`
                                        flex-1 h-[58px] rounded-[20px] font-semibold transition-all duration-300 flex items-center justify-center gap-3

                                        ${loading
                                            ? "bg-zinc-700 text-zinc-300 cursor-not-allowed"
                                            : "bg-red-500 text-white hover:bg-red-400"
                                        }
                                    `}
                                >

                                    {
                                        loading
                                            ? (
                                                <>
                                                    <LoaderCircle
                                                        size={18}
                                                        className="animate-spin"
                                                    />

                                                    Cancelling...
                                                </>
                                            )
                                            : (
                                                "Yes, Cancel"
                                            )
                                    }

                                </button>

                            </div>

                        </div>

                    </div>

                )
            }

            {/* MOBILE NAVBAR */}

            <div className="fixed bottom-0 left-0 w-full z-[1200] md:hidden">

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
