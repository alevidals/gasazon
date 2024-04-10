import cors from "cors";
import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import { REFRESH_PRICE_INTERVAL } from "./lib/constants";
import { getRandomBottlePrice } from "./lib/utils";
import { petrolRouter } from "./routes/petrolStations";
import { petrolStations } from "./services/petrolStations";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(cors());
app.use("/petrols", petrolRouter);

setInterval(() => {
  for (const station of petrolStations) {
    station.prices = {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    };
  }

  io.emit("petrolStations", petrolStations);
}, REFRESH_PRICE_INTERVAL);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
