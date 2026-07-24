"use client";

interface NoResultsProps {

    onReset?: () => void;

}

export function NoResults({
    onReset
}: NoResultsProps) {

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-10
                text-center
            "
        >

            <div className="mx-auto max-w-2xl">

                <div className="text-6xl">

                    🔍

                </div>

                <h2
                    className="
                        mt-6
                        text-3xl
                        font-bold
                        text-white
                    "
                >

                    No Properties Found

                </h2>

                <p
                    className="
                        mt-4
                        text-lg
                        text-slate-400
                    "
                >

                    We couldn't find any properties
                    matching your current filters.

                </p>

                <div
                    className="
                        mt-8
                        rounded-2xl
                        bg-slate-800
                        p-6
                        text-left
                    "
                >

                    <h3
                        className="
                            mb-4
                            text-lg
                            font-semibold
                            text-amber-400
                        "
                    >

                        Suggestions

                    </h3>

                    <ul
                        className="
                            space-y-3
                            text-slate-300
                        "
                    >

                        <li>
                            ✓ Increase your budget range
                        </li>

                        <li>
                            ✓ Try another property type
                        </li>

                        <li>
                            ✓ Remove some filters
                        </li>

                        <li>
                            ✓ Explore other projects in Hurghada
                        </li>

                    </ul>

                </div>

                {onReset && (

                    <button
                        onClick={onReset}
                        className="
                            mt-8
                            rounded-2xl
                            bg-amber-500
                            px-8
                            py-4
                            font-bold
                            text-slate-950
                            transition
                            hover:opacity-90
                        "
                    >

                        Reset All Filters

                    </button>

                )}

            </div>

        </section>

    );

}