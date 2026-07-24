import { Kernel } from "@/core/kernel/Kernel";

import { Runtime } from "@/core/runtime/Runtime";

import { SearchModule } from "@/core/modules/SearchModule";

const kernel = new Kernel();

kernel.modules.register(
    new SearchModule()
);

const runtime =
    new Runtime(kernel);

runtime.start();