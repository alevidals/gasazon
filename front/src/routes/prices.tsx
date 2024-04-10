import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { socket } from "@/lib/socket";
import type { PetrolStation } from "@/lib/types";
import { cn, getTotalPrice } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

async function fetchPetrolStationData() {
  const response = await fetch("http://localhost:3000/petrols");

  if (!response.ok) {
    throw new Error("Failed to fetch petrol stations");
  }

  const data = await response.json();

  return data;
}

export default function PricesPage() {
  const { liters } = useParams();

  if (
    !liters ||
    Number.isNaN(Number(liters)) ||
    Number(liters) <= 0 ||
    !Number.isInteger(Number(liters))
  ) {
    return <Navigate to="/" />;
  }

  const [petrolStations, setPetrolStations] = useState<PetrolStation[]>([]);

  const minPrice = Math.min(
    ...petrolStations.map((petrolStation) =>
      getTotalPrice({
        liters: Number(liters),
        petrolStation,
      }),
    ),
  );

  const processedPetrolStations = petrolStations.map((petrolStation) => {
    const totalPrice = getTotalPrice({ liters: Number(liters), petrolStation });

    return {
      ...petrolStation,
      prices: {
        "1L": formatter.format(petrolStation.prices["1L"]),
        "3L": formatter.format(petrolStation.prices["3L"]),
        "5L": formatter.format(petrolStation.prices["5L"]),
        "15L": formatter.format(petrolStation.prices["15L"]),
      },
      totalPrice: formatter.format(totalPrice),
      isCheapest: totalPrice === minPrice,
    };
  });

  const cheapestPetrolStation = processedPetrolStations.find(
    (petrolStation) => petrolStation.isCheapest,
  );

  const { data, isLoading } = useQuery({
    queryKey: ["prices"],
    queryFn: fetchPetrolStationData,
  });

  useEffect(() => {
    function onPetrolStations(data: PetrolStation[]) {
      setPetrolStations(data);
    }

    socket.on("connection", () => {});
    socket.on("petrolStations", onPetrolStations);

    return () => {
      socket.off("connection");
      socket.off("petrolStations", onPetrolStations);
    };
  }, []);

  if (data && petrolStations.length === 0) {
    setPetrolStations(data);
  }

  return (
    <div className="flex-1 mt-12">
      <h1 className="text-center text-2xl mb-12">Prices for {liters} liters</h1>
      {isLoading ? (
        <div className="mx-auto text-center">Loading...</div>
      ) : (
        <>
          <Table className="max-w-2xl mx-auto">
            <TableCaption>
              The prices will be updated automatically each 30 seconds
            </TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead>Petrol Station</TableHead>
                <TableHead className="w-16">1L</TableHead>
                <TableHead className="w-16">3L</TableHead>
                <TableHead className="w-16">5L</TableHead>
                <TableHead className="w-16">15L</TableHead>
                <TableHead className="w-20 text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processedPetrolStations.map((petrolStation) => (
                <TableRow
                  key={petrolStation.id}
                  className={cn({
                    "font-bold bg-green-700": petrolStation.isCheapest,
                  })}
                >
                  <TableCell>{petrolStation.name}</TableCell>
                  <TableCell>{petrolStation.prices["1L"]}</TableCell>
                  <TableCell>{petrolStation.prices["3L"]}</TableCell>
                  <TableCell>{petrolStation.prices["5L"]}</TableCell>
                  <TableCell>{petrolStation.prices["15L"]}</TableCell>
                  <TableCell className="text-right">
                    {petrolStation.totalPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-8 text-center">
            Cheapest petrol station:{" "}
            <span className="font-bold">
              {cheapestPetrolStation?.name} ({cheapestPetrolStation?.totalPrice}
              )
            </span>
          </div>
        </>
      )}
    </div>
  );
}
