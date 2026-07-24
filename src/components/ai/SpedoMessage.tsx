"use client";

import type {

    ChatMessage

} from "./types";

interface Props {

    message: ChatMessage;

}

export default function SpedoMessage({

    message

}: Props) {

    const isUser =

        message.role ===
        "user";

    return (

        <div

            className={

                isUser

                    ? "flex justify-end"

                    : "flex justify-start"

            }

        >

            <div

                className={

                    isUser

                        ?

                        `

                        max-w-[80%]

                        rounded-3xl

                        bg-blue-600

                        px-4

                        py-3

                        text-white

                        shadow-lg

                        `

                        :

                        `

                        max-w-[80%]

                        rounded-3xl

                        bg-slate-800

                        px-4

                        py-3

                        text-gray-100

                        shadow-lg

                        `

                }

            >

                <p

                    className="

                        whitespace-pre-line

                    "

                >

                    {

                        message.text

                    }

                </p>

            </div>

        </div>

    );

}