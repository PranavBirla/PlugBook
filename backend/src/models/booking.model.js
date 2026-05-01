const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    station: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "station",
        required: true
    },
    date:{
        type: String,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["booked", "cancelled"],
        default: "booked"
    }
}, {
    timestamps: true
}
);

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;