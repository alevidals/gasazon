import { describe, expect, test } from "vitest";

import type { PetrolStation } from "@/lib/types";
import { getTotalPriceAndAmount } from "@/lib/utils";

const petrolStationsMock: PetrolStation[] = [
  {
    id: "1",
    name: "Petrol Station 1",
    prices: {
      "1L": 3.6,
      "3L": 9.1,
      "5L": 14.2,
      "15L": 40.6,
    },
  },
];

describe("Get total price and amount tests", () => {
  test("should return a specific result when liters is 44", () => {
    const { carafesToBuy } = getTotalPriceAndAmount({
      liters: 44,
      petrolStation: petrolStationsMock[0],
    });

    expect(carafesToBuy).toEqual({
      "15L": 2,
      "5L": 2,
      "3L": 1,
      "1L": 1,
    });
  });

  test("should return a specific result when liters is 20", () => {
    const { carafesToBuy } = getTotalPriceAndAmount({
      liters: 20,
      petrolStation: petrolStationsMock[0],
    });

    expect(carafesToBuy).toEqual({
      "15L": 1,
      "5L": 1,
      "3L": 0,
      "1L": 0,
    });
  });

  test("should return a specific result when liters is 0", () => {
    const { carafesToBuy } = getTotalPriceAndAmount({
      liters: 0,
      petrolStation: petrolStationsMock[0],
    });

    expect(carafesToBuy).toEqual({
      "15L": 0,
      "5L": 0,
      "3L": 0,
      "1L": 0,
    });
  });
});
