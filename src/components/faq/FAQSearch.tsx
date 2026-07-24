"use client";

import { useMemo, useState } from "react";

import { faq } from "@/data/faq";

export default function FAQSearch() {

    const [search, setSearch] = useState("");

    const results = useMemo(

        () => {

            if (!search.trim()) {

                return [];

            }

            const keyword =
                search.toLowerCase();

            return faq.filter(

                item =>

                    item.question
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    item.answer
                        .toLowerCase()
                        .includes(keyword)

            );

        },

        [search]

    );

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#020202]
            py-24
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.04),transparent_35%)]
                "
            />

            <div
                className="
                relative
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    mb-12
                    text-center
                    "
                >

                    <span
                        className="
                        text-xs
                        uppercase
                        tracking-[4px]
                        text-[#d4af37]
                        "
                    >
                        AI FAQ Search
                    </span>

                    <h2
                        className="
                        mt-6
                        text-5xl
                        font-light
                        text-[#ff8c1a]
                        md:text-6xl
                        "
                    >
                        Search
                        120+
                        Investor
                        Questions
                    </h2>

                    <p
                        className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-gray-400
                        "
                    >
                        Instantly find answers
                        about ownership,
                        investment, legal
                        procedures, residency,
                        taxes and rentals.
                    </p>

                </div>

                <div
                    className="
                    mx-auto
                    max-w-4xl
                    "
                >

                    <input
                        value={search}
                        onChange={
                            event =>
                                setSearch(
                                    event.target.value
                                )
                        }
                        placeholder="Search: Green Contract, ROI, Germany, Airbnb..."
                        className="
                        w-full
                        rounded-[28px]
                        border
                        border-[#d4af37]/10
                        bg-[#111111]
                        px-8
                        py-6
                        text-lg
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-500
                        focus:border-[#d4af37]/30
                        "
                    />

                    {
                        search && (

                            <p
                                className="
                                mt-6
                                text-sm
                                text-gray-500
                                "
                            >
                                {results.length}
                                {" "}
                                results found
                            </p>

                        )
                    }

                    <div
                        className="
                        mt-8
                        space-y-6
                        "
                    >

                        {

                            results.map(

                                (

                                    item,

                                    index

                                ) => (

                                    <div
                                        key={`${index}-${item.question}`}
                                        className="
                                        rounded-[32px]
                                        border
                                        border-[#d4af37]/10
                                        bg-[#111111]
                                        p-8
                                        transition-all
                                        duration-300
                                        hover:border-[#d4af37]/20
                                        hover:bg-[#171717]
                                        "
                                    >

                                        <h3
                                            className="
                                            text-2xl
                                            font-light
                                            leading-tight
                                            text-white
                                            "
                                        >
                                            {item.question}
                                        </h3>

                                        <p
                                            className="
                                            mt-6
                                            whitespace-pre-line
                                            leading-8
                                            text-gray-400
                                            "
                                        >

                                            {
                                                item.answer
                                                    .slice(
                                                        0,
                                                        250
                                                    )
                                            }

                                            {
                                                item.answer.length > 250
                                                    ? "..."
                                                    : ""
                                            }

                                        </p>

                                    </div>

                                )

                            )

                        }

                        {

                            search &&
                            results.length === 0 && (

                                <div
                                    className="
                                    rounded-[32px]
                                    border
                                    border-[#d4af37]/10
                                    bg-[#111111]
                                    p-12
                                    text-center
                                    "
                                >

                                    <h3
                                        className="
                                        text-3xl
                                        font-light
                                        text-white
                                        "
                                    >
                                        No Results Found
                                    </h3>

                                    <p
                                        className="
                                        mt-6
                                        text-gray-400
                                        "
                                    >
                                        Try searching for:

                                        <br />

                                        Green Contract,
                                        ROI,
                                        Germany,
                                        Airbnb,
                                        Residency,
                                        Taxes
                                    </p>

                                </div>

                            )

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}