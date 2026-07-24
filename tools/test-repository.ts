import { propertyDatabase } from "@/core/database";

console.log("================================");
console.log("SPEDO Repository");
console.log("================================");

console.log("Units :", propertyDatabase.count());

console.log(
    "Available :",
    propertyDatabase.available().length
);

console.log(
    "Blue Crest :",
    propertyDatabase.byProject("Blue Crest").length
);

console.log(
    "Minimum Price :",
    propertyDatabase.minPrice()
);

console.log(
    "Maximum Price :",
    propertyDatabase.maxPrice()
);

console.log("================================");