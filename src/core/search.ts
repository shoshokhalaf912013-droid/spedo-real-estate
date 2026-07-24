import { propertyDatabase } from "./database";

import { SearchEngine } from "@/engines/search";

export const searchEngine =
    new SearchEngine(
        propertyDatabase
    );