const jwt = require("jsonwebtoken");

const userModel =
require("../models/user.model");

async function authMiddleware(req, res, next) {

    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user =
            await userModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (err) {

        console.log(err);

        res.status(401).json({
            message: "Invalid token"
        });

    }

}

module.exports = {
    authMiddleware
};