import { app } from "@/core";

app.start();

const result =
    app.search.search({

        bedrooms: 1,

        available: true

    });

console.log("");

console.log("================================");
console.log("APPLICATION TEST");
console.log("================================");

console.log(
    "Found:",
    result.total
);