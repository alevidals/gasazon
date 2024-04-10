import type { litersFormSchema } from "@/lib/schemas";
import type { z } from "zod";

export type BottleType = "1L" | "3L" | "5L" | "15L";

export type PetrolStation = {
  id: string;
  name: string;
  prices: Record<BottleType, number>;
};

export type LitersForm = z.infer<typeof litersFormSchema>;
