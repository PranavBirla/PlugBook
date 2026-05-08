const app = require("./src/app");
const connectDB = require("./src/db/db");
const http = require("http");

require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});