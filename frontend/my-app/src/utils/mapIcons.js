import L from "leaflet";

// 🚗 USER ICON (car)
export const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/75/75782.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

// ⚡ STATION ICON (charging)
export const stationIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/18502/18502498.png",
    iconSize: [35, 35],
    iconAnchor: [17, 35],
});

export const selectedStationIcon = new L.Icon({
    iconUrl: "selectedStationIcon.png",
    iconSize: [55, 55],
    iconAnchor: [17, 35],
});