"use client";

import { useEffect, useState } from "react";

import {
    avatarEngine
}
from "@/core/ai-human";

const EMOJIS = {

    neutral: "👩",

    happy: "😊",

    thinking: "🤔",

    explaining: "🗣️",

    welcome: "👋"

};

export default function SpedoHumanAvatar() {

    const [

        emotion,

        setEmotion

    ] = useState(

        avatarEngine
            .getEmotion()

    );

    useEffect(() => {

        const timer =

            setInterval(

                () => {

                    setEmotion(

                        avatarEngine
                            .getEmotion()

                    );

                },

                500

            );

        return () =>

            clearInterval(
                timer
            );

    }, []);

    return (

        <div

            className="flex flex-col items-center gap-2"

        >

            <div

                className="w-20 h-20 rounded-full
                bg-gradient-to-br
                from-yellow-400
                to-orange-500
                flex items-center
                justify-center
                text-5xl
                shadow-xl"

            >

                {

                    EMOJIS[
                        emotion
                    ]

                }

            </div>

            <div

                className="text-xs
                text-gray-300
                text-center"

            >

                SPEDO AI Assistant

            </div>

        </div>

    );

}