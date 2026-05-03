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
import Navbar from "../Components/Navbar";
import Top from "../Components/Top";

export default function MapPage() {
    const [position, setPosition] = useState(null);
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStation, setSelectedStation] = useState(null);


    // 🔥 GET USER LOCATION + FETCH STATIONS
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                setPosition([lat, lng]);

                try {
                    const data = await getNearbyStations(lat, lng);
                    console.log("Stations:", data.data);
                    setStations(data.data);
                } catch (err) {
                    console.error("API error:", err);
                }

                setLoading(false);
            },
            (err) => {
                console.error("Location error:", err);

                // fallback location (Bhopal)
                const lat = 23.25;
                const lng = 77.43;

                setPosition([lat, lng]);

                getNearbyStations(lat, lng).then(setStations);
                setLoading(false);
            },
            (err) => {
                console.error(err);
            },
            {
                enableHighAccuracy: true, 
                timeout: 10000,
                maximumAge: 0
            }
        );
    }, []);

    if (!navigator.geolocation) {
        alert("Geolocation not supported");
    }

    if (loading) return <p>Loading map...</p>;

    // style={{
    //             height: "100vh",
    //             borderRadius: "20px",
    //             overflow: "hidden",
    //             margin: "10px" // optional, gives spacing from edges
    //         }}

    return (
        <div className="h-[90vh] rounded-2xl overflow-hidden m-2.5 md:h-[100vh]" >
            <Top/>
            
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
                                console.log("Clicked station:", station); // 👈 HERE
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
            <Navbar/>
        </div>
    );
}