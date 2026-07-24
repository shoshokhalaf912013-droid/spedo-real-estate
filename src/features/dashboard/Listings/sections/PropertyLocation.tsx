"use client";

import SelectField from "@/components/forms/SelectField";
import TextField from "@/components/forms/TextField";
import TextAreaField from "@/components/forms/TextAreaField";

import type { PropertyFormData } from "../hooks/usePropertyForm";

interface Props {

    formData: PropertyFormData;

    updateSection: <T extends keyof PropertyFormData>(
        section: T,
        values: Partial<PropertyFormData[T]>
    ) => void;

}

const COUNTRY_OPTIONS = [

    {
        label: "Egypt",
        value: "Egypt",
    },

];

const GOVERNORATE_OPTIONS = [

    {
        label: "Cairo",
        value: "Cairo",
    },

    {
        label: "Giza",
        value: "Giza",
    },

    {
        label: "Alexandria",
        value: "Alexandria",
    },

    {
        label: "Red Sea",
        value: "Red Sea",
    },

    {
        label: "South Sinai",
        value: "South Sinai",
    },

];

export default function PropertyLocation({

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
                "
            >

                <h2
                    className="
                        text-2xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Property Location
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-400
                    "
                >
                    Select the exact location of this property.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-5
                    lg:grid-cols-2
                "
            >

                <SelectField

                    label="Country"

                    value={formData.location.country}

                    options={COUNTRY_OPTIONS}

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                country:value,

                            }

                        )

                    }

                />

                <SelectField

                    label="Governorate"

                    value={formData.location.governorate}

                    options={GOVERNORATE_OPTIONS}

                    placeholder="Select Governorate"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                governorate:value,

                            }

                        )

                    }

                />

                <TextField

                    label="City"

                    value={formData.location.city}

                    placeholder="City"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                city:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Area"

                    value={formData.location.area}

                    placeholder="Area"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                area:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Project / Compound"

                    value={formData.location.compound}

                    placeholder="Project Name"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                compound:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Building"

                    value={formData.location.building}

                    placeholder="Building Number"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                building:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Floor"

                    value={formData.location.floor}

                    placeholder="Floor"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                floor:value,

                            }

                        )

                    }

                />

                <TextField

                    label="Unit Number"

                    value={formData.location.unit}

                    placeholder="Unit Number"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                unit:value,

                            }

                        )

                    }

                />

            </div>

	              <div
                className="
                    mt-6
                    grid
                    gap-5
                    lg:grid-cols-2
                "
            >

                <TextField

                    label="Google Maps URL"

                    value={formData.location.googleMaps}

                    placeholder="https://maps.google.com/..."

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                googleMaps: value,

                            }

                        )

                    }

                />

                <TextField

                    label="Nearby Landmark"

                    value={formData.location.landmark}

                    placeholder="Nearby Landmark"

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                landmark: value,

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

                    label="Full Address"

                    value={formData.location.address}

                    placeholder="Complete property address..."

                    rows={4}

                    onChange={(value)=>

                        updateSection(

                            "location",

                            {

                                address: value,

                            }

                        )

                    }

                />

            </div>

        </section>

    );

}