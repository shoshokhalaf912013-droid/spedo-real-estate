import { KernelModule } from "@/core/kernel/ModuleRegistry";

export class SearchModule implements KernelModule {

    id = "search";

    name = "Search Engine";

    version = "1.0.0";

    boot(): void {

        console.log(
            "Search Engine Started"
        );

    }

    shutdown(): void {

        console.log(
            "Search Engine Stopped"
        );

    }

}