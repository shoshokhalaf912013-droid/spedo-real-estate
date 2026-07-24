import { PropertyUnit } from "@/data/types/property";

export function sortByPrice(

  units: PropertyUnit[]

) {

  return [...units].sort(

    (a, b) => a.price - b.price

  );

}

export function sortByArea(

  units: PropertyUnit[]

) {

  return [...units].sort(

    (a, b) => a.area - b.area

  );

}