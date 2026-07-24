"use client";

import { usePropertyStore } from "./store";

export default function Location() {
    const {
        property,
        updatePropertyField,
    } = usePropertyStore();

    return (
        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="mb-6 text-2xl font-bold text-orange-500">
                Location
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        Country
                    </label>

                    <input
                        value={property.country}
                        onChange={(e) =>
                            updatePropertyField(
                                "country",
                                e.target.value
                            )
                        }
                        placeholder="Egypt"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        City
                    </label>

                    <input
                        value={property.city}
                        onChange={(e) =>
                            updatePropertyField(
                                "city",
                                e.target.value
                            )
                        }
                        placeholder="Hurghada"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        District
                    </label>

                    <input
                        value={property.district}
                        onChange={(e) =>
                            updatePropertyField(
                                "district",
                                e.target.value
                            )
                        }
                        placeholder="El Kawther"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        Address
                    </label>

                    <input
                        value={property.address}
                        onChange={(e) =>
                            updatePropertyField(
                                "address",
                                e.target.value
                            )
                        }
                        placeholder="Full Address"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        Latitude
                    </label>

                    <input
                        value={property.latitude}
                        onChange={(e) =>
                            updatePropertyField(
                                "latitude",
                                e.target.value
                            )
                        }
                        placeholder="27.2579"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        Longitude
                    </label>

                    <input
                        value={property.longitude}
                        onChange={(e) =>
                            updatePropertyField(
                                "longitude",
                                e.target.value
                            )
                        }
                        placeholder="33.8116"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

            </div>

        </section>
    );
}