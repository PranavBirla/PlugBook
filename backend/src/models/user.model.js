const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

