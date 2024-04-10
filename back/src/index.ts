import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import { petrolRouter } from "./routes/petrolStations";

const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

app.use(cors());
app.use("/petrols", petrolRouter);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
