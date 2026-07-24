import type { PropertyUnit }
from "@/types/property/Property";

import type { PropertyRepository }
from "./PropertyRepository";

export class OnlinePropertyRepository
implements PropertyRepository {

    async getAll():
    Promise<PropertyUnit[]> {

        throw new Error(
            "Online Repository Not Connected Yet."
        );

    }

    async getAvailable():
    Promise<PropertyUnit[]> {

        throw new Error(
            "Online Repository Not Connected Yet."
        );

    }

    async getReserved():
    Promise<PropertyUnit[]> {

        throw new Error(
            "Online Repository Not Connected Yet."
        );

    }

    async getSold():
    Promise<PropertyUnit[]> {

        throw new Error(
            "Online Repository Not Connected Yet."
        );

    }

    async markAsAvailable(
        id: string
    ): Promise<void> {

        console.log(
            "ONLINE AVAILABLE:",
            id
        );

    }

    async markAsReserved(
        id: string
    ): Promise<void> {

        console.log(
            "ONLINE RESERVED:",
            id
        );

    }

    async markAsSold(
        id: string
    ): Promise<void> {

        console.log(
            "ONLINE SOLD:",
            id
        );

    }

}