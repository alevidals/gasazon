import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import { petrolRouter } from "./routes/petrolStations";
import { petrolStations } from "./services/petrolStations";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use("/petrols", petrolRouter);

setInterval(() => {
  io.emit("petrolStations", petrolStations);
}, 5000);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
