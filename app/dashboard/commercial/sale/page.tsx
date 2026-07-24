"use client";

import { useMemo, useState } from "react";

import CompactResidentialForm
from "@/features/dashboard/Listings/CompactResidentialForm";

import {
    PROPERTY_TYPES,
} from "@/data/listings/propertyRegistry";

export default function CommercialSalePage() {

    const commercialTypes = useMemo(

        () =>

            PROPERTY_TYPES.filter(

                (property) =>

                    property.sector ===
                    "commercial"

            ),

        []

    );

    const [

        propertyType,

        setPropertyType,

    ] = useState(

        commercialTypes[0]?.id
        ?? "shops"

    );

    const [

        showForm,

        setShowForm,

    ] = useState(false);

    const selectedType =

        commercialTypes.find(

            (item) =>

                item.id === propertyType

        );

    return (

        <main
            className="
                min-h-screen
                bg-[#030712]
                px-6
                py-24
            "
        >

            <div
                className="
                    mx-auto
                    max-w-5xl
                "
            >

                {/* STEP 1 */}

                <section
                    className="
                        rounded-3xl
                        border
                        border-[#D4AF37]/10
                        bg-[#0F172A]
                        p-6
                        shadow-2xl
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-[#F97316]
                                font-black
                                text-black
                            "
                        >
                            1
                        </div>

                        <div>

                            <h1
                                className="
                                    text-3xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                Create Commercial Property
                            </h1>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Select the commercial property
                                type you want to create.
                            </p>

                        </div>

                    </div>

                    <label
                        className="
                            mb-3
                            block
                            text-sm
                            font-bold
                            text-white
                        "
                    >
                        Property Type
                    </label>

                    <select
                        value={propertyType}
                        onChange={(e) => {

                            setPropertyType(
                                e.target.value
                            );

                            setShowForm(false);

                        }}
                        className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-700
                            bg-[#111827]
                            px-4
                            text-sm
                            text-white
                            outline-none
                            transition-all
                            duration-300
                            focus:border-[#D4AF37]
                        "
                    >

                        {

                            commercialTypes.map(

                                (type) => (

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

                    <button
                        type="button"
                        onClick={() =>

                            setShowForm(true)

                        }
                        className="
                            mt-6
                            h-11
                            w-full
                            rounded-xl
                            bg-[#F97316]
                            text-sm
                            font-bold
                            text-black
                            transition-all
                            duration-300
                            hover:brightness-110
                        "
                    >
                        Continue
                    </button>

                </section>

                {

                    showForm
                    && selectedType && (

                        <CompactResidentialForm
                            propertyType={
                                selectedType.label
                            }
                        />

                    )

                }

            </div>

        </main>

    );

}