import { z } from "zod";

export const litersFormSchema = z.object({
  liters: z.coerce
    .number({
      invalid_type_error: "Liters must be a number",
    })
    .positive({
      message: "Liters must be a positive number",
    })
    .int({
      message: "Liters must be a whole number",
    }),
});
