import { Container } from "./Container";
import { ModuleRegistry } from "./ModuleRegistry";

import { SearchService } from "@/core/services/SearchService";

export class Kernel {

    readonly container =
        new Container();

    readonly modules =
        new ModuleRegistry();

    boot(): void {

        this.container.register(
            "search",
            new SearchService()
        );

        console.log("");

        console.log("================================");
        console.log("SPEDO KERNEL");
        console.log("================================");

        for (const module of this.modules.all()) {

            module.boot?.();

        }

        console.log("");

        console.log(
            "Kernel Ready"
        );

    }

}