"use client";

import { usePropertyStore } from "./store";

export default function Seo() {
    const {
        property,
        updatePropertyField,
    } = usePropertyStore();

    return (
        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="mb-6 text-2xl font-bold text-orange-500">
                SEO
            </h2>

            <div className="grid gap-6">

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        SEO Title
                    </label>

                    <input
                        value={property.title}
                        onChange={(e) =>
                            updatePropertyField(
                                "title",
                                e.target.value
                            )
                        }
                        placeholder="SEO Title"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                        Meta Description
                    </label>

                    <textarea
                        rows={5}
                        value={property.description}
                        onChange={(e) =>
                            updatePropertyField(
                                "description",
                                e.target.value
                            )
                        }
                        placeholder="Meta Description"
                        className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"
                    />
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-400">
                    <p>
                        URL Preview
                    </p>

                    <p className="mt-2 text-blue-400">
                        /properties/
                        {property.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}
                    </p>
                </div>

            </div>

        </section>
    );
}