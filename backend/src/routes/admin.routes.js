const express = require("express");

const router = express.Router();

const adminController =
require("../controllers/admin.controller");

const { authMiddleware } =
require("../middlewares/auth.middleware");

const adminMiddleware =
require("../middlewares/admin.middleware");

// DASHBOARD
router.get(
    "/dashboard",
    authMiddleware,
    adminMiddleware,
    adminController.adminDashboardStats
);


// RECENT BOOKINGS
router.get(
    "/recent-bookings",
    authMiddleware,
    adminMiddleware,
    adminController.getRecentBookings
);

// STATION ANALYTICS
router.get(
    "/station-analytics",
    authMiddleware,
    adminMiddleware,
    adminController.getStationAnalytics
);

// ALL USERS
router.get(
    "/users",
    authMiddleware,
    adminMiddleware,
    adminController.getAllUsers
);

// ALL BOOKINGS
router.get(
    "/bookings",
    authMiddleware,
    adminMiddleware,
    adminController.getAllBookings
);

// ALL STATIONS
router.get(
    "/stations",
    authMiddleware,
    adminMiddleware,
    adminController.getAllStationsAdmin
);

router.get(
    "/bookings-trend",
    authMiddleware,
    adminMiddleware,
    adminController.getBookingsTrend

)


module.exports = router;