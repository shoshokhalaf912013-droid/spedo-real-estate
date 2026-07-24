import { Kernel } from "@/core/kernel/Kernel";

import { SearchModule } from "@/core/modules/SearchModule";

const kernel =
    new Kernel();

kernel.modules.register(
    new SearchModule()
);

kernel.boot();