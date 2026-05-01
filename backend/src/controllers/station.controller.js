const stationModel = require("../models/station.model");
const Station = require("../models/station.model");

async function createStation (req, res) {
    try {
        const { name, lat, lng, address, totalSlots } = req.body;

        const station = await Station.create({
            name,
            location: { lat, lng },
            address,
            totalSlots,
            availableSlots: totalSlots // initially full
        });

        res.status(201).json({
            message: "Station created",
            station
        });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

async function getAllStations (req, res) {
    const AllStations = await stationModel.find();
    res.json(AllStations)
}


module.exports = {
    createStation,
    getAllStations
}