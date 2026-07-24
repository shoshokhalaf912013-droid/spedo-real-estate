import { Kernel } from "./kernel/Kernel";

import { Runtime } from "./runtime/Runtime";

import { SearchService } from "./services/SearchService";

export class Application {

    readonly kernel;

    readonly runtime;

    constructor() {

        this.kernel = new Kernel();

        this.runtime = new Runtime(
            this.kernel
        );

    }

    start(): void {

        this.runtime.start();

    }

    get search(): SearchService {

        return this.kernel.container.resolve<SearchService>(
            "search"
        );

    }

}