import { REFRESH_PRICE_INTERVAL } from "../lib/constants";
import type { PetrolStation } from "../lib/types";
import { getRandomBottlePrice } from "../lib/utils";

export const petrolStations: PetrolStation[] = [
  {
    name: "Petrol Station 1",
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
  {
    name: "Petrol Station 2",
    prices: {
      "1L": getRandomBottlePrice("1L"),
      "3L": getRandomBottlePrice("3L"),
      "5L": getRandomBottlePrice("5L"),
      "15L": getRandomBottlePrice("15L"),
    },
  },
  {
    name: "Petrol Station 3",
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
}, REFRESH_PRICE_INTERVAL);
