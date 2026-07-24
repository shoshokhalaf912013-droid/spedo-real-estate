"use client";

import { useState } from "react";

import SpedoHumanAvatar
from "./SpedoHumanAvatar";

import SpedoHumanControls
from "./SpedoHumanControls";

export default function SpedoHumanWidget() {

    const [

        lastMessage,

        setLastMessage

    ] = useState("");

    return (

        <div

            className="
            flex
            flex-col
            items-center
            gap-4
            p-4
            rounded-2xl
            bg-slate-900/70
            border
            border-yellow-500/20
            "

        >

            <SpedoHumanAvatar />

            <div

                className="
                text-center
                text-sm
                text-gray-300
                max-w-xs
                "

            >

                {

                    lastMessage ||

                    "مرحبًا بك في SPEDO AI Human Assistant"

                }

            </div>

            <SpedoHumanControls

                onMessage={

                    setLastMessage

                }

            />

        </div>

    );

}