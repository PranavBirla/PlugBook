import { useEffect, useState, useRef } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import "../utils/fixLeafletIcon";
import { getNearbyStations } from "../services/api";
import { useMap } from "react-leaflet";
import Loader from "../Components/Loader";
import PositionNotFound from "../Components/PositionNotFound";
import RoutePath from "../Components/RoutePath";
import { userIcon, stationIcon, selectedStationIcon } from "../utils/mapIcons";
import Navbar from "../Components/Navbar";
import Top from "../Components/Top";
import StationCard from "../Components/StationCard";
import BgIcons from "../Components/BgIcons";



export default function MapPage() {
    const [position, setPosition] = useState(null);
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStation, setSelectedStation] = useState(null);



    const animateToPosition = (newPos) => {
        setPosition((prev) => {
            if (!prev) return newPos;

            const steps = 10;
            let i = 0;

            const latStep = (newPos[0] - prev[0]) / steps;
            const lngStep = (newPos[1] - prev[1]) / steps;

            const interval = setInterval(() => {
                i++;
                prev = [prev[0] + latStep, prev[1] + lngStep];
                setPosition([...prev]);

                if (i >= steps) clearInterval(interval);
            }, 50);

            return prev;
        });
    };

    const selectedRef = useRef(null);

    useEffect(() => {
        if (selectedRef.current) {
            selectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }, [selectedStation]);

    // GET USER LOCATION + FETCH STATIONS
    useEffect(() => {

        let lastPosition = null;

        navigator.geolocation.watchPosition(
            async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                if (lastPosition) {
                    const distanceMeters =
                        Math.sqrt(
                            Math.pow(lat - lastPosition.lat, 2) +
                            Math.pow(lng - lastPosition.lng, 2)
                        ) * 111000;

                    if (distanceMeters > 200) return;
                }

                lastPosition = { lat, lng };

                animateToPosition([lat, lng]);




                animateToPosition([lat, lng]);

                // fetch stations only once
                if (stations.length === 0) {
                    try {
                        const data = await getNearbyStations(lat, lng);
                        setStations(data.data);
                    } catch (err) {
                        console.error("API error:", err);
                    } finally {
                        setLoading(false);
                    }
                }
            },
            (err) => {
                console.error("Location error:", err);

                const lat = 23.25;
                const lng = 77.43;

                setPosition([lat, lng]);
                setLoading(false);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000,
            }
        );
    }, []);


    if (!navigator.geolocation) {
        alert("Geolocation not supported");
    }

    if (loading) return <Loader />;
    if (!position) return <PositionNotFound />;

    function RecenterMap({ position }) {
        const map = useMap();

        useEffect(() => {
            if (position) {
                map.setView(position);
            }
        }, [position]);

        return null;
    }

    return (
        <div className="h-screen flex flex-col relative">
            <BgIcons/>
            <Top />

            <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">

                <div className="h-[45%] lg:h-[85%] mt-14 ml-4 lg:w-[60%] relative rounded-2xl overflow-hidden">
                    <MapContainer
                        center={position}
                        zoom={14}
                        zoomControl={false}
                        scrollWheelZoom={true}
                        style={{ height: "100%", width: "100%", border: "2px" }}
                    >
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

                        {position && (
                            <Marker position={position} icon={userIcon} />
                        )}

                        {stations.map((station) => (
                            <Marker
                                key={station._id}
                                position={[station.location.lat, station.location.lng]}
                                icon={
                                    selectedStation?._id === station._id
                                        ? selectedStationIcon
                                        : stationIcon
                                }
                                eventHandlers={{
                                    click: () => {
                                        setSelectedStation(station);
                                    }
                                }}
                            />
                        ))}

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
                </div>

                <div className="flex-1 lg:w-[40%] bg-[#EADFEF] p-4 overflow-y-auto z-10">
                    <h2 className="text-lg font-semibold mb-3">Nearest Stations</h2>

                    {stations.map((station) => (
                        <StationCard
                            key={station._id}
                            station={station}
                            isSelected={selectedStation?._id === station._id}
                            onSelect={() => setSelectedStation(station)}
                            refProp={selectedStation?._id === station._id ? selectedRef : null}
                        />
                    ))}
                </div>

            </div>

            <div className="fixed bottom-0 left-0 w-full z-[1000] md:hidden "><Navbar /></div>
        </div>
    );
}