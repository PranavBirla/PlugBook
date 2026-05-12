import React, { useState, useEffect } from "react";
import Navbar from '../Components/Navbar';

import {
    CalendarCheck,
    Plug,
    Zap,
    MapPin,
    Clock3,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import API from "../api/axios";
import Top from "../Components/Top";

const SlotsBooking = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const station = location.state?.station;
    const stationIdFromState = station?._id;

    useEffect(() => {

        if (!station) {
            navigate("/map");
        }

    }, [station, navigate]);

    const [formData, setFormData] = useState({
        stationId: stationIdFromState || "",
        chargerType: "",
        fromDate: "",
        toDate: "",
        fromTime: "",
        toTime: ""
    });

    const [availability, setAvailability] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    // INPUT CHANGE

    const handleChange = (e) => {

        const { name, value } = e.target;

        setError("");

        setFormData({
            ...formData,
            [name]: value
        });

    };

    // CHARGER TYPE

    const handleType = (type) => {

        setError("");

        setFormData({
            ...formData,
            chargerType: type
        });

    };

    // AVAILABILITY

    const fetchAvailability = async () => {

        try {

            const startDateTime = new Date(
                `${formData.fromDate}T${formData.fromTime}:00`
            );

            const endDateTime = new Date(
                `${formData.toDate}T${formData.toTime}:00`
            );

            const res = await API.get(
                "/api/station/nearby-stations",
                {
                    params: {
                        lat: station.location.lat,
                        lng: station.location.lng,
                        startTime: startDateTime.toISOString(),
                        endTime: endDateTime.toISOString()
                    }
                }
            );

            const updatedStation = res.data.find(
                (s) => s._id === station._id
            );

            setAvailability(updatedStation?.chargers);

        } catch (err) {

            console.error(err);

        }

    };

    useEffect(() => {

        if (
            formData.fromDate &&
            formData.fromTime &&
            formData.toDate &&
            formData.toTime
        ) {
            fetchAvailability();
        }

    }, [
        formData.fromDate,
        formData.fromTime,
        formData.toDate,
        formData.toTime
    ]);

    // SUBMIT

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (
            !formData.chargerType ||
            !formData.fromDate ||
            !formData.toDate ||
            !formData.fromTime ||
            !formData.toTime
        ) {

            setError("Please fill all booking details");

            return;

        }

        try {

            setLoading(true);

            const startDateTime = new Date(
                `${formData.fromDate}T${formData.fromTime}:00`
            );

            const endDateTime = new Date(
                `${formData.toDate}T${formData.toTime}:00`
            );

            const res = await API.post(
                "/api/bookings/create",
                {
                    stationId: formData.stationId,
                    chargerType: formData.chargerType,
                    startTime: startDateTime.toISOString(),
                    endTime: endDateTime.toISOString()
                },
                {
                    withCredentials: true
                }
            );

            setSuccess("Booking successful");

            setTimeout(() => {

                navigate("/tickets", {
                    state: {
                        bookingData: res.data
                    }
                });

            }, 1200);

        } catch (err) {

            console.error(err);

            const backendMessage =
                err?.response?.data?.message;

            setError(
                backendMessage ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }

    };

    const totalAvailable =
        (availability
            ? availability.AC.available + availability.DC.available
            : station?.chargers.AC.available + station?.chargers.DC.available
        );

    return (

        <div className="relative min-h-screen overflow-hidden bg-black">

            {/* BACKGROUND */}

            <div className="fixed inset-0 z-0">

                <img
                    src="/background2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

            </div>

            {/* TOP GLOW */}

            <div className="
                absolute top-0 left-0 w-full h-[350px]
                bg-[#895CE7]/10 blur-[120px]
                z-0
            " />

            {/* CONTENT */}
            <div>
                <Top/>
            </div>

            <div className="
                relative z-10
                px-4 md:px-8 lg:px-12
                py-6 md:py-10
            ">

                <div className="
                    max-w-[1600px]
                    mx-auto
                    flex flex-col lg:flex-row
                    gap-6 lg:gap-8
                ">

                    {/* LEFT PANEL */}

                    <div className="
                        lg:w-[42%]
                        md:sticky lg:top-8
                        lg:h-[calc(100vh-64px)]
                    ">

                        <div className="
                            relative overflow-hidden
                            h-full rounded-[34px]
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-3xl
                            shadow-[0_10px_50px_rgba(0,0,0,0.25)]
                        ">

                            {/* BG */}

                            <div className="absolute inset-0">

                                <img
                                    src="/charging-station.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/65" />

                                <div className="absolute inset-0 bg-[#895CE7]/10" />

                            </div>

                            {/* CONTENT */}

                            <div className="
                                relative z-10
                                h-full
                                flex flex-col justify-between
                                p-5 md:p-7
                            ">

                                {/* TOP */}

                                <div>

                                    <div className="
                                        w-fit px-4 py-2
                                        rounded-full
                                        border border-white/10
                                        bg-white/10
                                        backdrop-blur-xl
                                        text-[#eadfff]
                                        text-xs font-medium
                                    ">

                                        EV Reservation

                                    </div>

                                    <h1 className="
                                        mt-6
                                        text-3xl md:text-5xl
                                        leading-[0.95]
                                        font-black
                                        tracking-tight
                                        text-white
                                    ">

                                        {station?.stationName}

                                    </h1>

                                    <div className="
                                        mt-5
                                        flex items-center gap-2
                                        text-zinc-300
                                        text-sm
                                    ">

                                        <MapPin size={16} />

                                        {station?.distance < 1
                                            ? `${(station.distance * 1000).toFixed(0)}m away`
                                            : `${station.distance.toFixed(1)}km away`
                                        }

                                    </div>

                                </div>

                                {/* SLOT CARDS */}

                                <div className="
                                    grid grid-cols-3 gap-3
                                    mt-10
                                ">

                                    {/* TOTAL */}

                                    <div className="
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/10
                                        backdrop-blur-2xl
                                        p-4
                                    ">

                                        <p className="text-zinc-300 text-[11px]">
                                            Available
                                        </p>

                                        <h2 className="
                                            mt-1
                                            text-2xl md:text-3xl
                                            font-black text-white
                                        ">

                                            {totalAvailable}

                                        </h2>

                                    </div>

                                    {/* AC */}

                                    <div className="
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/10
                                        backdrop-blur-2xl
                                        p-4
                                    ">

                                        <p className="text-zinc-300 text-[11px]">
                                            AC Slots
                                        </p>

                                        <h2 className="
                                            mt-1
                                            text-2xl md:text-3xl
                                            font-black text-white
                                        ">

                                            {availability
                                                ? availability.AC.available
                                                : station?.chargers.AC.available
                                            }

                                        </h2>

                                    </div>

                                    {/* DC */}

                                    <div className="
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/10
                                        backdrop-blur-2xl
                                        p-4
                                    ">

                                        <p className="text-zinc-300 text-[11px]">
                                            DC Slots
                                        </p>

                                        <h2 className="
                                            mt-1
                                            text-2xl md:text-3xl
                                            font-black text-white
                                        ">

                                            {availability
                                                ? availability.DC.available
                                                : station?.chargers.DC.available
                                            }

                                        </h2>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT PANEL */}

                    <div className="lg:w-[58%]">

                        <form
                            onSubmit={handleSubmit}
                            className="
                                relative overflow-hidden
                                rounded-[34px]
                                border border-white/10
                                bg-white/[0.05]
                                backdrop-blur-3xl
                                shadow-[0_10px_50px_rgba(0,0,0,0.25)]
                                p-5 md:p-8 lg:p-10
                            "
                        >

                            {/* GLOW */}

                            <div className="
                                absolute top-0 right-0
                                w-[300px] h-[300px]
                                bg-[#895CE7]/10 blur-[120px]
                            " />

                            {/* HEADER */}

                            <div className="relative z-10">

                                <p className="text-zinc-400 text-sm">
                                    Smart Reservation
                                </p>

                                <h1 className="
                                    mt-2
                                    text-4xl md:text-6xl
                                    leading-[0.95]
                                    font-black
                                    tracking-tight
                                    text-white
                                ">

                                    Reserve <br />

                                    Your Slot

                                </h1>

                            </div>

                            {/* BOOKING TIME */}

                            <div className="relative z-10 mt-10">

                                <div className="
                                    flex items-center gap-3
                                    mb-5
                                ">

                                    <Clock3
                                        size={20}
                                        className="text-[#d9c3ff]"
                                    />

                                    <h2 className="
                                        text-lg font-semibold
                                        text-white
                                    ">

                                        Select Reservation Time

                                    </h2>

                                </div>

                                {/* FROM */}

                                <div className="
                                    rounded-[28px]
                                    border border-white/10
                                    bg-black/20
                                    backdrop-blur-2xl
                                    p-4 md:p-5
                                ">

                                    <p className="
                                        text-zinc-400
                                        text-sm mb-4
                                    ">

                                        From

                                    </p>

                                    <div className="
                                        flex flex-col sm:flex-row
                                        gap-3
                                    ">

                                        <input
                                            type="date"
                                            name="fromDate"
                                            onChange={handleChange}
                                            className="
                                                w-full
                                                rounded-2xl
                                                border border-white/10
                                                bg-white/[0.06]
                                                px-4 py-4
                                                text-white
                                                outline-none
                                                focus:border-[#895CE7]/40
                                                focus:bg-white/[0.08]
                                                transition-all
                                            "
                                        />

                                        <input
                                            type="time"
                                            name="fromTime"
                                            onChange={handleChange}
                                            className="
                                                w-full
                                                rounded-2xl
                                                border border-white/10
                                                bg-white/[0.06]
                                                px-4 py-4
                                                text-white
                                                outline-none
                                                focus:border-[#895CE7]/40
                                                focus:bg-white/[0.08]
                                                transition-all
                                            "
                                        />

                                    </div>

                                    {/* TO */}

                                    <p className="
                                        text-zinc-400
                                        text-sm mt-6 mb-4
                                    ">

                                        To

                                    </p>

                                    <div className="
                                        flex flex-col sm:flex-row
                                        gap-3
                                    ">

                                        <input
                                            type="date"
                                            name="toDate"
                                            onChange={handleChange}
                                            className="
                                                w-full
                                                rounded-2xl
                                                border border-white/10
                                                bg-white/[0.06]
                                                px-4 py-4
                                                text-white
                                                outline-none
                                                focus:border-[#895CE7]/40
                                                focus:bg-white/[0.08]
                                                transition-all
                                            "
                                        />

                                        <input
                                            type="time"
                                            name="toTime"
                                            onChange={handleChange}
                                            className="
                                                w-full
                                                rounded-2xl
                                                border border-white/10
                                                bg-white/[0.06]
                                                px-4 py-4
                                                text-white
                                                outline-none
                                                focus:border-[#895CE7]/40
                                                focus:bg-white/[0.08]
                                                transition-all
                                            "
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* CHARGER TYPE */}

                            <div className="relative z-10 mt-10">

                                <h2 className="
                                    text-lg font-semibold
                                    text-white mb-5
                                ">

                                    Choose Charger Type

                                </h2>

                                <div className="
                                    grid grid-cols-1 sm:grid-cols-2
                                    gap-4
                                ">

                                    {/* AC */}

                                    <button
                                        type="button"
                                        onClick={() => handleType("AC")}
                                        className={`
                                            group relative overflow-hidden
                                            rounded-[28px]
                                            border
                                            backdrop-blur-2xl
                                            p-5
                                            transition-all duration-300

                                            ${formData.chargerType === "AC"
                                                ? "border-[#895CE7]/40 bg-[#895CE7]/15 scale-[1.02]"
                                                : "border-white/10 bg-white/[0.05] hover:bg-white/[0.08]"
                                            }
                                        `}
                                    >

                                        <div className="
                                            flex items-center justify-between
                                        ">

                                            <div className="text-left">

                                                <p className="
                                                    text-zinc-400 text-sm
                                                ">
                                                    Charger Type
                                                </p>

                                                <h2 className="
                                                    mt-2
                                                    text-3xl font-black
                                                    text-white
                                                ">
                                                    AC
                                                </h2>

                                                <p className="
                                                    mt-3
                                                    text-sm text-[#d9c3ff]
                                                ">

                                                    {availability
                                                        ? availability.AC.available
                                                        : station?.chargers.AC.available
                                                    } Available

                                                </p>

                                            </div>

                                            <div className="
                                                w-14 h-14
                                                rounded-2xl
                                                border border-white/10
                                                bg-white/10
                                                flex items-center justify-center
                                                text-white
                                            ">

                                                <Plug size={24} />

                                            </div>

                                        </div>

                                    </button>

                                    {/* DC */}

                                    <button
                                        type="button"
                                        onClick={() => handleType("DC")}
                                        className={`
                                            group relative overflow-hidden
                                            rounded-[28px]
                                            border
                                            backdrop-blur-2xl
                                            p-5
                                            transition-all duration-300

                                            ${formData.chargerType === "DC"
                                                ? "border-[#895CE7]/40 bg-[#895CE7]/15 scale-[1.02]"
                                                : "border-white/10 bg-white/[0.05] hover:bg-white/[0.08]"
                                            }
                                        `}
                                    >

                                        <div className="
                                            flex items-center justify-between
                                        ">

                                            <div className="text-left">

                                                <p className="
                                                    text-zinc-400 text-sm
                                                ">
                                                    Charger Type
                                                </p>

                                                <h2 className="
                                                    mt-2
                                                    text-3xl font-black
                                                    text-white
                                                ">
                                                    DC
                                                </h2>

                                                <p className="
                                                    mt-3
                                                    text-sm text-[#d9c3ff]
                                                ">

                                                    {availability
                                                        ? availability.DC.available
                                                        : station?.chargers.DC.available
                                                    } Available

                                                </p>

                                            </div>

                                            <div className="
                                                w-14 h-14
                                                rounded-2xl
                                                border border-white/10
                                                bg-white/10
                                                flex items-center justify-center
                                                text-white
                                            ">

                                                <Zap size={24} />

                                            </div>

                                        </div>

                                    </button>

                                </div>

                            </div>

                            {/* ERROR */}

                            {error && (

                                <div className="
                                    relative z-10
                                    mt-6
                                    rounded-2xl
                                    border border-red-400/20
                                    bg-red-400/10
                                    backdrop-blur-xl
                                    px-4 py-4
                                    flex items-start gap-3
                                ">

                                    <AlertCircle
                                        size={18}
                                        className="text-red-300 mt-0.5"
                                    />

                                    <p className="
                                        text-red-200 text-sm
                                    ">

                                        {error}

                                    </p>

                                </div>

                            )}

                            {/* SUCCESS */}

                            {success && (

                                <div className="
                                    relative z-10
                                    mt-6
                                    rounded-2xl
                                    border border-green-400/20
                                    bg-green-400/10
                                    backdrop-blur-xl
                                    px-4 py-4
                                    flex items-start gap-3
                                ">

                                    <CheckCircle2
                                        size={18}
                                        className="text-green-300 mt-0.5"
                                    />

                                    <p className="
                                        text-green-200 text-sm
                                    ">

                                        {success}

                                    </p>

                                </div>

                            )}

                            {/* SUMMARY */}

                            <div className="
                                relative z-10
                                mt-10
                                rounded-[28px]
                                border border-white/10
                                bg-black/20
                                backdrop-blur-2xl
                                p-5
                            ">

                                <p className="
                                    text-zinc-400 text-sm
                                ">

                                    Booking Summary

                                </p>

                                <div className="
                                    mt-5
                                    flex flex-col gap-4
                                ">

                                    <div className="
                                        flex items-center justify-between
                                        text-sm
                                    ">

                                        <p className="text-zinc-400">
                                            Station
                                        </p>

                                        <p className="text-white font-medium">
                                            {station?.stationName}
                                        </p>

                                    </div>

                                    <div className="
                                        flex items-center justify-between
                                        text-sm
                                    ">

                                        <p className="text-zinc-400">
                                            Charger
                                        </p>

                                        <p className="text-white font-medium">
                                            {formData.chargerType || "Not Selected"}
                                        </p>

                                    </div>

                                    <div className="
                                        flex items-center justify-between
                                        text-sm
                                    ">

                                        <p className="text-zinc-400">
                                            Reservation
                                        </p>

                                        <p className="
                                            text-white font-medium text-right
                                        ">

                                            {formData.fromDate && formData.fromTime
                                                ? `${formData.fromDate} ${formData.fromTime}`
                                                : "Select Time"
                                            }

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`
                                    relative z-10
                                    mt-10
                                    w-full
                                    rounded-[28px]
                                    py-5
                                    text-lg font-semibold
                                    transition-all duration-300

                                    ${loading
                                        ? "bg-white/10 text-zinc-400 cursor-not-allowed"
                                        : "bg-white text-black hover:scale-[1.01]"
                                    }
                                `}
                            >

                                {loading
                                    ? "Booking..."
                                    : "Reserve Slot"
                                }

                            </button>

                        </form>

                    </div>

                </div>

            </div>
            <div>
                <Navbar/>
            </div>

        </div>

    );

};

export default SlotsBooking;