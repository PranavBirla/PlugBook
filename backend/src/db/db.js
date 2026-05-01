const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env"})

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("Error connecting database", err);
    });
}

module.exports = connectDB;