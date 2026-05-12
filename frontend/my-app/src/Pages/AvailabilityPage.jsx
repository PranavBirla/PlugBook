import { useState, useEffect } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


export default function AvailabilityPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(() => {
        const saved = sessionStorage.getItem("availabilityForm");

        return saved
            ? JSON.parse(saved)
            : {
                fromDate: "",
                toDate: "",
                fromTime: "",
                toTime: ""
            };
    });

    const [location, setLocation] = useState({
        lat: null,
        lng: null
    });

    const [stations, setStations] = useState(() => {
        const savedStations = sessionStorage.getItem("stations");

        return savedStations
            ? JSON.parse(savedStations)
            : [];
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
            },
            (err) => {
                console.error("Location error:", err);
            }
        );
    }, []);

    useEffect(() => {
        sessionStorage.setItem(
            "availabilityForm",
            JSON.stringify(formData)
        );
    }, [formData]);

    useEffect(() => {
        sessionStorage.setItem(
            "stations",
            JSON.stringify(stations)
        );
    }, [stations]);

    const fetchStations = async () => {

        try {

            const startDateTime = new Date(`${formData.fromDate}T${formData.fromTime}:00`);
            const endDateTime = new Date(`${formData.toDate}T${formData.toTime}:00`);

            const lat = location.lat;
            const lng = location.lng;

            if (!location.lat || !location.lng) {
                alert("Getting your location... please wait");
                return;
            }

            const res = await API.get(
                "/api/station/nearby-stations",
                {
                    params: {
                        lat,
                        lng,
                        startTime: startDateTime.toISOString(),
                        endTime: endDateTime.toISOString()
                    }
                }
            );

            const sorted = res.data.sort((a, b) => {
                const aSlots = a.chargers.AC.available + a.chargers.DC.available;
                const bSlots = b.chargers.AC.available + b.chargers.DC.available;
                return bSlots - aSlots;
            });

            setStations(sorted);

        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    return (

        <div className="relative min-h-screen overflow-hidden">

            {/* ================= BACKGROUND ================= */}

            <div className="fixed inset-0 -z-10">

                {/* GRADIENT TOP */}
                <div
                    className="
                        h-screen
                        bg-cover
                        bg-center
                        bg-no-repeat
                        opacity-90
                    "

                    style={{
                        backgroundImage:
                            "url('/background1.jpg')"
                    }}
                />

                {/* LIGHT LOWER SECTION */}
                <div className="h-[55vh] bg-zinc-100" />

            </div>

            {/* EXTRA GLOW */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[#895CE7]/10 blur-[140px] -z-10" />

            {/* ================= PAGE ================= */}

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14">

                {/* ================= HEADING ================= */}

                <div className="mb-10">

                    <h1 className="
                        text-4xl
                        md:text-6xl
                        font-black
                        tracking-tight
                        text-zinc-900
                    ">
                        Find Available
                    </h1>

                    <h1 className="
                        text-4xl
                        md:text-6xl
                        font-black
                        tracking-tight
                        text-[#895CE7]
                    ">
                        EV Stations
                    </h1>

                    <p className="
                        mt-4
                        text-zinc-600
                        max-w-xl
                        text-sm
                        md:text-base
                    ">
                        Discover nearby charging stations with real-time slot availability and seamless booking.
                    </p>

                </div>

                {/* ================= FILTER CARD ================= */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border border-white/40
                        bg-white/[0.05]
                        backdrop-blur-2xl
                        shadow-[0_10px_50px_rgba(0,0,0,0.08)]
                        p-5 md:p-8
                    "
                >

                    {/* glow */}
                    <div className="
                        absolute
                        top-0
                        right-0
                        w-52
                        h-52
                        bg-[#895CE7]/10
                        blur-[100px]
                    " />

                    <div className="relative z-10">

                        {/* FROM */}

                        <div className="mb-6">

                            <h3 className="
                                text-sm
                                font-semibold
                                text-zinc-500
                                uppercase
                                tracking-widest
                                mb-3
                            ">
                                From
                            </h3>

                            <div className="flex flex-col md:flex-row gap-4">

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

                        </div>

                        {/* TO */}

                        <div>

                            <h3 className="
                                text-sm
                                font-semibold
                                text-zinc-500
                                uppercase
                                tracking-widest
                                mb-3
                            ">
                                To
                            </h3>

                            <div className="flex flex-col md:flex-row gap-4">

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

                        {/* BUTTON */}

                        <button
                            onClick={fetchStations}
                            className="
                                group
                                mt-8
                                w-full md:w-fit
                                px-8
                                py-4
                                rounded-2xl
                                bg-white
                                text-black
                                
                                font-semibold
                                shadow-[0_10px_30px_rgba(137,92,231,0.35)]
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:shadow-[0_20px_50px_rgba(137,92,231,0.45)]
                            "
                        >

                            <span className="flex items-center justify-center gap-2">
                                Find Stations
                                <span className="group-hover:translate-x-1 transition-all">
                                    →
                                </span>
                            </span>

                        </button>

                    </div>

                </div>

                {/* ================= RESULTS ================= */}

                <div className="mt-10">

                    {stations.length > 0 && (

                        <div className="mb-6">

                            <h2 className="
                                text-2xl
                                md:text-3xl
                                font-bold
                                text-zinc-900
                            ">
                                Nearby Stations
                            </h2>

                            <p className="text-zinc-500 mt-1">
                                Sorted by highest availability
                            </p>

                        </div>

                    )}

                    {/* ================= CARD GRID ================= */}

                    <div className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-6
                    ">

                        {stations.map((station) => {

                            const totalAvailable =
                                station.chargers.AC.available +
                                station.chargers.DC.available;

                            return (

                                <div
                                    key={station._id}
                                    className="
                                        station-card
                                        relative
                                        overflow-hidden
                                        rounded-[30px]
                                        min-h-[280px]
                                        p-6
                                        flex
                                        flex-col
                                        justify-between
                                        group
                                    "
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1593941707882-a5bac6861d75?q=80&w=2070&auto=format&fit=crop')"
                                    }}
                                >

                                    {/* OVERLAY */}
                                    <div className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/85
                                        via-black/55
                                        to-black/20
                                    " />

                                    {/* PURPLE GLOW */}
                                    <div className="
                                        absolute
                                        -bottom-10
                                        -right-10
                                        w-52
                                        h-52
                                        bg-[#895CE7]/20
                                        blur-[80px]
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-all
                                        duration-500
                                    " />

                                    {/* CONTENT */}
                                    <div className="relative z-10">

                                        {/* TOP */}
                                        <div className="flex items-start justify-between gap-4">

                                            <div>

                                                <h2 className="
                                                    text-2xl
                                                    md:text-3xl
                                                    font-bold
                                                    text-white
                                                    leading-tight
                                                ">
                                                    {station.stationName}
                                                </h2>

                                                <p className="
                                                    mt-2
                                                    text-zinc-300
                                                    text-sm
                                                ">
                                                    {station.distance.toFixed(2)} km away
                                                </p>

                                            </div>

                                            {/* AVAILABILITY BADGE */}

                                            <div className="
                                                bg-white/10
                                                border border-white/10
                                                backdrop-blur-xl
                                                px-4
                                                py-2
                                                rounded-full
                                                text-white
                                                text-sm
                                                font-semibold
                                                whitespace-nowrap
                                            ">
                                                {totalAvailable} Slots
                                            </div>

                                        </div>

                                        {/* SLOT SECTION */}

                                        <div className="
                                            flex
                                            gap-4
                                            mt-8
                                        ">

                                            {/* AC */}

                                            <div className="
                                                flex-1
                                                bg-white/10
                                                border border-white/10
                                                backdrop-blur-xl
                                                rounded-3xl
                                                p-5
                                            ">

                                                <p className="
                                                    text-zinc-300
                                                    text-xs
                                                    uppercase
                                                    tracking-widest
                                                ">
                                                    AC Slots
                                                </p>

                                                <h1 className="
                                                    text-4xl
                                                    font-black
                                                    text-green-400
                                                    mt-2
                                                ">
                                                    {station.chargers.AC.available}
                                                </h1>

                                                <p className="
                                                    text-zinc-400
                                                    text-sm
                                                    mt-1
                                                ">
                                                    out of {station.chargers.AC.total}
                                                </p>

                                            </div>

                                            {/* DC */}

                                            <div className="
                                                flex-1
                                                bg-white/10
                                                border border-white/10
                                                backdrop-blur-xl
                                                rounded-3xl
                                                p-5
                                            ">

                                                <p className="
                                                    text-zinc-300
                                                    text-xs
                                                    uppercase
                                                    tracking-widest
                                                ">
                                                    DC Slots
                                                </p>

                                                <h1 className="
                                                    text-4xl
                                                    font-black
                                                    text-[#c7a7ff]
                                                    mt-2
                                                ">
                                                    {station.chargers.DC.available}
                                                </h1>

                                                <p className="
                                                    text-zinc-400
                                                    text-sm
                                                    mt-1
                                                ">
                                                    out of {station.chargers.DC.total}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* BUTTON */}

                                    <div className="relative z-10 mt-8">

                                        <button
                                            onClick={() =>
                                                navigate("/slots", { state: { station } })
                                            }
                                            className="
                                                book-btn
                                                w-full
                                                md:w-fit
                                                px-6
                                                py-3
                                                rounded-2xl
                                                bg-white
                                                text-black
                                                font-semibold
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            Book Slot →
                                        </button>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

            {/* ================= CUSTOM CSS ================= */}

            <style jsx>{`

                .premium-input {
                    background: rgba(255,255,255,0.7);
                    border: 1px solid rgba(255,255,255,0.5);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 16px 18px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #18181b;
                    outline: none;
                    transition: all 0.3s ease;
                    box-shadow:
                        0 4px 20px rgba(0,0,0,0.04);
                }

                .premium-input:focus {
                    transform: translateY(-1px);
                    border-color: #895CE7;
                    box-shadow:
                        0 0 0 4px rgba(137,92,231,0.15),
                        0 10px 30px rgba(137,92,231,0.12);
                    background: rgba(255,255,255,0.9);
                }

                .station-card {
                    background-size: cover;
                    background-position: center;
                    transition:
                        transform 0.4s ease,
                        box-shadow 0.4s ease;
                    box-shadow:
                        0 10px 40px rgba(0,0,0,0.12);
                }

                .station-card:hover {
                    transform:
                        translateY(-4px)
                        scale(1.01);

                    box-shadow:
                        0 20px 60px rgba(137,92,231,0.25);
                }

                .book-btn:hover {
                    background: #895CE7;
                    color: white;
                    transform: scale(1.02);
                    box-shadow:
                        0 10px 30px rgba(137,92,231,0.35);
                }

                input[type="date"]::-webkit-calendar-picker-indicator,
                input[type="time"]::-webkit-calendar-picker-indicator {
                    opacity: 0.7;
                    cursor: pointer;
                }

            `}</style>

        </div>

    );
}