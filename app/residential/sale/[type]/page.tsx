"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const RESIDENTIAL_TYPES = [

    "apartments",
    "studios",
    "chalets",
    "villas",
    "townhouses",
    "twin-houses",
    "duplex",
    "penthouses",
    "buildings",
    "residential-land",

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

export default function ResidentialSalePage() {

    const router = useRouter();

    const [

        propertyType,

        setPropertyType,

    ] = useState("apartments");

    function handleContinue() {

        router.push(

            `/dashboard/listings/new?sector=residential&category=sale&type=${propertyType}`

        );

    }

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
                    max-w-2xl
                "
            >

                <section
                    className="
                        rounded-3xl
                        border
                        border-[#D4AF37]/10
                        bg-[#0F172A]
                        p-8
                        shadow-2xl
                    "
                >

                    <h1
                        className="
                            text-3xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        Create Residential Property
                    </h1>

                    <p
                        className="
                            mt-3
                            text-sm
                            text-slate-400
                        "
                    >
                        Select the residential property type
                        you want to create.
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
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Property Type
                        </label>

                        <select
                            value={propertyType}
                            onChange={(e) =>
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
                                text-sm
                                text-white
                                outline-none
                                transition
                                focus:border-[#D4AF37]
                            "
                        >

                            {

                                RESIDENTIAL_TYPES.map(
                                    (type) => (

                                        <option
                                            key={type}
                                            value={type}
                                        >
                                            {
                                                formatLabel(
                                                    type
                                                )
                                            }
                                        </option>

                                    )
                                )

                            }

                        </select>

                    </div>

                    <button
                        onClick={handleContinue}
                        className="
                            mt-8
                            h-12
                            w-full
                            rounded-xl
                            bg-[#F97316]
                            text-sm
                            font-bold
                            text-black
                            transition
                            hover:brightness-110
                        "
                    >
                        Continue
                    </button>

                </section>

            </div>

        </main>

    );

}