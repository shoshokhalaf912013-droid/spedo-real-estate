"use client";

import { usePropertyStore } from "./store";

export default function PropertyDetails() {

    const {
        property,
        updatePropertyField,
    } = usePropertyStore();

    return (

        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="mb-6 text-2xl font-bold text-orange-500">

                Property Details

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                <input
                    type="number"
                    placeholder="Area (m²)"
                    value={property.area || ""}
                    onChange={e =>
                        updatePropertyField(
                            "area",
                            Number(e.target.value)
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <input
                    type="number"
                    placeholder="Bedrooms"
                    value={property.bedrooms || ""}
                    onChange={e =>
                        updatePropertyField(
                            "bedrooms",
                            Number(e.target.value)
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <input
                    type="number"
                    placeholder="Bathrooms"
                    value={property.bathrooms || ""}
                    onChange={e =>
                        updatePropertyField(
                            "bathrooms",
                            Number(e.target.value)
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <input
                    placeholder="Floor"
                    value={property.floor}
                    onChange={e =>
                        updatePropertyField(
                            "floor",
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <input
                    type="number"
                    placeholder="Building Age"
                    value={property.buildingAge || ""}
                    onChange={e =>
                        updatePropertyField(
                            "buildingAge",
                            Number(e.target.value)
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <input
                    type="date"
                    value={property.deliveryDate}
                    onChange={e =>
                        updatePropertyField(
                            "deliveryDate",
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <input
                    placeholder="View"
                    value={property.view}
                    onChange={e =>
                        updatePropertyField(
                            "view",
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                />

                <select
                    value={property.furnishing}
                    onChange={e =>
                        updatePropertyField(
                            "furnishing",
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                >
                    <option>Unfurnished</option>
                    <option>Semi Furnished</option>
                    <option>Fully Furnished</option>
                </select>

                <select
                    value={property.finishing}
                    onChange={e =>
                        updatePropertyField(
                            "finishing",
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                >
                    <option>Finished</option>
                    <option>Semi Finished</option>
                    <option>Core & Shell</option>
                </select>

            </div>

	               <div className="mt-8 grid gap-4 md:grid-cols-3">

                <label className="flex items-center gap-3 text-white">
                    <input
                        type="checkbox"
                        checked={property.parking}
                        onChange={e =>
                            updatePropertyField(
                                "parking",
                                e.target.checked
                            )
                        }
                    />
                    Parking
                </label>

                <label className="flex items-center gap-3 text-white">
                    <input
                        type="checkbox"
                        checked={property.garden}
                        onChange={e =>
                            updatePropertyField(
                                "garden",
                                e.target.checked
                            )
                        }
                    />
                    Garden
                </label>

                <label className="flex items-center gap-3 text-white">
                    <input
                        type="checkbox"
                        checked={property.pool}
                        onChange={e =>
                            updatePropertyField(
                                "pool",
                                e.target.checked
                            )
                        }
                    />
                    Swimming Pool
                </label>

                <label className="flex items-center gap-3 text-white">
                    <input
                        type="checkbox"
                        checked={property.elevator}
                        onChange={e =>
                            updatePropertyField(
                                "elevator",
                                e.target.checked
                            )
                        }
                    />
                    Elevator
                </label>

                <label className="flex items-center gap-3 text-white">
                    <input
                        type="checkbox"
                        checked={property.smartHome}
                        onChange={e =>
                            updatePropertyField(
                                "smartHome",
                                e.target.checked
                            )
                        }
                    />
                    Smart Home
                </label>

            </div>

        </section>

    );

}
	    