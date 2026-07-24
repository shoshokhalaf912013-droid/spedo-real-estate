import { PropertyUnit } from "@/data/types/property";

export function getStudios(
  units: PropertyUnit[]
){

  return units.filter(
    unit => unit.type === "Studio"
  );

}

export function getOneBedrooms(
  units: PropertyUnit[]
){

  return units.filter(
    unit => unit.type === "1 Bedroom"
  );

}

export function getTwoBedrooms(
  units: PropertyUnit[]
){

  return units.filter(
    unit => unit.type === "2 Bedrooms"
  );

}

export function getThreeBedrooms(
  units: PropertyUnit[]
){

  return units.filter(
    unit => unit.type === "3 Bedrooms"
  );

}