"use client";

import { useMemo } from "react";

import ResidentialTabs from "./components/ResidentialTabs";

import {
    useResidential,
} from "../store/ResidentialContext";

const PROPERTY_TYPES = [

    "Apartments",

    "Studios",

    "Chalets",

    "Villas",

    "Townhouses",

    "Twin Houses",

    "Duplex",

    "Penthouses",

    "Buildings",

    "Residential Land",

];

function toId(value: string) {

    return value
        .toLowerCase()
        .replace(/\s+/g, "-");

}

export default function ResidentialMegaMenu() {

    const {

        currentType,

        setCurrentType,

    } = useResidential();

    const active = useMemo(

        () =>

            PROPERTY_TYPES.find(

                item =>

                    toId(item) === currentType.id

            ) ??

            PROPERTY_TYPES[0],

        [

            currentType.id,

        ]

    );

    return (

        <section
            className="
                border-t
                border-white/10
                bg-[#020817]
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >

                <div
                    className="
                        flex
                        overflow-x-auto
                        border-b
                        border-white/10
                    "
                >

                    {

                        PROPERTY_TYPES.map(

                            item => {

                                const isActive = active === item;

                                return (

                                    <button

                                        key={item}

                                        type="button"

                                        onClick={() =>

                                            setCurrentType(

                                                toId(item)

                                            )

                                        }

                                        className={`
                                            whitespace-nowrap
                                            px-8
                                            py-5
                                            text-sm
                                            font-bold
                                            transition
                                            ${

                                                isActive

                                                    ? "border-b-2 border-[#F97316] text-[#F97316]"

                                                    : "text-slate-400 hover:text-white"

                                            }
                                        `}

                                    >

                                        {item}

                                    </button>

                                );

                            }

                        )

                    }

                </div>

                <div
                    className="
                        grid
                        gap-12
                        py-14
                        lg:grid-cols-[340px_1fr]
                    "
                >

                    <div>

                        <h2
                            className="
                                text-4xl
                                font-black
                                text-white
                                lg:text-5xl
                            "
                        >

                            {currentType.title}

                        </h2>

                        <p
                            className="
                                mt-4
                                text-lg
                                text-[#F97316]
                            "
                        >

                            {currentType.subtitle}

                        </p>

                        <p
                            className="
                                mt-6
                                leading-8
                                text-slate-400
                            "
                        >

                            {currentType.description}

                        </p>

                    </div>

                    <div>

                        <ResidentialTabs />

                    </div>

                </div>

            </div>

        </section>

    );

}