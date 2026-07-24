import { ModuleRegistry } from "@/core/kernel/ModuleRegistry";
import { SearchModule } from "@/core/modules/SearchModule";

const registry =
    new ModuleRegistry();

const search =
    new SearchModule();

registry.register(
    search
);

console.log("");

console.log("===============================");
console.log("SEARCH MODULE");
console.log("===============================");

console.log(
    registry.count()
);

search.boot();