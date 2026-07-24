"use client";

import { faq }
from "@/data/faq";

export default function FAQAccordion() {

    return (

        <section
            className="
            bg-[#f4efe6]
            pb-32
            "
        >

            <div
                className="
                mx-auto
                max-w-7xl
                px-6
                grid
                lg:grid-cols-[320px_1fr]
                gap-8
                "
            >

                <aside
                    className="
                    h-fit
                    rounded-[32px]
                    bg-white
                    p-8
                    shadow-sm
                    "
                >

                    <h3
                        className="
                        mb-8
                        text-3xl
                        font-light
                        "
                    >
                        FAQ Categories
                    </h3>

                    <div
                        className="
                        flex
                        flex-col
                        gap-3
                        "
                    >

                        <button
                            className="
                            rounded-full
                            bg-[#0f3b46]
                            px-5
                            py-3
                            text-left
                            text-white
                            "
                        >
                            All Questions
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Investment
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            European Buyers
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Ownership
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Payments
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Legal
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Residency
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Rental
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            After Sales
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Safety
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            px-5
                            py-3
                            text-left
                            transition
                            hover:border-[#d4af37]
                            "
                        >
                            Viewings
                        </button>

                    </div>

                </aside>

                <div
                    className="
                    flex
                    flex-col
                    gap-5
                    "
                >

                    {

                        faq.map(

                            (

                                item,

                                index

                            ) => (

                                <details
                                    key={`${index}-${item.question}`}
                                    className="
                                    rounded-[28px]
                                    bg-white
                                    p-8
                                    shadow-sm
                                    "
                                >

                                    <summary
                                        className="
                                        flex
                                        cursor-pointer
                                        items-center
                                        gap-6
                                        list-none
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            h-12
                                            w-12
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#d4af37]
                                            font-bold
                                            text-black
                                            "
                                        >
                                            {

                                                String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )

                                            }
                                        </div>

                                        <span
                                            className="
                                            text-lg
                                            font-medium
                                            "
                                        >
                                            {item.question}
                                        </span>

                                    </summary>

                                    <div
                                        className="
                                        mt-8
                                        whitespace-pre-line
                                        leading-8
                                        text-gray-700
                                        "
                                    >
                                        {item.answer}
                                    </div>

                                </details>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}