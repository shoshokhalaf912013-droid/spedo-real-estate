import { MediaProvider } from "./MediaContracts";

export class MediaRegistry {

    private provider?: MediaProvider;

    register(

        provider: MediaProvider

    ) {

        this.provider = provider;

    }

    resolve() {

        if (!this.provider) {

            throw new Error(

                "Media Provider not registered."

            );

        }

        return this.provider;

    }

}