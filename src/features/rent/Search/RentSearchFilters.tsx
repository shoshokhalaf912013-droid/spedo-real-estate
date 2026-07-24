"use client";

import type { SearchFilters } from "@/core/search/SearchFilters";

interface RentSearchFiltersProps {
    filters: SearchFilters;

    updateFilter: (
        key: keyof SearchFilters,
        value: SearchFilters[keyof SearchFilters]
    ) => void;
}

const lifestyles = [
    "Holiday",
    "Investment",
    "Family",
    "Luxury",
    "Long Term",
];

const propertyTypes = [
    "all",
    "Apartment",
    "Villa",
    "Studio",
    "Penthouse",
    "Townhouse",
];

const budgets = [
    {
        label: "All Budgets",
        value: "all",
    },

    {
        label: "Less Than €50K",
        value: "less-than-2m",
    },

    {
        label: "€50K - €70K",
        value: "2m-2.5m",
    },

    {
        label: "€70K - €90K",
        value: "2.5m-3m",
    },

    {
        label: "€90K+",
        value: "4m-plus",
    },
];

const views = [
    "all",
    "Sea View",
    "Pool View",
    "Garden View",
    "Lagoon View",
];

export default function RentSearchFilters({
    filters,
    updateFilter,
}: RentSearchFiltersProps) {
    return (
        <div
            className="
                rounded-[40px]
                bg-[#F97316]
                p-10
                shadow-[0_20px_80px_rgba(249,115,22,0.25)]
            "
        >
            {/* HEADER */}

            <div className="mb-10">

                <span
                    className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[4px]
                        text-[#08101E]
                    "
                >
                    Smart Rental Search
                </span>

                <h2
                    className="
                        mt-4
                        text-4xl
                        font-black
                        text-[#08101E]
                    "
                >
                    What Are You Looking For?
                </h2>

            </div>

            {/* LIFESTYLES */}

            <div
                className="
                    mb-10
                    flex
                    flex-wrap
                    gap-3
                "
            >
                {lifestyles.map((item) => (

                    <button
                        key={item}
                        className="
                            rounded-full
                            bg-[#08101E]
                            px-6
                            py-3
                            text-sm
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-black
                        "
                    >
                        {item}
                    </button>

                ))}
            </div>

            {/* FILTERS */}

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {/* PROPERTY TYPE */}

                <select
                    value={filters.propertyType}
                    onChange={(e) =>
                        updateFilter(
                            "propertyType",
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border-2
                        border-[#08101E]
                        bg-[#08101E]
                        px-5
                        py-4
                        font-semibold
                        text-white
                        outline-none
                    "
                >
                    {propertyTypes.map((type) => (

                        <option
                            key={type}
                            value={type}
                        >
                            {type}
                        </option>

                    ))}
                </select>

                {/* BEDROOMS */}

                <select
                    value={filters.bedrooms}
                    onChange={(e) =>
                        updateFilter(
                            "bedrooms",
                            e.target.value === "all"
                                ? "all"
                                : Number(
                                      e.target.value
                                  )
                        )
                    }
                    className="
                        rounded-2xl
                        border-2
                        border-[#08101E]
                        bg-[#08101E]
                        px-5
                        py-4
                        font-semibold
                        text-white
                        outline-none
                    "
                >
                    <option value="all">
                        All Bedrooms
                    </option>

                    <option value={1}>
                        1 Bedroom
                    </option>

                    <option value={2}>
                        2 Bedrooms
                    </option>

                    <option value={3}>
                        3 Bedrooms
                    </option>

                    <option value={4}>
                        4+ Bedrooms
                    </option>

                </select>

                {/* BUDGET */}

                <select
                    value={filters.budget}
                    onChange={(e) =>
                        updateFilter(
                            "budget",
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border-2
                        border-[#08101E]
                        bg-[#08101E]
                        px-5
                        py-4
                        font-semibold
                        text-white
                        outline-none
                    "
                >
                    {budgets.map((budget) => (

                        <option
                            key={budget.value}
                            value={budget.value}
                        >
                            {budget.label}
                        </option>

                    ))}
                </select>

                {/* VIEW */}

                <select
                    value={filters.view}
                    onChange={(e) =>
                        updateFilter(
                            "view",
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border-2
                        border-[#08101E]
                        bg-[#08101E]
                        px-5
                        py-4
                        font-semibold
                        text-white
                        outline-none
                    "
                >
                    {views.map((view) => (

                        <option
                            key={view}
                            value={view}
                        >
                            {view}
                        </option>

                    ))}
                </select>

            </div>

        </div>
    );
}