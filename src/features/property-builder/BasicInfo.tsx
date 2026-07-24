"use client";

import { usePropertyStore } from "./store";

import {
    ResidentialPropertyTypes,
    ResidentialPurpose,
    ResidentialPayment,
    ResidentialCurrency,
} from "@/config/residential";

export default function BasicInfo() {
    const {
        property,
        updatePropertyField,
    } = usePropertyStore();

    return (
        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="mb-6 text-2xl font-bold text-orange-500">
                Basic Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                <div className="md:col-span-2">

                    <label className="mb-2 block text-sm font-bold text-white">
                        Property Title *
                    </label>

                    <input
                        value={property.title}
                        onChange={(e) =>
                            updatePropertyField(
                                "title",
                                e.target.value
                            )
                        }
                        placeholder="Blue Crest Apartment 1203"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-bold text-white">
                        Property Type
                    </label>

                    <select
                        value={property.propertyType}
                        onChange={(e) =>
                            updatePropertyField(
                                "propertyType",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    >
                        {ResidentialPropertyTypes.map(type => (
                            <option
                                key={type}
                                value={type}
                            >
                                {type}
                            </option>
                        ))}
                    </select>

                </div>

                <div>

                    <label className="mb-2 block text-sm font-bold text-white">
                        Purpose
                    </label>

                    <select
                        value={property.purpose}
                        onChange={(e) =>
                            updatePropertyField(
                                "purpose",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    >
                        {ResidentialPurpose.map(item => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>

                </div>

                <div>

                    <label className="mb-2 block text-sm font-bold text-white">
                        Payment
                    </label>

                    <select
                        value={property.payment}
                        onChange={(e) =>
                            updatePropertyField(
                                "payment",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    >
                        {ResidentialPayment.map(item => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>

                </div>

                <div>

                    <label className="mb-2 block text-sm font-bold text-white">
                        Price
                    </label>

                    <input
                        type="number"
                        value={
                            property.price === 0
                                ? ""
                                : property.price
                        }
                        onChange={(e) =>
                            updatePropertyField(
                                "price",
                                Number(e.target.value)
                            )
                        }
                        placeholder="250000"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-bold text-white">
                        Currency
                    </label>

                    <select
                        value={property.currency}
                        onChange={(e) =>
                            updatePropertyField(
                                "currency",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    >
                        {ResidentialCurrency.map(item => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="md:col-span-2">

                    <label className="mb-2 block text-sm font-bold text-white">
                        Description
                    </label>

                    <textarea
                        rows={6}
                        value={property.description}
                        onChange={(e) =>
                            updatePropertyField(
                                "description",
                                e.target.value
                            )
                        }
                        placeholder="Property Description..."
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />

                </div>

            </div>

        </section>
    );
}