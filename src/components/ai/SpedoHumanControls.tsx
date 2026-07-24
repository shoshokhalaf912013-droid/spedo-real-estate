"use client";

import { useState } from "react";

import {
    humanAssistant
}
from "@/core/ai-human";

interface Props {

    onMessage?: (
        message: string
    ) => void;

}

export default function SpedoHumanControls({

    onMessage

}: Props) {

    const [

        listening,

        setListening

    ] = useState(false);

    const handleMic = async () => {

        try {

            setListening(true);

            const result =

                await humanAssistant
                    .listenAndAsk();

            if (

                onMessage

            ) {

                onMessage(
                    result.text
                );

            }

            if (

                result.voice

            ) {

                humanAssistant
                    .speak(
                        result.text
                    );

            }

        }

        finally {

            setListening(
                false
            );

        }

    };

    return (

        <div

            className="
            flex
            items-center
            justify-center
            gap-3
            mt-3
            "

        >

            {/* MICROPHONE */}

            <button

                onClick={
                    handleMic
                }

                className="
                w-12
                h-12
                rounded-full
                bg-green-600
                hover:bg-green-700
                text-white
                text-xl
                transition
                "

            >

                {

                    listening

                        ? "🎙️"

                        : "🎤"

                }

            </button>

            {/* STOP VOICE */}

            <button

                onClick={() =>

                    humanAssistant
                        .stop()

                }

                className="
                w-12
                h-12
                rounded-full
                bg-red-600
                hover:bg-red-700
                text-white
                text-xl
                transition
                "

            >

                🔇

            </button>

        </div>

    );

}