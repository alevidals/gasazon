import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";
import { PRICES_RANGE } from "./constants";
import type { BottleType } from "./types";

export function getRandomBottlePrice(bottleType: BottleType) {
  const { min, max } = PRICES_RANGE[bottleType];
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

export function getRandomName() {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    separator: " ",
    style: "capital",
  });
}
