import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

export default function RoutePath({ from, to }) {
    const map = useMap(); // ✅ THIS replaces mapRef

    useEffect(() => {
        if (!from || !to) return;

        console.log("RoutePath running");
        console.log("From:", from);
        console.log("To:", to);

        const routing = L.Routing.control({
            waypoints: [
                L.latLng(from[0], from[1]),
                L.latLng(to[0], to[1]),
            ],
            lineOptions: {
                styles: [
                    { color: "#A29BFE", weight: 12, opacity: 0.5 }, // glow layer
                    { color: "#895CE7", weight: 5, opacity: 1 }     // main route
                ]
            },
            addWaypoints: false,
            draggableWaypoints: false,
            createMarker: () => null,
        }).addTo(map);

        return () => {
            map.removeControl(routing);
        };
    }, [map, from, to]);

    return null;
}