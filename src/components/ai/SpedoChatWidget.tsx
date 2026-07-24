"use client";

import {

    useState,
    useEffect,
    useRef

} from "react";

import {

    spedoAssistant

} from "@/ai/SpedoAssistant";

import type {

    ChatMessage

} from "./types";

import SpedoMessage
from "./SpedoMessage";

import SpedoVoiceButton
from "./SpedoVoiceButton";

import SpedoHumanAvatar
from "./SpedoHumanAvatar";

export default function SpedoChatWidget() {

    const [

        open,

        setOpen

    ] = useState(false);

    const [

        text,

        setText

    ] = useState("");

    const [

        loading,

        setLoading

    ] = useState(false);

    const [

        messages,

        setMessages

    ] = useState<ChatMessage[]>([

        {

            id: "welcome",

            role: "assistant",

            text:

                `

مرحباً بك فى SPEDO AI.

يمكنك سؤالى عن:

• Mark Resort
• Blue Crest
• Marvento
• Hurghada Heights

وكل المشاريع الموجودة داخل المنصة.

يمكنك الكتابة أو استخدام الميكروفون.

                `,

            createdAt:

                new Date()
                    .toISOString()

        }

    ]);

    const messagesEndRef =

        useRef<HTMLDivElement>(
            null
        );

    useEffect(

        () => {

            messagesEndRef
                .current
                ?.scrollIntoView({

                    behavior:
                        "smooth"

                });

        },

        [messages]

    );

    async function sendMessage() {

        if (

            !text.trim()

        ) {

            return;

        }

        const question =

            text.trim();

        setLoading(true);

        const userMessage: ChatMessage = {

            id:

                crypto.randomUUID(),

            role:

                "user",

            text:

                question,

            createdAt:

                new Date()
                    .toISOString()

        };

        setMessages(

            current => [

                ...current,

                userMessage

            ]

        );

        setText("");

        try {

	     console.log(
                "CHAT QUESTION:",
                 question
              );

             const answer =

                 spedoAssistant
                 .answer(
                  question
               );

             console.log(
                  "CHAT ANSWER:",
                   answer
               );

            const assistantMessage: ChatMessage = {

                id:

                    crypto.randomUUID(),

                role:

                    "assistant",

                text:

                    answer,

                createdAt:

                    new Date()
                        .toISOString()

            };

            setMessages(

                current => [

                    ...current,

                    assistantMessage

                ]

            );

        }

        catch (

            error

        ) {

            console.error(
                error
            );

            const errorMessage: ChatMessage = {

                id:

                    crypto.randomUUID(),

                role:

                    "assistant",

                text:

                    "حدث خطأ أثناء معالجة طلبك.",

                createdAt:

                    new Date()
                        .toISOString()

            };

            setMessages(

                current => [

                    ...current,

                    errorMessage

                ]

            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <>

            {/* Floating AI Button */}

            <button

                onClick={() =>

                    setOpen(
                        !open
                    )

                }

                className="

                    fixed

                    bottom-6

                    right-6

                    z-[9999]

                    flex

                    h-16

                    w-16

                    items-center

                    justify-center

                    rounded-full

                    bg-gradient-to-r

                    from-blue-600

                    to-cyan-500

                    text-3xl

                    shadow-2xl

                    transition

                    hover:scale-110

                "

            >

                🤖

            </button>

            {

                open && (

                    <div

                        className="

                            fixed

                            bottom-24

                            right-6

                            z-[9999]

                            flex

                            h-[700px]

                            w-[430px]

                            flex-col

                            overflow-hidden

                            rounded-3xl

                            border

                            border-white/10

                            bg-[#08111f]

                            shadow-2xl

                        "

                    >
			{/* HEADER */}

				<div
 				   className="
 				       border-b
  				      border-white/10
 				       bg-[#0f172a]
  				        p-5
 				    "
				 >

    				 <div
    				    className="
     				       flex
     				       items-center
      				       gap-4
     				     "
 			         >

           <SpedoHumanAvatar />

        <div
            className="flex-1"
        >

            <h2
                className="
                    text-xl
                    font-bold
                    text-white
                "
            >

                🤖 SPEDO AI Assistant

            </h2>

            <p
                className="
                    mt-1
                    text-sm
                    text-gray-400
                "
            >

                Your Real Estate Investment Assistant

            </p>

            <p
                className="
                    mt-1
                    text-xs
                    text-cyan-400
                "
            >

                Search Inside SPEDO Projects Only

            </p>

        </div>

    </div>

</div>

                        {/* MESSAGES */}

                        <div

                            className="

                                flex-1

                                space-y-4

                                overflow-y-auto

                                p-4

                            "

                        >

			                            {

                                messages.map(

                                    message => (

                                        <SpedoMessage

                                            key={
                                                message.id
                                            }

                                            message={
                                                message
                                            }

                                        />

                                    )

                                )

                            }

                            {

                                loading && (

                                    <div

                                        className="

                                            flex

                                            justify-start

                                        "

                                    >

                                        <div

                                            className="

                                                rounded-3xl

                                                bg-slate-800

                                                px-4

                                                py-3

                                                text-gray-300

                                            "

                                        >

                                            SPEDO AI is thinking...

                                        </div>

                                    </div>

                                )

                            }

                            <div

                                ref={
                                    messagesEndRef
                                }

                            />

                        </div>

                        {/* INPUT */}

                        <div

                            className="

                                border-t

                                border-white/10

                                p-4

                            "

                        >

                            <div

                                className="

                                    flex

                                    gap-3

                                "

                            >

                                <SpedoVoiceButton

                                    onResult={

                                        text => {

                                            setText(
                                                text
                                            );

                                        }

                                    }

                                />

                                <input

                                    value={text}

                                    onChange={

                                        event =>

                                            setText(
                                                event
                                                    .target
                                                    .value
                                            )

                                    }

                                    onKeyDown={

                                        event => {

                                            if (

                                                event.key ===
                                                "Enter"

                                            ) {

                                                sendMessage();

                                            }

                                        }

                                    }

                                    placeholder="Ask SPEDO AI..."

                                    className="

                                        flex-1

                                        rounded-2xl

                                        border

                                        border-white/10

                                        bg-slate-900

                                        px-4

                                        py-3

                                        text-white

                                        outline-none

                                    "

                                />

                                <button

                                    onClick={
                                        sendMessage
                                    }

                                    disabled={
                                        loading
                                    }

                                    className="

                                        rounded-2xl

                                        bg-blue-600

                                        px-6

                                        text-white

                                        transition

                                        hover:bg-blue-700

                                        disabled:opacity-50

                                    "

                                >

                                    ➤

                                </button>

                            </div>

                        </div>

                    </div>

                )

            }

        </>

    );

}