import { Kernel } from "@/core/kernel/Kernel";

export class Runtime {

    constructor(
        private readonly kernel: Kernel
    ) {}

    start(): void {

        console.log("");

        console.log("================================");
        console.log("SPEDO RUNTIME");
        console.log("================================");

        this.kernel.boot();

        console.log("");

        console.log("Runtime Started");

    }

    stop(): void {

        console.log("");

        console.log("Runtime Stopped");

    }

}