"use client";

import { useMemo, useState } from "react";

import {
    useResidential,
} from "../../store/ResidentialContext";

import ResidentialOverview
from "./ResidentialOverview";

import ResidentialInformation
from "./ResidentialInformation";

import ResidentialFeatures
from "./ResidentialFeatures";

import ResidentialAdvantages
from "./ResidentialAdvantages";

import ResidentialGallery
from "./ResidentialGallery";

import ResidentialVideo
from "./ResidentialVideo";

import ResidentialFAQ
from "./ResidentialFAQ";

const TABS = [

    "Overview",

    "Specifications",

    "Features",

    "Advantages",

    "Gallery",

    "Video",

    "FAQ",

] as const;

type Tab = typeof TABS[number];

export default function ResidentialTabs() {

    const {

        currentType,

    } = useResidential();

    const [

        active,

        setActive,

    ] = useState<Tab>(

        "Overview"

    );

    const content = useMemo(() => {

        switch (active) {

            case "Overview":

                return (

                    <ResidentialOverview

                        data={currentType}

                    />

                );

            case "Specifications":

                return (

                    <ResidentialInformation

                        data={currentType}

                    />

                );

            case "Features":

                return (

                    <ResidentialFeatures

                        features={currentType.features}

                    />

                );

            case "Advantages":

                return (

                    <ResidentialAdvantages

                        advantages={currentType.advantages}

                    />

                );

            case "Gallery":

                return (

                    <ResidentialGallery

                        images={currentType.gallery}

                    />

                );

            case "Video":

                return (

                    <ResidentialVideo

                        video={currentType.video}

                    />

                );

            case "FAQ":

                return (

                    <ResidentialFAQ

                        faq={currentType.faq}

                    />

                );

        }

    }, [

        active,

        currentType,

    ]);

    return (

        <section>

            <div
                className="
                    mb-8
                    flex
                    flex-wrap
                    gap-3
                "
            >

                {

                    TABS.map(

                        tab => {

                            const isActive = active === tab;

                            return (

                                <button

                                    key={tab}

                                    type="button"

                                    onClick={() =>

                                        setActive(tab)

                                    }

                                    className={`
                                        rounded-full
                                        px-6
                                        py-3
                                        text-sm
                                        font-bold
                                        transition
                                        ${

                                            isActive

                                                ? "bg-[#F97316] text-black"

                                                : "border border-white/10 bg-[#08101E] text-white hover:border-[#F97316]"

                                        }
                                    `}

                                >

                                    {tab}

                                </button>

                            );

                        }

                    )

                }

            </div>

            {content}

        </section>

    );

}