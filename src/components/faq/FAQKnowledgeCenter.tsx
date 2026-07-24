"use client";

import { useMemo, useState } from "react";

import ownershipFAQ from "@/data/faq/ownership";
import legalFAQ from "@/data/faq/legal";
import paymentFAQ from "@/data/faq/payment";
import investmentFAQ from "@/data/faq/investment";
import rentalFAQ from "@/data/faq/rental";
import residencyFAQ from "@/data/faq/residency";
import europeanBuyersFAQ from "@/data/faq/europeanBuyers";
import viewingFAQ from "@/data/faq/viewing";
import livingInHurghadaFAQ from "@/data/faq/livingInHurghada";
import roiFAQ from "@/data/faq/roiFAQ";
import taxesFAQ from "@/data/faq/taxesFAQ";
import safetyFAQ from "@/data/faq/safety";
import afterSalesFAQ from "@/data/faq/afterSales";
import buyingProcessFAQ from "@/data/faq/buyingProcessFAQ";

import FAQActionButtons
from "./FAQActionButtons";

const faqSections = [

    {
        id: "ownership",
        icon: "🏠",
        title: "Ownership",
        items: ownershipFAQ
    },

    {
        id: "legal",
        icon: "⚖️",
        title: "Legal",
        items: legalFAQ
    },

    {
        id: "payments",
        icon: "💳",
        title: "Payments",
        items: paymentFAQ
    },

    {
        id: "investment",
        icon: "📈",
        title: "Investment",
        items: investmentFAQ
    },

    {
        id: "rental",
        icon: "🏖️",
        title: "Rental",
        items: rentalFAQ
    },

    {
        id: "residency",
        icon: "🛂",
        title: "Residency",
        items: residencyFAQ
    },

    {
        id: "european-buyers",
        icon: "🇪🇺",
        title: "European Buyers",
        items: europeanBuyersFAQ
    },

    {
        id: "viewing",
        icon: "👀",
        title: "Viewing Trips",
        items: viewingFAQ
    },

    {
        id: "living",
        icon: "🌴",
        title: "Living In Hurghada",
        items: livingInHurghadaFAQ
    },

    {
        id: "roi",
        icon: "📊",
        title: "ROI",
        items: roiFAQ
    },

    {
        id: "taxes",
        icon: "💰",
        title: "Taxes",
        items: taxesFAQ
    },

    {
        id: "safety",
        icon: "🛡️",
        title: "Safety",
        items: safetyFAQ
    },

    {
        id: "after-sales",
        icon: "🔧",
        title: "After Sales",
        items: afterSalesFAQ
    },

    {
        id: "buying-process",
        icon: "🛒",
        title: "Buying Process",
        items: buyingProcessFAQ
    }

];

export default function FAQKnowledgeCenter() {

    const [activeSection, setActiveSection] =
        useState("ownership");

    const [openQuestion, setOpenQuestion] =
        useState(
            ownershipFAQ[0]?.id
        );

    const currentSection = useMemo(

        () =>

            faqSections.find(

                section =>

                    section.id ===
                    activeSection

            ),

        [activeSection]

    );

    const handleSectionChange = (

        sectionId: string

    ) => {

        setActiveSection(
            sectionId
        );

        const section =
            faqSections.find(

                item =>
                    item.id ===
                    sectionId

            );

        setOpenQuestion(

            section?.items[0]?.id
            || ""

        );

    };
    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#020202]
            py-32
            "
        >

            <div
                className="
                mx-auto
                max-w-[1600px]
                px-8
                xl:px-12
                "
            >

                <div className="mb-20 text-center">

                    <span
                        className="
                        text-xs
                        uppercase
                        tracking-[4px]
                        text-[#d4af37]
                        "
                    >
                        SPEDO KNOWLEDGE CENTER
                    </span>

                    <h2
                        className="
                        mt-6
                        text-5xl
                        font-light
                        text-white
                        md:text-6xl
                        "
                    >
                        120+ Questions
                        For International
                        Investors
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
                        Explore ownership,
                        investment, legal,
                        residency, taxation,
                        rentals and every step
                        of the Red Sea property
                        journey.
                    </p>

                </div>

                <div
                    className="
                    grid
                    gap-12
                    lg:grid-cols-[340px_minmax(0,1fr)]
                    xl:grid-cols-[360px_minmax(0,1fr)]
                    "
                >

                    <aside
                        className="
                        top-28
                        h-fit
                        rounded-[40px]
                        border
                        border-[#d4af37]/10
                        bg-[#070707]
                        p-8
                        lg:sticky
                        shadow-[0_20px_60px_rgba(0,0,0,.45)]
                        "
                    >

                        <div className="space-y-4">

                            {

                                faqSections.map(

                                    section => (

                                        <button
                                            key={section.id}
                                            onClick={() =>
                                                handleSectionChange(
                                                    section.id
                                                )
                                            }
                                            className={`
                                            w-full
                                            rounded-[24px]
                                            border
                                            px-6
                                            py-5
                                            text-left
                                            transition-all
                                            duration-300

                                            ${
                                                activeSection === section.id
                                                    ? `
                                                    border-[#d4af37]/30
                                                    bg-[#17130a]
                                                    shadow-[0_0_25px_rgba(212,175,55,.08)]
                                                    `
                                                    : `
                                                    border-[#d4af37]/5
                                                    bg-[#090909]
                                                    hover:border-[#d4af37]/20
                                                    hover:bg-[#121212]
                                                    `
                                            }
                                            `}
                                        >

                                            <div
                                                className="
                                                flex
                                                items-center
                                                justify-between
                                                gap-4
                                                "
                                            >

                                                <div
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-4
                                                    "
                                                >

                                                    <span
                                                        className="
                                                        text-2xl
                                                        "
                                                    >
                                                        {section.icon}
                                                    </span>

                                                    <span
                                                        className="
                                                        text-base
                                                        font-medium
                                                        text-white
                                                        "
                                                    >
                                                        {section.title}
                                                    </span>

                                                </div>

                                                <span
                                                    className="
                                                    rounded-full
                                                    bg-white/5
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    text-[#d4af37]
                                                    "
                                                >
                                                    {
                                                        section.items
                                                            .length
                                                    }
                                                </span>

                                            </div>

                                        </button>

                                    )

                                )

                            }

                        </div>

                    </aside>

                    <div
                        className="
                        rounded-[40px]
                        border
                        border-[#d4af37]/10
                        bg-[#070707]
                        p-12
                        xl:p-14
                        shadow-[0_20px_60px_rgba(0,0,0,.45)]
                        "
                    >

                        <h3
                            className="
                            text-5xl
                            font-light
                            text-[#ff8c1a]
                            "
                        >
                            {
                                currentSection?.title
                            }
                        </h3>

                        <p
                            className="
                            mt-4
                            text-gray-400
                            "
                        >
                            {
                                currentSection?.items.length
                            } Questions
                        </p>

                        <div
                            className="
                            mt-14
                            space-y-6
                            "
                        >

			                        {

                            currentSection?.items.map(

                                item => (

                                    <div
                                        key={item.id}
                                        className="
                                        overflow-hidden
                                        rounded-[32px]
                                        border
                                        border-[#d4af37]/10
                                        bg-[#111111]
                                        transition-all
                                        duration-300
                                        hover:border-[#d4af37]/20
                                        hover:bg-[#171717]
                                        "
                                    >

                                        <button
                                            onClick={() =>
                                                setOpenQuestion(
                                                    item.id
                                                )
                                            }
                                            className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-6
                                            p-10
                                            text-left
                                            "
                                        >

                                            <h4
                                                className="
                                                text-2xl
                                                font-light
                                                leading-9
                                                text-white
                                                "
                                            >
                                                {
                                                    item.question
                                                }
                                            </h4>

                                            <span
                                                className="
                                                text-3xl
                                                text-[#d4af37]
                                                "
                                            >
                                                {
                                                    openQuestion ===
                                                    item.id
                                                        ? "−"
                                                        : "+"
                                                }
                                            </span>

                                        </button>

                                        {

                                            openQuestion ===
                                            item.id && (

                                                <div
                                                    className="
                                                    border-t
                                                    border-white/5
                                                    px-10
                                                    pb-10
                                                    pt-8
                                                    "
                                                >

                                                    <div
                                                        className="
                                                        whitespace-pre-line
                                                        leading-9
                                                        text-gray-300
                                                        "
                                                    >
                                                        {
                                                            item.answer
                                                        }
                                                    </div>

                                                    <FAQActionButtons />

                                                </div>

                                            )

                                        }

                                    </div>

                                )

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

        </section>

    );

}