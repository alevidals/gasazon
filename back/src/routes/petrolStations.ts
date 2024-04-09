import { Router } from "express";
import { petrolStations } from "../services/petrolStations";

export const petrolRouter = Router();

petrolRouter.get("/", (req, res) => {
  return res.json(petrolStations);
});
