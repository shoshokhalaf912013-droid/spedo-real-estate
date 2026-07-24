import type { PropertyRepository }
from "./PropertyRepository";

export class PropertyStatusEngine {

    constructor(

        private readonly repository:
            PropertyRepository

    ) {}

    async markAsAvailable(
        id: string
    ): Promise<void> {

        await this.repository
            .markAsAvailable(id);

    }

    async markAsReserved(
        id: string
    ): Promise<void> {

        await this.repository
            .markAsReserved(id);

    }

    async markAsSold(
        id: string
    ): Promise<void> {

        await this.repository
            .markAsSold(id);

    }

    async getAvailable() {

        return this.repository
            .getAvailable();

    }

    async getReserved() {

        return this.repository
            .getReserved();

    }

    async getSold() {

        return this.repository
            .getSold();

    }

    async getAll() {

        return this.repository
            .getAll();

    }

}