"use client";

import Link from "next/link";

import { useMemo, useState } from "react";

import allQuestions
from "@/data/faq/allQuestions";

import {
    getRecommendedProject
}
from "@/utils/faqRecommendationEngine";

const quickQuestions = [

    "Can foreigners buy property in Egypt?",

    "What is the ROI in Hurghada?",

    "Can I rent my apartment on Airbnb?",

    "How do I get residency in Egypt?",

    "What taxes do foreign investors pay?"

];

export default function FAQAIAssistant() {

    const [query, setQuery] =
        useState("");

    const answer =
        useMemo(() => {

            if (!query.trim()) {

                return null;

            }

            const normalized =
                query
                    .toLowerCase()
                    .trim();

            return allQuestions.find(

                item =>

                    item.question
                        .toLowerCase()
                        .includes(
                            normalized
                        )

            ) || null;

        }, [query]);

    const recommendation =
        useMemo(() => {

            if (!query.trim()) {

                return null;

            }

            return getRecommendedProject(
                query
            );

        }, [query]);

    const handleQuickQuestion = (
        value: string
    ) => {

        setQuery(value);

    };

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#050505]
            py-24
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top,rgba(212,175,55,.05),transparent_40%)]
                "
            />

            <div
                className="
                relative
                mx-auto
                max-w-6xl
                px-6
                "
            >

                <div
                    className="
                    rounded-[48px]
                    border
                    border-[#d4af37]/10
                    bg-[#0b0b0b]
                    p-12
                    shadow-[0_30px_120px_rgba(0,0,0,.55)]
                    "
                >

                    <div
                        className="
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
                            SPEDO AI
                        </span>

                        <h2
                            className="
                            mt-8
                            text-5xl
                            font-light
                            text-[#ff8c1a]
                            md:text-6xl
                            "
                        >
                            Ask The AI
                            Investor Assistant
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
                            Ask anything about
                            ownership, ROI,
                            legal procedures,
                            taxes, rentals and
                            living in the Red Sea.
                        </p>

                    </div>
			                    <div
                        className="
                        mt-12
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-4
                        "
                    >

                        {

                            quickQuestions.map(

                                question => (

                                    <button
                                        key={question}
                                        onClick={() =>
                                            handleQuickQuestion(
                                                question
                                            )
                                        }
                                        className="
                                        rounded-full
                                        border
                                        border-[#d4af37]/20
                                        bg-[#0f0f0f]
                                        px-6
                                        py-3
                                        text-sm
                                        font-medium
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:border-[#d4af37]/40
                                        hover:bg-[#171717]
                                        "
                                    >
                                        {question}
                                    </button>

                                )

                            )

                        }

                    </div>

                    <div
                        className="
                        mt-12
                        "
                    >

                        <input
                            type="text"
                            value={query}
                            onChange={event =>
                                setQuery(
                                    event.target.value
                                )
                            }
                            placeholder="
                            Ask SPEDO AI anything...
                            "
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
                            transition-all
                            duration-300
                            placeholder:text-gray-500
                            focus:border-[#d4af37]/40
                            "
                        />

                    </div>

                    {

                        answer && (

                            <div
                                className="
                                mt-10
                                rounded-[32px]
                                border
                                border-[#d4af37]/10
                                bg-[#111111]
                                p-8
                                "
                            >

                                <span
                                    className="
                                    text-xs
                                    uppercase
                                    tracking-[3px]
                                    text-[#d4af37]
                                    "
                                >
                                    AI Answer
                                </span>

                                <h3
                                    className="
                                    mt-4
                                    text-2xl
                                    font-semibold
                                    text-[#ff8c1a]
                                    "
                                >
                                    {answer.question}
                                </h3>

                                <p
                                    className="
                                    mt-6
                                    whitespace-pre-line
                                    text-lg
                                    leading-8
                                    text-gray-300
                                    "
                                >
                                    {answer.answer}
                                </p>

                            </div>

                        )

                    }
			                    {

                        recommendation && (

                            <div
                                className="
                                mt-8
                                rounded-[32px]
                                border
                                border-[#f97316]/20
                                bg-[#1a1208]
                                p-8
                                shadow-[0_20px_60px_rgba(249,115,22,.12)]
                                "
                            >

                                <span
                                    className="
                                    text-xs
                                    uppercase
                                    tracking-[3px]
                                    text-[#f97316]
                                    "
                                >
                                    Recommended Project
                                </span>

                                <h3
                                    className="
                                    mt-4
                                    text-3xl
                                    font-bold
                                    text-white
                                    "
                                >
                                    {recommendation.name}
                                </h3>

                                <p
                                    className="
                                    mt-3
                                    text-sm
                                    uppercase
                                    tracking-[2px]
                                    text-[#d4af37]
                                    "
                                >
                                    {recommendation.location}
                                </p>

                                <div
                                    className="
                                    mt-6
                                    inline-flex
                                    rounded-full
                                    bg-[#f97316]
                                    px-5
                                    py-2
                                    text-sm
                                    font-bold
                                    text-black
                                    "
                                >
                                    {recommendation.roi}
                                </div>

                                <p
                                    className="
                                    mt-6
                                    leading-8
                                    text-gray-300
                                    "
                                >
                                    {recommendation.reason}
                                </p>

                                <Link
                                    href={recommendation.url}
                                    className="
                                    mt-8
                                    inline-flex
                                    rounded-full
                                    border
                                    border-[#d4af37]/20
                                    px-8
                                    py-4
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-[2px]
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:border-[#d4af37]/40
                                    hover:bg-[#171717]
                                    "
                                >
                                    View Project
                                </Link>

                            </div>

                        )

                    }

                </div>

            </div>

        </section>

    );

}