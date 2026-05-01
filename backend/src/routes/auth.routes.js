const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.post("/user/logout", authController.logoutUser);


module.exports = router;