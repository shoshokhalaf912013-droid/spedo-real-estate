import { speechEngine }
from "./SpeechEngine";

import { voiceEngine }
from "./VoiceEngine";

import { avatarEngine }
from "./AvatarEngine";

import { spedoAssistant }
from "@/ai/SpedoAssistant";

import type {
    HumanAssistantResponse
}
from "./types";

export class HumanAssistant {

    // =====================
    // ASK TEXT
    // =====================

    ask(
        question: string
    ): HumanAssistantResponse {

        console.log(
            ""
        );

        console.log(
            "========================"
        );

        console.log(
            "HUMAN ASSISTANT"
        );

        console.log(
            "QUESTION:",
            question
        );

        console.log(
            "========================"
        );

        const answer =

            spedoAssistant
                .answer(
                    question
                );

        // =====================
        // EMOTION DETECTION
        // =====================

        let emotion =
            "explaining";

        const q =
            question
                .toLowerCase();

        if (

            q.includes(
                "السلام"
            )

            ||

            q.includes(
                "مرحبا"
            )

            ||

            q.includes(
                "hello"
            )

        ) {

            emotion =
                "welcome";

        }

        if (

            q.includes(
                "شكرا"
            )

            ||

            q.includes(
                "thank"
            )

        ) {

            emotion =
                "happy";

        }

        avatarEngine.setEmotion(
            emotion as any
        );

        // =====================
        // RESPONSE
        // =====================

        return {

            text:
                answer,

            voice:
                true,

            openResults:
                false,

            avatarEmotion:
                avatarEngine
                    .getEmotion()

        };

    }

    // =====================
    // ASK WITH VOICE
    // =====================

    async listenAndAsk():

        Promise<
            HumanAssistantResponse
        > {

        const speech =

            await speechEngine
                .listen();

        if (

            !speech.success

        ) {

            return {

                text:

                    "لم أتمكن من سماع الصوت، حاول مرة أخرى.",

                voice:
                    false,

                openResults:
                    false,

                avatarEmotion:
                    "thinking"

            };

        }

        return this.ask(
            speech.text
        );

    }

    // =====================
    // SPEAK
    // =====================

    speak(
        text: string
    ): void {

        voiceEngine.speak(

            text,

            {

                language:
                    "ar-EG",

                rate:
                    1,

                pitch:
                    1,

                volume:
                    1

            }

        );

    }

    // =====================
    // STOP
    // =====================

    stop(): void {

        voiceEngine.stop();

    }

}
    
export const humanAssistant =
    new HumanAssistant();

export default humanAssistant;