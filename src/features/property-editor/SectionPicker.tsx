"use client";

import { PROPERTY_SECTIONS } from "./property-sections";
import { SectionType } from "./types";

interface Props {

    onSelect(

        type: SectionType

    ): void;

}

export default function SectionPicker({

    onSelect,

}: Props) {

    return (

        <div
            className="
                grid
                grid-cols-2
                gap-4
            "
        >

            {

                PROPERTY_SECTIONS.map(

                    section => (

                        <button

                            key={section.type}

                            onClick={() =>

                                onSelect(

                                    section.type

                                )

                            }

                            className="
                                rounded-xl
                                border
                                border-slate-700
                                bg-slate-900
                                p-4
                                text-left
                                hover:border-orange-500
                            "

                        >

                            {section.title}

                        </button>

                    )

                )

            }

        </div>

    );

}