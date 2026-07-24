import { PropertyRepository } from "./propertyRepository";

import { database } from "@/data/database";

export const propertyDatabase =
    new PropertyRepository(database);