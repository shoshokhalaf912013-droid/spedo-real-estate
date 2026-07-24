import type { PropertyUnit }
from "@/types/property/Property";

export interface PropertyRepository {

    getAll():
        Promise<PropertyUnit[]>;

    getAvailable():
        Promise<PropertyUnit[]>;

    getReserved():
        Promise<PropertyUnit[]>;

    getSold():
        Promise<PropertyUnit[]>;

    markAsAvailable(
        id: string
    ): Promise<void>;

    markAsReserved(
        id: string
    ): Promise<void>;

    markAsSold(
        id: string
    ): Promise<void>;

}