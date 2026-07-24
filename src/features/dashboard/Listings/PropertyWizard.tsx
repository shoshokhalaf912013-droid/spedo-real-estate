"use client";

import { useState } from "react";

import usePropertyForm from "./hooks/usePropertyForm";

import PropertyInformation from "./sections/PropertyInformation";
import PropertyLocation from "./sections/PropertyLocation";
import PropertyFeatures from "./sections/PropertyFeatures";
import SpecificationsSection from "./sections/SpecificationsSection";
import MarketingAssets from "./sections/MarketingAssets";
import DealOptions from "./sections/DealOptions";

interface Props {

    propertyType: string;

}

const STEPS = [

    "Information",

    "Location",

    "Features",

    "Specifications",

    "Media",

    "Deal",

    "Review",

];

export default function PropertyWizard({

    propertyType,

}: Props) {

    const [

        currentStep,

        setCurrentStep,

    ] = useState(0);

    const {

        formData,

        updateSection,

        resetForm,

    } = usePropertyForm();

    function nextStep() {

        setCurrentStep(

            previous =>

                Math.min(

                    previous + 1,

                    STEPS.length - 1,

                ),

        );

    }

    function previousStep() {

        setCurrentStep(

            previous =>

                Math.max(

                    previous - 1,

                    0,

                ),

        );

    }

    return (

        <div
            className="
                grid
                gap-8
                lg:grid-cols-[280px_1fr]
            "
        >

            {/* Sidebar */}

            <aside
                className="
                    sticky
                    top-24
                    h-fit
                    rounded-3xl
                    border
                    border-[#D4AF37]/10
                    bg-[#0F172A]
                    p-6
                "
            >

                <h2
                    className="
                        mb-8
                        text-2xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Property Builder
                </h2>

                <div
                    className="
                        space-y-2
                    "
                >

                    {

                        STEPS.map(

                            (

                                step,

                                index,

                            )=>(

                                <button

                                    key={step}

                                    type="button"

                                    onClick={()=>

                                        setCurrentStep(

                                            index,

                                        )

                                    }

                                    className={`
                                        flex
                                        w-full
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-4
                                        py-3
                                        transition

                                        ${

                                            currentStep===index

                                            ?

                                            "bg-[#F97316] text-black font-bold"

                                            :

                                            "text-slate-300 hover:bg-slate-800"

                                        }

                                    `}
                                >

                                    <span>

                                        {index+1}

                                    </span>

                                    {step}

                                </button>

                            ),

                        )

                    }

                </div>

            </aside>

            {/* Content */}

            <section>

                {

                    currentStep===0 && (

                        <PropertyInformation

                            propertyType={propertyType}

                            formData={formData}

                            updateSection={updateSection}

                        />

                    )

                }

                {

                    currentStep===1 && (

                        <PropertyLocation

                            formData={formData}

                            updateSection={updateSection}

                        />

                    )

                }

                {

                    currentStep===2 && (

                        <PropertyFeatures

                            propertyType={propertyType}

                            formData={formData}

                            updateSection={updateSection}

                        />

                    )

                }

                {

                    currentStep===3 && (

                        <SpecificationsSection

                            propertyType={propertyType}

                            formData={formData}

                            updateSection={updateSection}

                        />

                    )

                }

                {

                    currentStep===4 && (

                        <MarketingAssets

                            formData={formData}

                            updateSection={updateSection}

                        />

                    )

                }

                {

                    currentStep===5 && (

                        <DealOptions

                            formData={formData}

                            updateSection={updateSection}

                        />

                    )

                }

                {

                    currentStep===6 && (

                        <div
                            className="
                                rounded-3xl
                                border
                                border-[#D4AF37]/10
                                bg-[#0F172A]
                                p-12
                            "
                        >

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                Review Property
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-slate-400
                                "
                            >
                                Review all entered information before publishing.

                            </p>

                        </div>

                    )

                }

                <div
                    className="
                        mt-8
                        flex
                        justify-between
                    "
                >

                    <button

                        type="button"

                        onClick={previousStep}

                        disabled={currentStep===0}

                        className="
                            rounded-xl
                            bg-slate-700
                            px-8
                            py-3
                            font-bold
                            text-white
                            disabled:opacity-40
                        "
                    >

                        Previous

                    </button>

                    <div
                        className="
                            flex
                            gap-4
                        "
                    >

                        <button

                            type="button"

                            onClick={resetForm}

                            className="
                                rounded-xl
                                bg-slate-800
                                px-8
                                py-3
                                font-bold
                                text-white
                            "
                        >

                            Reset

                        </button>

                        {

                            currentStep===STEPS.length-1

                            ?

                            (

                                <button
                                    className="
                                        rounded-xl
                                        bg-[#F97316]
                                        px-8
                                        py-3
                                        font-black
                                        text-black
                                    "
                                >

                                    Publish Property

                                </button>

                            )

                            :

                            (

                                <button

                                    type="button"

                                    onClick={nextStep}

                                    className="
                                        rounded-xl
                                        bg-[#F97316]
                                        px-8
                                        py-3
                                        font-black
                                        text-black
                                    "
                                >

                                    Next

                                </button>

                            )

                        }

                    </div>

                </div>

            </section>

        </div>

    );

}