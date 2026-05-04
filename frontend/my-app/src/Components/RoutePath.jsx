import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

export default function RoutePath({ from, to }) {
    const map = useMap(); 


    useEffect(() => {
        if (!map || !from || !to) return;
    
        const routing = L.Routing.control({
            waypoints: [
                L.latLng(from[0], from[1]),
                L.latLng(to[0], to[1]),
            ],
            lineOptions: {
                styles: [
                    { color: "#A29BFE", weight: 12, opacity: 0.5 },
                    { color: "#895CE7", weight: 5, opacity: 1 }
                ]
            },
            addWaypoints: false,
            draggableWaypoints: false,
            show: false,
            createMarker: () => null,
        }).addTo(map);
    
        return () => {
            if (map && routing) {
                try {
                    map.removeControl(routing);
                } catch (err) {
                    console.log("Cleanup safe error:", err);
                }
            }
        };
    }, [map, from, to]);

    return null;
}