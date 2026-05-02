import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api"
});

export const getNearbyStations = (lat, lng) =>
    API.get(`/station/nearby-stations?lat=${lat}&lng=${lng}`);