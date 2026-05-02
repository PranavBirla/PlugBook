const express = require("express");
const router = express.Router();
const stationController = require("../controllers/station.controller");

router.post("/create", stationController.createStation);
router.get("/", stationController.getAllStations);
router.get("/nearby-stations", stationController.getNearbyStations);

module.exports = router;