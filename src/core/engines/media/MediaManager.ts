import { MediaRegistry } from "./MediaRegistry";

export class MediaManager {

    constructor(

        private registry: MediaRegistry

    ) {}

    async all() {

        return this.registry

            .resolve()

            .getAll();

    }

}