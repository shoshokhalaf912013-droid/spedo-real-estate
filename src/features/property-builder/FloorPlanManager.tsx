"use client";

import { usePropertyStore } from "./store";

export default function FloorPlanManager() {
    const {
        floorPlans,
        addFloorPlan,
        removeFloorPlan,
    } = usePropertyStore();

    return (
        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-orange-500">
                    Floor Plans
                </h2>

                <button
                    onClick={() => addFloorPlan()}
                    className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"
                >
                    + Floor Plan
                </button>

            </div>

            {floorPlans.length === 0 && (

                <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-500">
                    No Floor Plans yet.
                </div>

            )}

            <div className="space-y-6">

                {floorPlans.map((plan) => (

                    <div
                        key={plan.id}
                        className="rounded-xl border border-slate-700 p-5"
                    >

                        <div className="mb-4 flex items-center justify-between">

                            <h3 className="text-lg font-semibold text-white">
                                {plan.title}
                            </h3>

                            <button
                                onClick={() =>
                                    removeFloorPlan(plan.id)
                                }
                                className="rounded-lg bg-red-600 px-4 py-2 text-white"
                            >
                                Delete
                            </button>

                        </div>

                        <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
                            MediaSelector (PDF Floor Plan)
                        </div>

                        <div className="mt-4 flex gap-3">

                            <button
                                className="rounded-lg bg-sky-600 px-4 py-2 text-white"
                            >
                                Select PDF
                            </button>

                            <button
                                className="rounded-lg bg-slate-700 px-4 py-2 text-white"
                            >
                                Preview
                            </button>

                        </div>

                        <div className="mt-4 text-sm text-slate-400">
                            PDF will be attached from Media Library
                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}