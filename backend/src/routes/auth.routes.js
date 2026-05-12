const express = require("express");
const authController = require("../controllers/auth.controller");
const {authMiddleware} = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.post("/user/logout", authController.logoutUser);
router.get("/user/me", authMiddleware, authController.getUser);


module.exports = router;