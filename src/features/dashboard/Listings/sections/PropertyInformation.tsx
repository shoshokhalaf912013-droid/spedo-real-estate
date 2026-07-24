"use client";

import TextField from "@/components/forms/TextField";
import SelectField from "@/components/forms/SelectField";
import TextAreaField from "@/components/forms/TextAreaField";
import type { PropertyFormData } from "../hooks/usePropertyForm";

interface Props {

    propertyType: string;

    formData: PropertyFormData;

    updateSection: <T extends keyof PropertyFormData>(
        section: T,
        values: Partial<PropertyFormData[T]>
    ) => void;

}

const STATUS_OPTIONS = [

    {
        label: "Draft",
        value: "Draft",
    },

    {
        label: "Available",
        value: "Available",
    },

    {
        label: "Reserved",
        value: "Reserved",
    },

    {
        label: "Sold",
        value: "Sold",
    },

    {
        label: "Rented",
        value: "Rented",
    },

];

export default function PropertyInformation({

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

            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        Property Information
                    </h2>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-slate-400
                        "
                    >
                        Basic information about this property.
                    </p>

                </div>

            </div>

            <div
                className="
                    grid
                    gap-5
                    lg:grid-cols-2
                "
            >

                <TextField

                    label="SPEDO ID"

                    value={formData.information.id}

                    placeholder="Generated Automatically"

                   readOnly

                    onChange={() => {}}

                />

                <TextField

                    label="Property Type"

                    value={formData.information.propertyType || propertyType}

                    readOnly

                    onChange={() => {}}

                />

                <TextField

                    label="Developer"

                    value={formData.information.developer}

                    placeholder="Developer Name"

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                developer:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Project"

                    value={formData.information.project}

                    placeholder="Project Name"

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                project:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Property Title"

                    value={formData.information.title}

                    placeholder="Property Title"

                    required

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                title:value,

                            }

                        )

                    }

                />

                <SelectField

                    label="Listing Status"

                    value={formData.information.status}

                    options={STATUS_OPTIONS}

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                status:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Owner Name"

                    value={formData.information.owner}

                    placeholder="Owner Name"

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                owner:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Reference Code"

                    value={formData.information.reference}

                    placeholder="Reference Code"

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                reference:value,

                            }

                        )

                    }

                />

            </div>

	            <div
                className="
                    mt-6
                "
            >

                <TextAreaField

                    label="Property Description"

                    value={formData.information.description}

                    placeholder="Write a professional description..."

                    rows={6}

                    onChange={(value)=>

                        updateSection(

                            "information",

                            {

                                description: value,

                            }

                        )

                    }

                />

            </div>

        </section>

    );

}