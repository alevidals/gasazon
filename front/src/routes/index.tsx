import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { litersFormSchema } from "@/lib/schemas";
import type { LitersForm } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const form = useForm<LitersForm>({
    resolver: zodResolver(litersFormSchema),
    defaultValues: {
      liters: 40,
    },
  });

  function onSubmit(values: LitersForm) {
    const { liters } = values;
    navigate(`/prices/${liters}`);
  }

  return (
    <div className="flex items-center justify-center flex-1 flex-col">
      <h2 className="text-xl font-bold max-w-lg text-balance text-center mb-24 md:text-3xl">
        Welcome to Gasazon! Enter the number of liters you want to buy to
        calculate the best price.
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full max-w-md"
        >
          <FormField
            control={form.control}
            name="liters"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Liters</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Calculate price
          </Button>
        </form>
      </Form>
    </div>
  );
}
