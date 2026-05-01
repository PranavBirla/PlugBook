const stationModel = require("../models/station.model");
const bookingModel = require("../models/booking.model");

async function createBooking(req, res) {

    try {
        const { stationId, date, timeSlot } = req.body;

        const alreadyBooked = await bookingModel.findOne({
            user: "69f3e6380951517446ada582",
            station: stationId,
            date,
            timeSlot
        });

        if (alreadyBooked) {
            return res.status(400).json({
                message: "You already booked this slot"
            });
        };

        const slotTaken = await bookingModel.findOne({
            station: stationId,
            date,
            timeSlot
        });

        if (slotTaken) {
            return res.status(400).json({
                message: "Slot already booked"
            });
        };

        const station = await stationModel.findOneAndUpdate(
            { _id: stationId, availableSlots: { $gt: 0 } },
            { $inc: { availableSlots: -1 } },
            { new: true }
        )

        if(!station){
            return res.status(400).json({
                message:"No slots available"
            });
        };

        const booking = await bookingModel.create({
            user: "69f3e6380951517446ada582",
            station: stationId,
            date,
            timeSlot
        });

        res.status(201).json({
            message: "Booking successful",
            booking
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    };

};

module.exports = {
    createBooking
}