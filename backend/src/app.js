const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const bookingRoutes = require("./routes/booking.routes");
const stationRoutes = require("./routes/station.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use("/api/station", stationRoutes);

module.exports = app;