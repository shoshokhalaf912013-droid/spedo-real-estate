"use client";

import { useMemo, useState } from "react";

import CompactResidentialForm
from "@/features/dashboard/Listings/CompactResidentialForm";

import {
    PROPERTY_TYPES,
} from "@/data/listings/propertyRegistry";

export default function ResidentialSalePage() {

    const residentialTypes = useMemo(

        () =>

            PROPERTY_TYPES.filter(

                (property) =>

                    property.sector === "residential"

            ),

        []

    );

    const [

        propertyType,

        setPropertyType,

    ] = useState(

        residentialTypes[0]?.id ??

        "apartments"

    );

    const selectedType = useMemo(

        () =>

            residentialTypes.find(

                (item) =>

                    item.id === propertyType

            ),

        [

            residentialTypes,

            propertyType,

        ]

    );

    return (

        <main
            className="
                min-h-screen
                bg-[#030712]
                px-6
                py-12
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >

                {/* PAGE HEADER */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-4
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.25em]
                                text-[#D4AF37]
                            "
                        >
                            Dashboard / Residential / Sale
                        </p>

                        <h1
                            className="
                                mt-2
                                text-4xl
                                font-black
                                text-white
                            "
                        >
                            Create Residential Property
                        </h1>

                        <p
                            className="
                                mt-3
                                max-w-3xl
                                text-slate-400
                            "
                        >
                            Create a new residential listing
                            and complete all information before
                            publishing it on SPEDO.
                        </p>

                    </div>

                    <div
                        className="
                            flex
                            gap-3
                        "
                    >

                        <button
                            type="button"
                            className="
                                rounded-xl
                                border
                                border-slate-700
                                px-6
                                py-3
                                font-bold
                                text-white
                            "
                        >
                            Save Draft
                        </button>

                        <button
                            type="button"
                            className="
                                rounded-xl
                                bg-[#F97316]
                                px-6
                                py-3
                                font-bold
                                text-black
                            "
                        >
                            Publish
                        </button>

                    </div>

                </div>

                {/* PROPERTY TYPE */}

                <section
                    className="
                        mb-8
                        rounded-3xl
                        border
                        border-[#D4AF37]/10
                        bg-[#0F172A]
                        p-6
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-end
                        "
                    >

                        <div
                            className="
                                flex-1
                            "
                        >

                            <label
                                className="
                                    mb-3
                                    block
                                    text-sm
                                    font-bold
                                    text-white
                                "
                            >
                                Residential Property Type
                            </label>

                            <select

                                value={propertyType}

                                onChange={(e)=>

                                    setPropertyType(

                                        e.target.value

                                    )

                                }

                                className="
                                    h-12
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-700
                                    bg-[#111827]
                                    px-4
                                    text-white
                                "
                            >

                                {

                                    residentialTypes.map(

                                        (type)=>(

                                            <option

                                                key={type.id}

                                                value={type.id}

                                            >

                                                {type.label}

                                            </option>

                                        )

                                    )

                                }

                            </select>

                        </div>

                        <div
                            className="
                                rounded-2xl
                                bg-slate-900
                                px-6
                                py-4
                            "
                        >

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-slate-500
                                "
                            >
                                Selected Type
                            </p>

                            <h3
                                className="
                                    mt-2
                                    text-xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                {selectedType?.label}
                            </h3>

                        </div>

                    </div>

                </section>

		                {/* PROPERTY FORM */}

                {

                    selectedType && (

                        <CompactResidentialForm

                            propertyType={selectedType.label}

                        />

                    )

                }

            </div>

        </main>

    );

}