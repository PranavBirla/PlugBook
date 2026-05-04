import { useState, useEffect } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AvailabilityPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fromDate: "",
        toDate: "",
        fromTime: "",
        toTime: ""
    });

    const [location, setLocation] = useState({
        lat: null,
        lng: null
    });

    const [stations, setStations] = useState([]);

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

            setStations(res.data);


            // //Better Availability by maximum available slots
            // const sorted = res.data.sort((a, b) => {
            //     const aSlots = a.chargers.AC.available + a.chargers.DC.available;
            //     const bSlots = b.chargers.AC.available + b.chargers.DC.available;
            //     return bSlots - aSlots;
            // });

            // setStations(sorted);

        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">
                Find Available Stations
            </h1>

            <div className="space-y-3">

                <input
                    type="date"
                    name="fromDate"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="time"
                    name="fromTime"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="date"
                    name="toDate"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="time"
                    name="toTime"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <button
                    onClick={fetchStations}
                    className="mt-4 bg-black text-white px-4 py-2 rounded"
                >
                    Find Stations
                </button>

            </div>

            <div className="mt-6 space-y-3">
                {stations.map((station) => (
                    <div
                        key={station._id}
                        className="p-4 border rounded-lg"
                    >
                        <h2 className="font-semibold">
                            {station.stationName}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {station.distance.toFixed(2)} km away
                        </p>

                        <p className="text-sm mt-1">
                            AC: {station.chargers.AC.available} / {station.chargers.AC.total}
                        </p>

                        <p className="text-sm">
                            DC: {station.chargers.DC.available} / {station.chargers.DC.total}
                        </p>

                        <button
                            onClick={() =>
                                navigate("/slots", { state: { station } })
                            }
                            className="mt-2 bg-black text-white px-3 py-1 rounded text-sm"
                        >
                            Book →
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}