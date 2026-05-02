const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token;


        if (!token) {
            return res.status(401).json({
                message: "You are unauthorized, Login first"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            id: decoded.id
        }

        next();


    } catch (err) {
        res.status(401).json({ message: err.message });
    }

};

module.exports = {
    authMiddleware
}