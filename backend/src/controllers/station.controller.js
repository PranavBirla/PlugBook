const bookingModel = require("../models/booking.model");
const stationModel = require("../models/station.model");
const Station = require("../models/station.model");
const getDistance = require("../utils/distance")

async function createStation(req, res) {
    try {
        const { stationName, lat, lng, address, acTotal, dcTotal } = req.body;

        const station = await Station.create({
            stationName,
            location: { lat, lng },
            address,
            chargers: {
                AC: { total: acTotal, available: acTotal },
                DC: { total: dcTotal, available: dcTotal }
            }
        });
        res.status(201).json({
            message: "Station created",
            station
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

async function getAllStations(req, res) {
    try {
        const stations = await stationModel.find();

        // 🔥 get all active bookings at once
        const bookings = await bookingModel.find({
            endTime: { $gt: new Date() }
        });

        const updatedStations = stations.map((station) => {

            const acBookings = bookings.filter(
                b => b.station.toString() === station._id.toString() && b.chargerType === "AC"
            );

            const dcBookings = bookings.filter(
                b => b.station.toString() === station._id.toString() && b.chargerType === "DC"
            );

            return {
                ...station.toObject(),
                chargers: {
                    AC: {
                        total: station.chargers.AC.total,
                        available: station.chargers.AC.total - acBookings.length
                    },
                    DC: {
                        total: station.chargers.DC.total,
                        available: station.chargers.DC.total - dcBookings.length
                    }
                }
            };
        });

        res.json(updatedStations);
        console.log("NOW:", new Date());
        bookings.forEach(b => {
            console.log("END TIME:", b.endTime);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

async function getNearbyStations(req, res) {
    try {
        const { lat, lng } = req.query;

        // convert string to number
        const userLat = parseFloat(lat);
        const userLng = parseFloat(lng);

        const stations = await stationModel.find();

        const bookings = await bookingModel.find({
            endTime: { $gt: new Date() },
            status: "booked"
        });

        const result = stations.map(station => {

            // distance calculation
            const distance = getDistance(
                userLat,
                userLng,
                station.location.lat,
                station.location.lng
            );

            // AC bookings
            const acBookings = bookings.filter(
                b =>
                    b.station.toString() === station._id.toString() &&
                    b.chargerType === "AC"
            );

            // DC bookings
            const dcBookings = bookings.filter(
                b =>
                    b.station.toString() === station._id.toString() &&
                    b.chargerType === "DC"
            );

            // calculate availability
            const chargers = {
                AC: {
                    total: station.chargers.AC.total,
                    available: station.chargers.AC.total - acBookings.length
                },
                DC: {
                    total: station.chargers.DC.total,
                    available: station.chargers.DC.total - dcBookings.length
                }
            };

            return {
                ...station.toObject(),
                distance,
                chargers
            };
        });

        // sort nearest first
        result.sort((a, b) => a.distance - b.distance);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    createStation,
    getAllStations,
    getNearbyStations
}