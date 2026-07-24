import { eventBus } from "@/core/events";

console.log("");
console.log("================================");
console.log("SPEDO EVENT BUS");
console.log("================================");

eventBus.on<{ message: string }>(

    "system.ready",

    (event) => {

        console.log("Event Received");

        console.log(event.type);

        console.log(event.payload.message);

    }

);

eventBus.emit(

    "system.ready",

    {

        message: "SPEDO Core Started"

    }

);