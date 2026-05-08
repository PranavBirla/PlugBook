const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const bookingRoutes = require("./routes/booking.routes");
const stationRoutes = require("./routes/station.routes");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use("/api/station", stationRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running");
});

module.exports = app;