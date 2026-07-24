"use client";

import type {
    ResidentialType,
} from "../../data/types";

interface Props {

    data: ResidentialType;

}

const SPECIFICATIONS = [

    {
        title: "Floor",
        key: "floors",
    },

    {
        title: "View",
        key: "views",
    },

    {
        title: "Finishing",
        key: "finishing",
    },

    {
        title: "Furnishing",
        key: "furnishing",
    },

    {
        title: "Parking",
        key: "parking",
    },

    {
        title: "Balcony",
        key: "balcony",
    },

    {
        title: "Garden",
        key: "garden",
    },

    {
        title: "Roof",
        key: "roof",
    },

    {
        title: "Smart Home",
        key: "smartHome",
    },

    {
        title: "Elevators",
        key: "elevators",
    },

] as const;

export default function ResidentialInformation({

    data,

}: Props) {

    return (

        <section
            className="
                rounded-3xl
                border
                border-white/10
                bg-[#08101E]
                p-6
                lg:p-8
            "
        >

            <div
                className="
                    mb-8
                "
            >

                <h2
                    className="
                        text-2xl
                        font-black
                        text-white
                        lg:text-3xl
                    "
                >

                    Property Specifications

                </h2>

                <p
                    className="
                        mt-2
                        text-slate-400
                    "
                >

                    Explore the available specifications
                    for this residential property type.

                </p>

            </div>

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                "
            >

                {

                    SPECIFICATIONS.map(

                        specification => (

                            <SelectField

                                key={specification.key}

                                title={specification.title}

                                items={

                                    data.specifications[

                                        specification.key

                                    ]

                                }

                            />

                        )

                    )

                }

            </div>

        </section>

    );

}

interface SelectFieldProps {

    title: string;

    items: readonly string[];

}

function SelectField({

    title,

    items,

}: SelectFieldProps) {

    return (

        <div>

            <label
                className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-300
                "
            >

                {title}

            </label>

            <select
                defaultValue=""
                className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-[#020817]
                    px-4
                    text-white
                    outline-none
                    transition
                    focus:border-[#F97316]
                "
            >

                <option
                    value=""
                    disabled
                >

                    Select {title}

                </option>

                {

                    items.map(

                        item => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        )

                    )

                }

            </select>

        </div>

    );

}