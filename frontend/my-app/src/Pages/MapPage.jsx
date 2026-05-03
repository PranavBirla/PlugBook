import { useEffect, useState } from "react";
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
import StationPopup from "../Components/StationPopUp";
import Loader from "../Components/Loader";
import PositionNotFound from "../Components/PositionNotFound";
import RoutePath from "../Components/RoutePath";
import { userIcon, stationIcon } from "../utils/mapIcons";
import Navbar from "../Components/Navbar";
import Top from "../Components/Top";



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

    // GET USER LOCATION + FETCH STATIONS
    useEffect(() => {

        let lastPosition = null;

        navigator.geolocation.watchPosition(
            async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                const accuracy = pos.coords.accuracy;

                // ❌ ignore bad GPS readings
                // if (accuracy > 200) return;

                lastPosition = { lat, lng };
                // ❌ ignore unrealistic jumps (> 200m instantly)
                if (lastPosition) {
                    const distanceMeters =
                        Math.sqrt(
                            Math.pow(lat - lastPosition.lat, 2) +
                            Math.pow(lng - lastPosition.lng, 2)
                        ) * 111000; // convert to meters

                    if (distanceMeters > 200) return;
                }




                animateToPosition([lat, lng]);

                // fetch stations only once
                if (stations.length === 0) {
                    try {
                        const data = await getNearbyStations(lat, lng);
                        setStations(data.data);
                    } catch (err) {
                        console.error("API error:", err);
                    } finally {
                        setLoading(false); //  ALWAYS runs
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

    // useEffect(() => {
    //     const handleLocation = (data) => {
    //         console.log("Live location:", data);

    //         //  update user marker
    //         setUsers((prev) => ({
    //             ...prev,
    //             [data.id]: { lat: data.lat, lng: data.lng },
    //         }));
    //     };

    //     socket.on("receive-location", handleLocation);

    //     return () => {
    //         socket.off("receive-location", handleLocation);
    //     };
    // }, []);

    if (!navigator.geolocation) {
        alert("Geolocation not supported");
    }

    if (loading) return <Loader />;
    if (!position) return <PositionNotFound />;

    // style={{
    //             height: "100vh",
    //             borderRadius: "20px",
    //             overflow: "hidden",
    //             margin: "10px" // optional, gives spacing from edges
    //         }}


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
        <div className="h-[90vh] rounded-2xl overflow-hidden m-2.5 md:h-[100vh]" >
            <Top />

            <MapContainer
                center={position}
                zoom={14}
                zoomControl={false}
                scrollWheelZoom={true}
                style={{ height: "100vh", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {position && (
                    <Marker position={position} icon={userIcon}>
                        <Popup>You are here</Popup>
                    </Marker>
                )}

                {/* STATION MARKERS */}
                {stations.map((station) => (
                    <Marker
                        key={station._id}
                        position={[station.location.lat, station.location.lng]}
                        icon={stationIcon}
                        eventHandlers={{
                            click: () => {
                                console.log("Clicked station:", station);
                                setSelectedStation(station);
                            },
                        }}
                    >
                        <Popup>
                            <StationPopup station={station} />
                        </Popup>
                    </Marker>

                ))}

                {/* RoutePath */}
                {selectedStation && (
                    <RoutePath
                        from={position}
                        to={[
                            selectedStation.location.lat,
                            selectedStation.location.lng,
                        ]}
                    />
                )}

                <RecenterMap position={position} />

            </MapContainer>
            <Navbar />
        </div>
    );
}