import { ModuleRegistry } from "@/core/kernel/ModuleRegistry";

const registry = new ModuleRegistry();

registry.register({
    id: "search",
    name: "Search Engine",
    version: "1.0.0"
});

registry.register({
    id: "projects",
    name: "Project Engine",
    version: "1.0.0"
});

console.log("");

console.log("================================");
console.log("MODULE REGISTRY");
console.log("================================");

console.log("Count:", registry.count());

console.table(registry.all());