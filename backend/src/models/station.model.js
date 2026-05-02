const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: true
    },
    location: {
        lat: Number,
        lng: Number
    },
    address: String,
    chargers:{
        AC:{
            total: Number,
            available: Number
        },
        DC:{
            total: Number,
            available: Number
        }
    }
});

const stationModel = mongoose.model("station", stationSchema);

module.exports = stationModel;