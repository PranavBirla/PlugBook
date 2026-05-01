const express = require("express");
const router = express.Router();
const stationController = require("../controllers/station.controller");

router.post("/create", stationController.createStation);
router.get("/", stationController.getAllStations);

module.exports = router;