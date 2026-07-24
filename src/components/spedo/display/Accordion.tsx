"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({
    items,
}: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-5">

            {items.map((item, index) => {

                const open = openIndex === index;

                return (

                    <div
                        key={item.question}
                        className="
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-[#D4AF37]/15
                            bg-gradient-to-br
                            from-[#10213B]
                            via-[#0D1727]
                            to-[#08101B]
                            transition-all
                            duration-300
                        "
                    >

                        <button
                            onClick={() =>
                                setOpenIndex(
                                    open ? null : index
                                )
                            }
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                p-8
                                text-left
                            "
                        >

                            <span
                                className="
                                    text-xl
                                    font-semibold
                                    text-white
                                "
                            >
                                {item.question}
                            </span>

                            <ChevronDown
                                className={`
                                    h-6
                                    w-6
                                    text-[#D4AF37]
                                    transition-transform
                                    duration-300
                                    ${open ? "rotate-180" : ""}
                                `}
                            />

                        </button>

                        <div
                            className={`
                                overflow-hidden
                                transition-all
                                duration-300
                                ${
                                    open
                                        ? "max-h-96"
                                        : "max-h-0"
                                }
                            `}
                        >

                            <div
                                className="
                                    border-t
                                    border-[#D4AF37]/10
                                    px-8
                                    pb-8
                                    pt-6
                                    leading-8
                                    text-slate-300
                                "
                            >
                                {item.answer}
                            </div>

                        </div>

                    </div>

                );

            })}

        </div>
    );
}