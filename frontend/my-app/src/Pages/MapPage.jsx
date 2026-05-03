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
import StationPopup from "../Components/StationPopUp";
import RoutePath from "../Components/RoutePath";
import { userIcon, stationIcon } from "../utils/mapIcons";
import Loader from "../Components/Loader";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function MapPage() {
    const [position, setPosition] = useState(null);
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStation, setSelectedStation] = useState(null);



    // GET USER LOCATION + FETCH STATIONS
    useEffect(() => {

        navigator.geolocation.watchPosition(
            async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
        
                setPosition([lat, lng]);
        
                // send location to socket
                socket.emit("send-location", { lat, lng });
        
                // ONLY FETCH STATIONS FIRST TIME
                if (stations.length === 0) {
                    try {
                        const data = await getNearbyStations(lat, lng);
                        console.log("Stations:", data.data);
                        setStations(data.data);
                        setLoading(false);
                    } catch (err) {
                        console.error("API error:", err);
                    }
                }
            },
            (err) => {
                console.error("Location error:", err);
        
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

    useEffect(() => {
        const handleLocation = (data) => {
            console.log("Live location:", data);

            //  update user marker
            setPosition([data.lat, data.lng]);
        };

        socket.on("receive-location", handleLocation);

        return () => {
            socket.off("receive-location", handleLocation);
        };
    }, []);

    if (!navigator.geolocation) {
        alert("Geolocation not supported");
    }

    if (loading) return <Loader />;

    return (
        <div
            style={{
                height: "100vh",
                borderRadius: "20px",
                overflow: "hidden",
                margin: "10px" // optional, gives spacing from edges
            }}
        >
            
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

                {/* USER MARKER */}
                <Marker position={position} icon={userIcon}>
                    <Popup>You are here</Popup>
                </Marker>

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



            </MapContainer>
            <div class="custom-cursor"></div>
        </div>
    );
}