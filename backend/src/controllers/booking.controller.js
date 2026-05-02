const stationModel = require("../models/station.model");
const bookingModel = require("../models/booking.model");

async function createBooking(req, res) {

    try {
        const { stationId, chargerType, duration } = req.body;

        if (!stationId || !["AC", "DC"].includes(chargerType) || !duration || duration <= 0) {
            return res.status(400).json({ message: "Invalid input" });
        }

        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + duration * 60000);

        const station = await stationModel.findById(stationId);

        if (!station) {
            return res.status(404).json({ message: "Station not found" });
        }

        const activeBookings = await bookingModel.find({
            station: stationId,
            chargerType,
            endTime: { $gt: new Date() }
        });

        const available =
            station.chargers.AC.total - activeBookings.length;

        if (activeBookings.length >= station.chargers[chargerType].total) {
            return res.status(400).json({ message: "No slots available" });
        }

        const booking = await bookingModel.create({
            user: req.user.id,
            station: stationId,
            chargerType,
            startTime,
            endTime
        });

        res.status(201).json({
            message: "Booking successful",
            booking
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    };

};

async function getMyBookings(req, res) {
    try {
        const bookings = await bookingModel.find({
            user: req.user.id,
            endTime: { $lt: new Date() }
        }).populate("station");

        const format = d => new Date(d).toLocaleString("en-IN");

        const formattedBookings = bookings.map(b => ({
            ...b.toObject(),
            startTimeFormatted: format(b.startTime),
            endTimeFormatted: format(b.endTime)
        }));

        res.json(formattedBookings);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getActiveBookings(req, res) {
    try {
        const bookings = await bookingModel.find({
            user: req.user.id,
            endTime: { $gt: new Date() },
            status: "booked"
        }).populate("station").sort({ startTime: 1 })

        const format = d => new Date(d).toLocaleString("en-IN");

        const formattedBookings = bookings.map(b => ({
            ...b.toObject(),
            startTimeFormatted: format(b.startTime),
            endTimeFormatted: format(b.endTime)
        }));

        return res.json(formattedBookings);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createBooking,
    getMyBookings,
    getActiveBookings
}