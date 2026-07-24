import { MediaManager } from "./MediaManager";
import { MediaRegistry } from "./MediaRegistry";

export class MediaEngine {

    readonly registry =
        new MediaRegistry();

    readonly manager =
        new MediaManager(

            this.registry

        );

    boot() {

        console.log(

            "Media Engine Ready"

        );

    }

}