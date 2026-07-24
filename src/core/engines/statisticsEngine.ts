import { PropertyUnit } from "@/data/types/property";

export function getAveragePrice(
  units: PropertyUnit[]
): number {

  if (!units.length) return 0;

  const total = units.reduce(
    (sum, unit) => sum + unit.price,
    0
  );

  return total / units.length;

}