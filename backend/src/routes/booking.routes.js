const express = require("express");
const bookingController = require("../controllers/booking.controller");
const router = express.Router();

router.post("/create", bookingController.createBooking);

module.exports = router;