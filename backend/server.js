const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})