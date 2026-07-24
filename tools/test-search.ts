import { searchEngine } from "@/core/search";
import { SearchSort } from "@/engines/search";

const result = searchEngine.search(
    {
        bedrooms: 1,
        minPrice: 2500000,
        maxPrice: 3000000,
        available: true
    },
    SearchSort.PriceAsc
);

console.log(result.total);

console.table(result.items.slice(0,10));