const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
    staionName: {
        type: String
    },
    location: {
        lat: Number,
        lng: Number
    },
    address: String,
    availableSlots: Number,
    totalSlots: Number
});

const stationModel = mongoose.model("Station", stationSchema);

module.exports = stationModel;