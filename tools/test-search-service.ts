import { Kernel } from "@/core/kernel/Kernel";

const kernel =
    new Kernel();

kernel.boot();

const search =
    kernel.container.resolve<any>(
        "search"
    );

const result =
    search.search({

        bedrooms: 1,

        available: true

    });

console.log("");

console.log("===============================");
console.log("SEARCH SERVICE");
console.log("===============================");

console.log(
    "Found:",
    result.total
);