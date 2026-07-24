"use client";

import SwitchField from "@/components/forms/SwitchField";
import NumberField from "@/components/forms/NumberField";
import TextField from "@/components/forms/TextField";
import TextAreaField from "@/components/forms/TextAreaField";
import SelectField from "@/components/forms/SelectField";

import type { PropertyFormData } from "../hooks/usePropertyForm";

interface Props {

    formData: PropertyFormData;

    updateSection: <T extends keyof PropertyFormData>(
        section: T,
        values: Partial<PropertyFormData[T]>
    ) => void;

}

const CURRENCY_OPTIONS = [

    {
        label: "EGP",
        value: "EGP",
    },

    {
        label: "USD",
        value: "USD",
    },

    {
        label: "EUR",
        value: "EUR",
    },

];

const PAYMENT_OPTIONS = [

    {
        label: "Monthly",
        value: "Monthly",
    },

    {
        label: "Quarterly",
        value: "Quarterly",
    },

    {
        label: "Semi Annual",
        value: "Semi Annual",
    },

    {
        label: "Annual",
        value: "Annual",
    },

];

export default function DealOptions({

    formData,

    updateSection,

}: Props) {

    const cashFinalPrice =

        Math.max(

            0,

            formData.cash.price -

            formData.cash.discount

        );

    const downPaymentAmount =

        (

            formData.installment.totalPrice *

            formData.installment.downPaymentPercent

        ) / 100;

    const maintenanceAmount =

        (

            formData.installment.totalPrice *

            formData.installment.maintenancePercent

        ) / 100;

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

            <h2
                className="
                    mb-8
                    text-2xl
                    font-black
                    text-[#F97316]
                "
            >
                Deal Options
            </h2>

            <div
                className="
                    grid
                    gap-6
                    xl:grid-cols-2
                "
            >

                {/* CASH */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-emerald-500/20
                        bg-[#111827]
                        p-6
                    "
                >

                    <SwitchField

                        label="Enable Cash Sale"

                        checked={formData.cash.enabled}

                        onChange={(value)=>

                            updateSection(

                                "cash",

                                {

                                    enabled:value,

                                }

                            )

                        }

                    />

                    {

                        formData.cash.enabled && (

                            <div
                                className="
                                    mt-6
                                    space-y-5
                                "
                            >

                                <NumberField

                                    label="Cash Price"

                                    value={formData.cash.price}

                                    onChange={(value)=>

                                        updateSection(

                                            "cash",

                                            {

                                                price:value,

                                                finalPrice:

                                                    Math.max(

                                                        0,

                                                        value -

                                                        formData.cash.discount

                                                    ),

                                            }

                                        )

                                    }

                                />

                                <NumberField

                                    label="Discount"

                                    value={formData.cash.discount}

                                    onChange={(value)=>

                                        updateSection(

                                            "cash",

                                            {

                                                discount:value,

                                                finalPrice:

                                                    Math.max(

                                                        0,

                                                        formData.cash.price -

                                                        value

                                                    ),

                                            }

                                        )

                                    }

                                />

                                <NumberField

                                    label="Final Price"

                                    value={cashFinalPrice}

                                    disabled

                                    onChange={()=>{}}

                                />

                                <SelectField

                                    label="Currency"

                                    value={formData.cash.currency}

                                    options={CURRENCY_OPTIONS}

                                    onChange={(value)=>

                                        updateSection(

                                            "cash",

                                            {

                                                currency:value,

                                            }

                                        )

                                    }

                                />

                                <TextAreaField

                                    label="Cash Notes"

                                    rows={4}

                                    value={formData.cash.notes}

                                    onChange={(value)=>

                                        updateSection(

                                            "cash",

                                            {

                                                notes:value,

                                            }

                                        )

                                    }

                                />

                            </div>

                        )

                    }

                </div>

                {/* INSTALLMENT */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-sky-500/20
                        bg-[#111827]
                        p-6
                    "
                >

                    <SwitchField

                        label="Enable Installment"

                        checked={formData.installment.enabled}

                        onChange={(value)=>

                            updateSection(

                                "installment",

                                {

                                    enabled:value,

                                }

                            )

                        }

                    />

                    {

                        formData.installment.enabled && (

                            <div
                                className="
                                    mt-6
                                    space-y-5
                                "
                            >

                                <NumberField

                                    label="Total Price"

                                    value={formData.installment.totalPrice}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                totalPrice:value,

                                            }

                                        )

                                    }

                                />

                                <NumberField

                                    label="Down Payment %"

                                    value={formData.installment.downPaymentPercent}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                downPaymentPercent:value,

                                                downPaymentAmount:

                                                    (

                                                        formData.installment.totalPrice *

                                                        value

                                                    ) / 100,

                                            }

                                        )

                                    }

                                />

				                                <NumberField

                                    label="Down Payment Amount"

                                    value={downPaymentAmount}

                                    disabled

                                    onChange={()=>{}}

                                />

                                <NumberField

                                    label="Installment Years"

                                    value={formData.installment.years}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                years:value,

                                            }

                                        )

                                    }

                                />

                                <NumberField

                                    label="Number of Installments"

                                    value={formData.installment.installments}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                installments:value,

                                            }

                                        )

                                    }

                                />

                                <SelectField

                                    label="Payment Frequency"

                                    value={formData.installment.frequency}

                                    options={PAYMENT_OPTIONS}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                frequency:value,

                                            }

                                        )

                                    }

                                />

                                <NumberField

                                    label="Maintenance %"

                                    value={formData.installment.maintenancePercent}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                maintenancePercent:value,

                                                maintenanceAmount:

                                                    (

                                                        formData.installment.totalPrice *

                                                        value

                                                    ) / 100,

                                            }

                                        )

                                    }

                                />

                                <NumberField

                                    label="Maintenance Amount"

                                    value={maintenanceAmount}

                                    disabled

                                    onChange={()=>{}}

                                />

                                <TextField

                                    label="Delivery Date"

                                    value={formData.installment.deliveryDate}

                                    placeholder="2027-12-01"

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                deliveryDate:value,

                                            }

                                        )

                                    }

                                />

                                <TextField

                                    label="Grace Period"

                                    value={formData.installment.gracePeriod}

                                    placeholder="6 Months"

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                gracePeriod:value,

                                            }

                                        )

                                    }

                                />

                                <TextAreaField

                                    label="Installment Notes"

                                    rows={4}

                                    value={formData.installment.notes}

                                    onChange={(value)=>

                                        updateSection(

                                            "installment",

                                            {

                                                notes:value,

                                            }

                                        )

                                    }

                                />

                            </div>

                        )

                    }

                </div>

            </div>

            {/* RENT */}

            <div
                className="
                    mt-6
                    rounded-2xl
                    border
                    border-amber-500/20
                    bg-[#111827]
                    p-6
                "
            >

                <SwitchField

                    label="Enable Rent"

                    checked={formData.rent.enabled}

                    onChange={(value)=>

                        updateSection(

                            "rent",

                            {

                                enabled:value,

                            }

                        )

                    }

                />

                {

                    formData.rent.enabled && (

                        <div
                            className="
                                mt-6
                                grid
                                gap-5
                                md:grid-cols-2
                            "
                        >

                            <NumberField
                                label="Daily Price"
                                value={formData.rent.daily}
                                onChange={(value)=>
                                    updateSection(
                                        "rent",
                                        { daily:value }
                                    )
                                }
                            />

                            <NumberField
                                label="Weekly Price"
                                value={formData.rent.weekly}
                                onChange={(value)=>
                                    updateSection(
                                        "rent",
                                        { weekly:value }
                                    )
                                }
                            />

                            <NumberField
                                label="Monthly Price"
                                value={formData.rent.monthly}
                                onChange={(value)=>
                                    updateSection(
                                        "rent",
                                        { monthly:value }
                                    )
                                }
                            />

                            <NumberField
                                label="Yearly Price"
                                value={formData.rent.yearly}
                                onChange={(value)=>
                                    updateSection(
                                        "rent",
                                        { yearly:value }
                                    )
                                }
                            />

                            <NumberField
                                label="Security Deposit"
                                value={formData.rent.deposit}
                                onChange={(value)=>
                                    updateSection(
                                        "rent",
                                        { deposit:value }
                                    )
                                }
                            />

                            <TextField
                                label="Minimum Rental Period"
                                value={formData.rent.minimumPeriod}
                                placeholder="12 Months"
                                onChange={(value)=>
                                    updateSection(
                                        "rent",
                                        {
                                            minimumPeriod:value,
                                        }
                                    )
                                }
                            />

                            <div className="md:col-span-2">

                                <TextAreaField

                                    label="Rent Notes"

                                    rows={4}

                                    value={formData.rent.notes}

                                    onChange={(value)=>

                                        updateSection(

                                            "rent",

                                            {

                                                notes:value,

                                            }

                                        )

                                    }

                                />

                            </div>

                        </div>

                    )

                }

            </div>

            {/* SUMMARY */}

            <div
                className="
                    mt-8
                    rounded-2xl
                    border
                    border-[#D4AF37]/20
                    bg-slate-900/40
                    p-6
                "
            >

                <h3
                    className="
                        text-xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Financial Summary
                </h3>

                <div
                    className="
                        mt-6
                        grid
                        gap-5
                        md:grid-cols-4
                    "
                >

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Cash

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                            {cashFinalPrice.toLocaleString()}

                        </h4>

                    </div>

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Down Payment

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                            {downPaymentAmount.toLocaleString()}

                        </h4>

                    </div>

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Maintenance

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                            {maintenanceAmount.toLocaleString()}

                        </h4>

                    </div>

                    <div>

                        <p className="text-xs uppercase text-slate-500">

                            Currency

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                            {formData.cash.currency}

                        </h4>

                    </div>

                </div>

            </div>

        </section>

    );

}