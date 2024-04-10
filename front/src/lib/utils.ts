import type { BottleType, PetrolStation } from "@/lib/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type GetTotalPriceArgs = {
  liters: number;
  petrolStation: PetrolStation;
};

type CarafesToBuy = Record<BottleType, number>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalPrice(args: GetTotalPriceArgs) {
  const { liters, petrolStation } = args;

  let litersLeft = liters;

  const carafesToBuy: CarafesToBuy = {
    "15L": 0,
    "5L": 0,
    "3L": 0,
    "1L": 0,
  };

  const sortedPrices = Object.keys(petrolStation.prices)
    .map((price) => Number.parseInt(price.replace("L", "")))
    .sort((a, b) => b - a);

  for (const size of sortedPrices) {
    const bottles = Math.floor(litersLeft / size);
    carafesToBuy[`${size}L` as BottleType] = bottles;
    litersLeft -= bottles * size;
  }

  const totalPrice = Object.keys(carafesToBuy).reduce((acc, size) => {
    return (
      acc +
      carafesToBuy[size as BottleType] *
        petrolStation.prices[size as BottleType]
    );
  }, 0);

  return {
    totalPrice,
    carafesToBuy,
  };
}

export function isNumber(str: string) {
  return typeof str === "string" && str.length > 0 && !Number.isNaN(str);
}
