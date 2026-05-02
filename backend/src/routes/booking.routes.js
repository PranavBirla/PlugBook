const express = require("express");
const bookingController = require("../controllers/booking.controller");
const router = express.Router();
const {authMiddleware} = require("../middlewares/auth.middleware");

router.post("/create", authMiddleware, bookingController.createBooking);
router.get("/my-bookings", authMiddleware, bookingController.getMyBookings);
router.get("/active-bookings", authMiddleware, bookingController.getActiveBookings);

module.exports = router;