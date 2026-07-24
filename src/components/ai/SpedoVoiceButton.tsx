"use client";

import { voiceAssistant } from "@/ai/voice/VoiceAssistant";

interface Props {

    onResult: (
        text: string
    ) => void;

}

interface VoiceResult {

    text: string;

}

export default function SpedoVoiceButton({

    onResult

}: Props) {

    async function startVoice() {

        try {

            const result =

                await voiceAssistant.listen() as
                    VoiceResult | null | undefined;

            if (

                !result ||
                typeof result.text !== "string" ||
                !result.text.trim()

            ) {

                return;

            }

            onResult(
                result.text.trim()
            );

        }

        catch (

            error

        ) {

            console.error(
                error
            );

            alert(
                "Voice Assistant Error"
            );

        }

    }

    return (

        <button

            type="button"

            onClick={
                startVoice
            }

            className="

                rounded-2xl

                bg-emerald-600

                px-5

                py-3

                text-xl

                text-white

                transition

                hover:bg-emerald-700

            "

            title="Voice Assistant"

        >

            🎤

        </button>

    );

}