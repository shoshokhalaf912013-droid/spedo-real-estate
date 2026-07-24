import type {
    SpeechResult
}
from "./types";

export class SpeechEngine {

    async listen(): Promise<SpeechResult> {

        return new Promise(

            resolve => {

                if (

                    typeof window ===
                    "undefined"

                ) {

                    resolve({

                        success: false,

                        text: ""

                    });

                    return;

                }

                const SpeechRecognition =

                    (window as any)
                        .SpeechRecognition ||

                    (window as any)
                        .webkitSpeechRecognition;

                if (

                    !SpeechRecognition

                ) {

                    resolve({

                        success: false,

                        text: ""

                    });

                    return;

                }

                const recognition =

                    new SpeechRecognition();

                recognition.lang =
                    "ar-EG";

                recognition.continuous =
                    false;

                recognition.interimResults =
                    false;

                recognition.maxAlternatives =
                    1;

                recognition.onresult = (

                    event: any

                ) => {

                    const text =

                        event
                            .results?.[0]?.[0]
                            ?.transcript ||

                        "";

                    resolve({

                        success: true,

                        text

                    });

                };

                recognition.onerror = () => {

                    resolve({

                        success: false,

                        text: ""

                    });

                };

                recognition.start();

            }

        );

    }

}

export const speechEngine =
    new SpeechEngine();

export default speechEngine;