import { registry } from "./Registry";

import { blueCrestUnits } from "@/data/projects/blue-crest/units";

import { hurghadaHeightsUnits } from "@/data/projects/hurghadaHeights/units";

import { marventoUnits } from "@/data/projects/marvento/units";

registry.register(
    "Blue Crest",
    blueCrestUnits
);

registry.register(
    "Hurghada Heights",
    hurghadaHeightsUnits
);

registry.register(
    "Marvento",
    marventoUnits
);

export { registry };