import axios from "axios";

const API = axios.create({
    baseURL: "https://plugbook-backend.onrender.com/api"
});

export const getNearbyStations = (lat, lng) =>
    API.get(`/station/nearby-stations?lat=${lat}&lng=${lng}`);