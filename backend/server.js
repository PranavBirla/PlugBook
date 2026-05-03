const app = require("./src/app");
const connectDB = require("./src/db/db");
const http = require("http");
const { Server } = require("socket.io");

connectDB();

const PORT = 3000;

// create HTTP server
const server = http.createServer(app);

// attach socket
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

// socket logic
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send-location", (data) => {
        io.emit("receive-location", {id: socket.id, ...data});
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});