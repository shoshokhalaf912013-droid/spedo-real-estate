"use client";

import { useState } from "react";

import CompactResidentialForm from "@/features/dashboard/Listings/CompactResidentialForm";

const COMMERCIAL_TYPES = [

    "shops",

    "offices",

    "clinics",

    "pharmacies",

    "cafes",

    "restaurants",

    "hotels",

    "warehouses",

    "factories",

];

function formatLabel(value: string) {

    return value

        .split("-")

        .map(

            word =>

                word.charAt(0).toUpperCase()
                + word.slice(1)

        )

        .join(" ");

}

export default function CommercialPage() {

    const [

        propertyType,

        setPropertyType,

    ] = useState("shops");

    const [

        showForm,

        setShowForm,

    ] = useState(false);

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
                    max-w-6xl
                "
            >

                <section
                    className="
                        rounded-3xl
                        border
                        border-[#D4AF37]/10
                        bg-[#0F172A]
                        p-8
                    "
                >

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
                            mt-3
                            text-slate-400
                        "
                    >
                        Select Commercial Property Type
                    </p>

                    <div
                        className="
                            mt-8
                        "
                    >

                        <label
                            className="
                                mb-3
                                block
                                font-bold
                                text-white
                            "
                        >
                            Commercial Type
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

                                COMMERCIAL_TYPES.map(

                                    type=>(

                                        <option
                                            key={type}
                                            value={type}
                                        >

                                            {

                                                formatLabel(type)

                                            }

                                        </option>

                                    )

                                )

                            }

                        </select>

                    </div>

                    <button

                        type="button"

                        onClick={()=>

                            setShowForm(true)

                        }

                        className="
                            mt-8
                            h-12
                            w-full
                            rounded-xl
                            bg-[#F97316]
                            font-bold
                            text-black
                        "
                    >

                        Continue

                    </button>

                </section>

                {

                    showForm && (

                        <CompactResidentialForm

                            propertyType={propertyType}

                        />

                    )

                }

            </div>

        </main>

    );

}