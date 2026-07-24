import { Container } from "@/core/kernel/Container";

const container = new Container();

container.register(
    "name",
    "SPEDO"
);

container.register(
    "version",
    "1.0.0"
);

console.log("");

console.log("================================");
console.log("CONTAINER TEST");
console.log("================================");

console.log(
    container.resolve("name")
);

console.log(
    container.resolve("version")
);

console.log(
    container.count()
);

console.log(
    container.keys()
);