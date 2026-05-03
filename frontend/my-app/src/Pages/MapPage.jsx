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
                timeout: 10000,
                maximumAge: 0
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
            <Navbar/>
        </div>
    );
}