const stationModel = require("../models/station.model");
const bookingModel = require("../models/booking.model");

async function createBooking(req, res) {

    try {
        const { stationId, chargerType, startTime, endTime } = req.body;

        //Validation for correct format of time
        const parsedStart = new Date(startTime);
        const parsedEnd = new Date(endTime);

        const durationMs = parsedEnd - parsedStart;
        const durationMinutes = durationMs / (1000 * 60);

        if (isNaN(parsedStart) || isNaN(parsedEnd)) {
            return res.status(400).json({
                message: "Invalid date format"
            });
        }

        //Basic Validation
        if (!stationId || !chargerType || !startTime || !endTime) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        if (new Date(startTime) >= new Date(endTime)) {
            return res.status(400).json({ message: "Invalid time range" });
        }

        //Duration Rules
        if (durationMinutes < 10) {
            return res.status(400).json({
                message: "Minimum booking duration is 10 minutes"
            });
        }

        if (durationMinutes > 480) {
            return res.status(400).json({
                message: "Maximum booking duration is 8 hours"
            })
        }

        //Checking Overlapping
        const overlappingBookings = await bookingModel.find({
            station: stationId,
            chargerType,
            status: "active",

            startTime: { $lt: new Date(endTime) },
            endTime: { $gt: new Date(startTime) },
        });

        const station = await stationModel.findById(stationId);

        if (!station) {
            return res.status(404).json({ message: "Station not found" });
        }

        const totalSlots = station.chargers[chargerType].total;

        //check selected time overlap 
        if (overlappingBookings.length >= totalSlots) {
            return res.status(400).json({
                message: "No slots available for this time range"
            });
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

async function cancelBooking(req, res) {
    try{

        const { bookingId } = req.params

        const booking = await bookingModel.findById(bookingId);

        if(!booking) {
            return res.status(404).json({
                message: "Booking not found!"
            });
        }

        if(
            booking.user.toString() !== req.user.id
        ) {
            return res.status(403).json({
                message: "Unauthorized"
            });
        }

        if(booking.status === "cancelled") {
            return res.status(400).json({
                message: "Booking already cancelled!"
            });
        }

        if(booking.status === "expired") {
            return res.status(400).json({
                message: "Booking is expired!"
            });
        }

        booking.status = "cancelled"

        await booking.save();

        res.status(200).json({
            message: "Booking cancelled successfully.",
            booking
        });
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: err.message
        });
    }
}

async function getMyBookings(req, res) {

    try {
        const bookings = await bookingModel.find({
            user: req.user.id,
            $or: [
                {endTime: { $lt: new Date() }},
                {status: "cancelled"}
            ]
        
        }).sort({ createdAt: -1 })
        .populate("station");

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
    cancelBooking,
    getMyBookings,
    getActiveBookings
}