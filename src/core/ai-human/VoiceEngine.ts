import type {
    VoiceOptions
}
from "./types";

export class VoiceEngine {

    speak(
        text: string,
        options: VoiceOptions = {}
    ): void {

        if (

            typeof window ===
            "undefined"

        ) {

            return;

        }

        if (

            !window.speechSynthesis

        ) {

            return;

        }

        // =====================
        // STOP PREVIOUS VOICE
        // =====================

        window
            .speechSynthesis
            .cancel();

        // =====================
        // CREATE UTTERANCE
        // =====================

        const utterance =

            new SpeechSynthesisUtterance(
                text
            );

        utterance.lang =

            options.language ||

            "ar-EG";

        utterance.rate =

            options.rate ||

            1;

        utterance.pitch =

            options.pitch ||

            1;

        utterance.volume =

            options.volume ||

            1;

        // =====================
        // TRY TO FIND ARABIC VOICE
        // =====================

        const voices =

            window
                .speechSynthesis
                .getVoices();

        const arabicVoice =

            voices.find(

                voice =>

                    voice.lang
                        .startsWith(
                            "ar"
                        )

            );

        if (

            arabicVoice

        ) {

            utterance.voice =
                arabicVoice;

        }

        // =====================
        // SPEAK
        // =====================

        window
            .speechSynthesis
            .speak(
                utterance
            );

    }

    stop(): void {

        if (

            typeof window ===
            "undefined"

        ) {

            return;

        }

        window
            .speechSynthesis
            .cancel();

    }

}

export const voiceEngine =
    new VoiceEngine();

export default voiceEngine;