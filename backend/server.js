const app = require("./src/app");
const connectDB = require("./src/db/db");
const http = require("http");

require("dotenv").config();

connectDB();

const PORT = 3000;



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});