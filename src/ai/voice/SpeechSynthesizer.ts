export class SpeechSynthesizer {

    speak(
        text: string
    ) {

        if (

            typeof window ===
            "undefined"

        ) {

            return;

        }

        window
            .speechSynthesis
            .cancel();

        const message =

            new SpeechSynthesisUtterance(
                text
            );

        message.lang =
            "ar-EG";

        message.rate =
            1;

        message.pitch =
            1;

        message.volume =
            1;

        window
            .speechSynthesis
            .speak(
                message
            );

    }

}

export const speechSynthesizer =
    new SpeechSynthesizer();

export default speechSynthesizer;