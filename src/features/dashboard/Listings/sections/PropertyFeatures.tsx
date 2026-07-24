"use client";

import NumberField from "@/components/forms/NumberField";
import SelectField from "@/components/forms/SelectField";
import TextField from "@/components/forms/TextField";

import type { PropertyFormData } from "../hooks/usePropertyForm";

interface Props {

    propertyType: string;

    formData: PropertyFormData;

    updateSection: <T extends keyof PropertyFormData>(
        section: T,
        values: Partial<PropertyFormData[T]>
    ) => void;

}

const FINISHING_OPTIONS = [

    {
        label: "Core & Shell",
        value: "Core & Shell",
    },

    {
        label: "Semi Finished",
        value: "Semi Finished",
    },

    {
        label: "Fully Finished",
        value: "Fully Finished",
    },

    {
        label: "Luxury Finished",
        value: "Luxury Finished",
    },

];

const FURNISHING_OPTIONS = [

    {
        label: "Unfurnished",
        value: "Unfurnished",
    },

    {
        label: "Semi Furnished",
        value: "Semi Furnished",
    },

    {
        label: "Fully Furnished",
        value: "Fully Furnished",
    },

];

const DELIVERY_OPTIONS = [

    {
        label: "Ready To Move",
        value: "Ready",
    },

    {
        label: "Under Construction",
        value: "Under Construction",
    },

    {
        label: "Off Plan",
        value: "Off Plan",
    },

];

export default function PropertyFeatures({

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
                    Property Features
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-400
                    "
                >
                    Physical specifications for the selected {propertyType}.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-5
                    lg:grid-cols-2
                "
            >

                <NumberField

                    label="Area (m²)"

                    value={formData.features.area}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                area:value,

                            }

                        )

                    }

                />

                <NumberField

                    label="Bedrooms"

                    value={formData.features.bedrooms}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                bedrooms:value,

                            }

                        )

                    }

                />

                <NumberField

                    label="Bathrooms"

                    value={formData.features.bathrooms}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                bathrooms:value,

                            }

                        )

                    }

                />

                <NumberField

                    label="Parking Spaces"

                    value={formData.features.parking}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                parking:value,

                            }

                        )

                    }

                />

                <SelectField

                    label="Finishing"

                    value={formData.features.finishing}

                    options={FINISHING_OPTIONS}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                finishing:value,

                            }

                        )

                    }

                />

                <SelectField

                    label="Furnishing"

                    value={formData.features.furnishing}

                    options={FURNISHING_OPTIONS}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                furnishing:value,

                            }

                        )

                    }

                />

                <TextField

                    label="View"

                    value={formData.features.view}

                    placeholder="Sea View, Garden View..."

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                view:value,

                            }

                        )

                    }

                />

                <SelectField

                    label="Delivery Status"

                    value={formData.features.deliveryStatus}

                    options={DELIVERY_OPTIONS}

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                deliveryStatus:value,

                            }

                        )

                    }

                />

		                <NumberField

                    label="Delivery Year"

                    value={

                        Number(

                            formData.features.deliveryYear || 0

                        )

                    }

                    onChange={(value)=>

                        updateSection(

                            "features",

                            {

                                deliveryYear: String(value),

                            }

                        )

                    }

                />

            </div>

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
                    Property Summary
                </h3>

                <div
                    className="
                        mt-5
                        grid
                        gap-4
                        md:grid-cols-4
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
                            Type
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {propertyType}
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
                            Area
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.features.area || 0} m²
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
                            Bedrooms
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.features.bedrooms || 0}
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
                            Bathrooms
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.features.bathrooms || 0}
                        </h4>

                    </div>

                </div>

            </div>

        </section>

    );

}