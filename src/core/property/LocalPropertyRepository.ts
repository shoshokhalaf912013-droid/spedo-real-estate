import type { PropertyUnit }
from "@/types/property/Property";

import type { PropertyRepository }
from "./PropertyRepository";

export class LocalPropertyRepository
implements PropertyRepository {

    private units:
        PropertyUnit[] = [];

    constructor(
        units: PropertyUnit[] = []
    ) {

        this.units = units;

    }

    async getAll():
    Promise<PropertyUnit[]> {

        return this.units;

    }

    async getAvailable():
    Promise<PropertyUnit[]> {

        return this.units.filter(

            unit =>

                unit.status
                    ?.toLowerCase()

                ===

                "available"

        );

    }

    async getReserved():
    Promise<PropertyUnit[]> {

        return this.units.filter(

            unit =>

                unit.status
                    ?.toLowerCase()

                ===

                "reserved"

        );

    }

    async getSold():
    Promise<PropertyUnit[]> {

        return this.units.filter(

            unit =>

                unit.status
                    ?.toLowerCase()

                ===

                "sold"

        );

    }

    async markAsAvailable(
        id: string
    ): Promise<void> {

        const unit =

            this.units.find(

                item =>

                    item.id === id

            );

        if (unit) {

            unit.status =
                "Available";

        }

    }

    async markAsReserved(
        id: string
    ): Promise<void> {

        const unit =

            this.units.find(

                item =>

                    item.id === id

            );

        if (unit) {

            unit.status =
                "Reserved";

        }

    }

    async markAsSold(
        id: string
    ): Promise<void> {

        const unit =

            this.units.find(

                item =>

                    item.id === id

            );

        if (unit) {

            unit.status =
                "Sold";

        }

    }

}