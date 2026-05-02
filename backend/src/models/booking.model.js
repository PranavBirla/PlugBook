const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    station: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "station",
        required: true
    },
    status: {
        type: String,
        enum: ["booked", "cancelled"],
        default: "booked"
    },
    chargerType: String, // "AC" or "DC"
    startTime: Date,
    endTime: Date,
}, {
    timestamps: true
}
);

bookingSchema.index({ station: 1, chargerType: 1, endTime: 1, status: 1 });

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;