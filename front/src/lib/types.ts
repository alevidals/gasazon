export type BottleType = "1L" | "3L" | "5L" | "15L";

export type PetrolStation = {
  name: string;
  prices: Record<BottleType, number>;
};
