import { useEffect, useState, useRef } from "react";

import {
    MapContainer,
    TileLayer,
    Marker,
} from "react-leaflet";

import { motion } from "framer-motion";

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { CircleArrowLeft } from 'lucide-react';
import {
    
    MapPinned,
    Navigation,
    Zap,
} from "lucide-react";

import { useMap } from "react-leaflet";

import "../utils/fixLeafletIcon";

import { getNearbyStations } from "../services/api";

import Loader from "../Components/Loader";
import PositionNotFound from "../Components/PositionNotFound";
import RoutePath from "../Components/RoutePath";
import StationCard from "../Components/StationCard";

import {
    userIcon,
    stationIcon,
    selectedStationIcon
} from "../utils/mapIcons";
import SmartBackButton from "../Components/BackButton";

export default function MapPage() {

    const [position, setPosition] = useState(null);
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStation, setSelectedStation] = useState(null);

    const [showPanel, setShowPanel] = useState(false);

    const [mobileExpanded, setMobileExpanded] = useState(false);

    const selectedRef = useRef(null);

    useEffect(() => {

        if (selectedStation) {
            setShowPanel(true);
        }

    }, [selectedStation]);

    useEffect(() => {

        if (selectedRef.current) {

            selectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }, [selectedStation]);

    // LOCATION

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(

            async (pos) => {

                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                setPosition([lat, lng]);

                try {

                    const data = await getNearbyStations(lat, lng);

                    setStations(data.data);

                } catch (err) {

                    console.error(err);

                } finally {

                    setLoading(false);

                }

            },

            (err) => {

                console.error(err);

                setPosition([23.25, 77.43]);

                setLoading(false);

            },

            {
                enableHighAccuracy: true,
                timeout: 5000,
            }

        );

    }, []);

    if (loading) return <Loader />;
    if (!position) return <PositionNotFound />;

    // RECENTER

    function RecenterMap({ position }) {

        const map = useMap();

        useEffect(() => {

            if (position) {
                map.setView(position, 14);
            }

        }, [position]);

        return null;

    }

    return (
        <div>
            <button
                onClick={() => window.history.back()}
                className=" absolute top-5 left-5 z-[1200] text-purple-700 flex items-center justify-center   "
            >
               <CircleArrowLeft /> 
            </button>
            <div className="fixed inset-0 overflow-hidden bg-black">


                {/* MAP */}

                <div className="absolute inset-0 z-0">


                    <MapContainer
                        center={position}
                        zoom={14}
                        zoomControl={false}
                        scrollWheelZoom={true}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    >

                        {/* MAP STYLE */}

                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />

                        {/* USER */}

                        {position && (
                            <Marker
                                position={position}
                                icon={userIcon}
                            />
                        )}

                        {/* STATIONS */}

                        {stations.map((station) => (

                            <Marker
                                key={station._id}
                                position={[
                                    station.location.lat,
                                    station.location.lng
                                ]}
                                icon={
                                    selectedStation?._id === station._id
                                        ? selectedStationIcon
                                        : stationIcon
                                }
                                eventHandlers={{
                                    click: () => {

                                        setSelectedStation(station);

                                        if (window.innerWidth < 768) {
                                            setMobileExpanded(true);
                                        }

                                    }
                                }}
                            />

                        ))}

                        {/* ROUTE */}

                        {selectedStation && (

                            <RoutePath
                                from={position}
                                to={[
                                    selectedStation.location.lat,
                                    selectedStation.location.lng
                                ]}
                            />

                        )}

                        <RecenterMap position={position} />

                    </MapContainer>

                    {/* MAP OVERLAY */}

                    <div className={`
                    absolute inset-0 pointer-events-none transition-all duration-500

                    ${mobileExpanded
                            ? "bg-black/20"
                            : "bg-black/10"
                        }
                `} />

                </div>

                {/* DESKTOP CONTROLS */}

                <div className="absolute top-24 right-5 z-[1000] hidden md:flex flex-col gap-4">

                    <button
                        onClick={() => setShowPanel(!showPanel)}
                        className="w-14 h-14 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl text-white flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:bg-white/10 transition-all"
                    >

                        {showPanel
                            ? <ChevronLeft size={22} />
                            : <MapPinned size={22} />
                        }

                    </button>

                    <button
                        className="w-14 h-14 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl text-white flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:bg-white/10 transition-all"
                    >

                        <Navigation size={20} />

                    </button>

                </div>

                {/* DESKTOP PANEL */}

                <div className={`
                hidden md:block absolute top-0 right-0 h-full z-[999]
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

                ${showPanel
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
            `}>

                    <div className="relative w-[38vw] min-w-[420px] h-full border-l border-white/10 overflow-hidden">

                        {/* BACKGROUND IMAGE */}

                        <div className="absolute inset-0">

                            <img
                                src="/full-bg2.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />

                            {/* DARK OVERLAY */}

                            <div className="absolute inset-0 bg-black/70" />

                            {/* PURPLE TINT */}

                            <div className="absolute inset-0 bg-[#895CE7]/10" />

                        </div>

                        {/* GLOW */}

                        <div className="absolute top-0 left-0 w-full h-[400px] bg-[#895CE7]/10 blur-[140px]" />

                        {/* CONTENT */}

                        <div className="relative z-10 h-full flex flex-col">

                            {/* HEADER */}

                            <div className="p-6 border-b border-white/10">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-zinc-400 text-sm">
                                            Nearby Stations
                                        </p>

                                        <h1 className="text-4xl font-black tracking-tight text-white mt-2">
                                            EV Charging
                                        </h1>

                                    </div>

                                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white">

                                        <Zap size={22} />

                                    </div>

                                </div>

                            </div>

                            {/* CARDS */}

                            <div className="flex-1 overflow-y-auto p-5 space-y-5">

                                {stations.map((station) => (

                                    <StationCard
                                        key={station._id}
                                        station={station}
                                        isSelected={selectedStation?._id === station._id}
                                        onSelect={() => setSelectedStation(station)}
                                        refProp={
                                            selectedStation?._id === station._id
                                                ? selectedRef
                                                : null
                                        }
                                    />

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* MOBILE SHEET */}

                <motion.div
                    drag="y"
                    dragConstraints={{
                        top: 0,
                        bottom: 0
                    }}
                    onDragEnd={(e, info) => {

                        if (info.offset.y > 80) {
                            setMobileExpanded(false);
                        }

                        if (info.offset.y < -80) {
                            setMobileExpanded(true);
                        }

                    }}
                    animate={{
                        height: mobileExpanded ? "58vh" : "11vh"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18
                    }}
                    className=" md:hidden absolute bottom-0 left-0 w-full z-[999] rounded-t-[34px] border-t border-white/10 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.35)]
                "
                >

                    {/* MOBILE BG */}

                    <div className="absolute inset-0 -z-10">

                        <img
                            src="/full-bg2.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/75" />

                        <div className="absolute inset-0 bg-[#895CE7]/10" />

                    </div>

                    {/* HANDLE */}

                    <div
                        className="pt-3 pb-4 flex justify-center cursor-grab active:cursor-grabbing"
                    >

                        <div className="w-14 h-1.5 rounded-full bg-white/20" />

                    </div>

                    {/* HEADER */}

                    <div className="px-5 pb-4">

                        <p className="text-zinc-400 text-xs">
                            Nearby Stations
                        </p>

                        <h1 className="text-2xl font-black tracking-tight text-white mt-1">
                            EV Charging
                        </h1>

                    </div>

                    {/* CARDS */}

                    <div className="
                    h-[calc(100%-70px)] overflow-y-auto
                    [overscroll-behavior:contain]
                    px-3 pb-8 space-y-3
                ">

                        {stations.map((station) => (

                            <StationCard
                                key={station._id}
                                station={station}
                                isSelected={selectedStation?._id === station._id}
                                onSelect={() => setSelectedStation(station)}
                                mobile
                            />

                        ))}

                    </div>

                </motion.div>

            </div>
        </div>

    );

}