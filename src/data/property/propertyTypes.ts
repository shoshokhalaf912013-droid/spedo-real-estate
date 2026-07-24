export const RESIDENTIAL_SALE_TYPES = [

    "apartments",
    "studios",
    "chalets",
    "villas",
    "townhouses",
    "twin-houses",
    "duplex",
    "penthouses",
    "buildings",
    "residential-land",

] as const;

export const RESIDENTIAL_RENT_TYPES = [

    "apartments",
    "studios",
    "chalets",
    "villas",
    "townhouses",
    "twin-houses",
    "duplex",
    "penthouses",

] as const;

export const COMMERCIAL_SALE_TYPES = [

    "shops",
    "bazaars",
    "offices",
    "clinics",
    "pharmacies",
    "cafes",
    "restaurants",
    "hotels",
    "warehouses",
    "factories",
    "commercial-land",

] as const;

export const COMMERCIAL_RENT_TYPES = [

    "shops",
    "bazaars",
    "offices",
    "clinics",
    "pharmacies",
    "cafes",
    "restaurants",
    "hotels",
    "warehouses",

] as const;

export function formatPropertyType(
    value: string,
) {

    return value
        .split("-")
        .map(

            word =>

                word.charAt(0).toUpperCase()
                + word.slice(1)

        )
        .join(" ");

}