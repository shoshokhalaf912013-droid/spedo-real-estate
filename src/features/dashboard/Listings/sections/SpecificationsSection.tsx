"use client";

import NumberField from "@/components/forms/NumberField";
import TextField from "@/components/forms/TextField";
import TextAreaField from "@/components/forms/TextAreaField";
import SwitchField from "@/components/forms/SwitchField";

import type { PropertyFormData } from "../hooks/usePropertyForm";

interface Props {

    propertyType: string;

    formData: PropertyFormData;

    updateSection: <T extends keyof PropertyFormData>(
        section: T,
        values: Partial<PropertyFormData[T]>
    ) => void;

}

export default function SpecificationsSection({

    propertyType,

    formData,

    updateSection,

}: Props) {

    return (

        <section
            className="
                rounded-3xl
                border
                border-[#D4AF37]/10
                bg-[#0F172A]
                p-6
            "
        >

            <div className="mb-8">

                <h2
                    className="
                        text-2xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Property Specifications
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-400
                    "
                >
                    Technical specifications for {propertyType}.
                </p>

            </div>

            {/* Construction */}

            <div className="mb-8">

                <h3
                    className="
                        mb-5
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Construction
                </h3>

                <div
                    className="
                        grid
                        gap-5
                        lg:grid-cols-2
                    "
                >

                    <NumberField

                        label="Built Area (m²)"

                        value={formData.specifications.builtArea}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    builtArea:value,

                                }

                            )

                        }

                    />

                    <NumberField

                        label="Land Area (m²)"

                        value={formData.specifications.landArea}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    landArea:value,

                                }

                            )

                        }

                    />

                    <NumberField

                        label="Floor Number"

                        value={formData.specifications.floorNumber}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    floorNumber:value,

                                }

                            )

                        }

                    />

                    <NumberField

                        label="Total Floors"

                        value={formData.specifications.totalFloors}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    totalFloors:value,

                                }

                            )

                        }

                    />

                    <TextField

                        label="Ceiling Height"

                        value={formData.specifications.ceilingHeight}

                        placeholder="3.2 m"

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    ceilingHeight:value,

                                }

                            )

                        }

                    />

                    <TextField

                        label="Construction Year"

                        value={formData.specifications.constructionYear}

                        placeholder="2025"

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    constructionYear:value,

                                }

                            )

                        }

                    />

                </div>

            </div>

	              {/* Utilities */}

            <div className="mb-8">

                <h3
                    className="
                        mb-5
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Utilities
                </h3>

                <div
                    className="
                        grid
                        gap-4
                        md:grid-cols-2
                    "
                >

                    <SwitchField

                        label="Electricity Meter"

                        checked={formData.specifications.electricityMeter}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    electricityMeter:value,

                                }

                            )

                        }

                    />

                    <SwitchField

                        label="Water Meter"

                        checked={formData.specifications.waterMeter}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    waterMeter:value,

                                }

                            )

                        }

                    />

                    <SwitchField

                        label="Gas Meter"

                        checked={formData.specifications.gasMeter}

                        onChange={(value)=>

                            updateSection(

                                "specifications",

                                {

                                    gasMeter:value,

                                }

                            )

                        }

                    />

                </div>

            </div>

            {/* Notes */}

            <TextAreaField

                label="Additional Notes"

                value={formData.specifications.notes}

                rows={5}

                placeholder="Additional construction and engineering notes..."

                onChange={(value)=>

                    updateSection(

                        "specifications",

                        {

                            notes:value,

                        }

                    )

                }

            />

            {/* Summary */}

            <div
                className="
                    mt-8
                    rounded-2xl
                    border
                    border-[#D4AF37]/10
                    bg-slate-900/40
                    p-5
                "
            >

                <h3
                    className="
                        text-lg
                        font-bold
                        text-[#F97316]
                    "
                >
                    Construction Summary
                </h3>

                <div
                    className="
                        mt-5
                        grid
                        gap-4
                        md:grid-cols-3
                    "
                >

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                text-slate-500
                            "
                        >
                            Built Area
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.specifications.builtArea} m²
                        </h4>

                    </div>

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                text-slate-500
                            "
                        >
                            Land Area
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.specifications.landArea} m²
                        </h4>

                    </div>

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                text-slate-500
                            "
                        >
                            Construction Year
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {

                                formData.specifications.constructionYear ||

                                "-"

                            }
                        </h4>

                    </div>

                </div>

            </div>

        </section>

    );

}