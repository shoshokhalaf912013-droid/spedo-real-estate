declare global {

    interface Window {

        webkitSpeechRecognition: any;

        SpeechRecognition: any;

    }

}

export class SpeechRecognizer {

    private recognition: any;

    constructor() {

        const API =

            window.SpeechRecognition ||

            window.webkitSpeechRecognition;

        if (!API) {

            throw new Error(
                "Speech Recognition Not Supported"
            );

        }

        this.recognition = new API();

        this.recognition.lang = "ar-EG";

        this.recognition.continuous = false;

        this.recognition.interimResults = false;

    }

    listen(
        callback: (
            text: string
        ) => void
    ) {

        this.recognition.onresult = (

            event: any

        ) => {

            const text =

                event.results[0][0]
                    .transcript;

            callback(text);

        };

        this.recognition.start();

    }

}

export const speechRecognizer =
    typeof window !== "undefined"

        ? new SpeechRecognizer()

        : null;

export default speechRecognizer;