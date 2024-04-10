import { io } from "..";
import { REFRESH_PRICE_INTERVAL } from "../lib/constants";
import type { PetrolStation } from "../lib/types";
import { getRandomBottlePrice, getRandomName } from "../lib/utils";

export const petrolStations: PetrolStation[] = [
  {
    id: crypto.randomUUID(),
    name: getRandomName(),
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
  {
    id: crypto.randomUUID(),
    name: getRandomName(),
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
  {
    id: crypto.randomUUID(),
    name: getRandomName(),
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
  {
    id: crypto.randomUUID(),
    name: getRandomName(),
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
  {
    id: crypto.randomUUID(),
    name: getRandomName(),
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
];

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
