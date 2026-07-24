"use client";

import RentSearchFilters from "./RentSearchFilters";
import RentSearchResults from "./RentSearchResults";

import { useRentSearch }
from "../hooks/useRentSearch";

export default function RentSearch() {

    const {

        filters,

        updateFilter,

        resetFilters,

        sort,

        setSort,

        results,

        loading,

        stats,

    } = useRentSearch();

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-[#08101E]
                py-28
            "
        >

            {/* BACKGROUND GLOW */}

            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-[900px]
                    w-[900px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#F97316]/10
                    blur-[180px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                {/* HEADER */}

                <div
                    className="
                        mb-16
                        text-center
                    "
                >

                    <span
                        className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[5px]
                            text-[#D4AF37]
                        "
                    >
                        Luxury Rental Search
                    </span>

                    <h2
                        className="
                            mt-6
                            !text-white
                            text-5xl
                            font-black
                        "
                    >
                        Find Your Perfect
                        <span
                            className="
                                block
                                !text-[#F97316]
                            "
                        >
                            Red Sea Property
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-8
                            text-slate-300
                        "
                    >
                        Explore verified rental
                        opportunities across
                        Hurghada, Sahl Hasheesh,
                        Makadi Bay and El Gouna
                        using our intelligent
                        search engine.
                    </p>

                </div>

                {/* STATS */}

                <div
                    className="
                        mb-12
                        grid
                        gap-6
                        md:grid-cols-3
                    "
                >

                    <div
                        className="
                            rounded-[30px]
                            bg-[#F97316]
                            p-8
                            text-center
                        "
                    >

                        <h3
                            className="
                                text-5xl
                                font-black
                                text-[#08101E]
                            "
                        >
                            {stats.total}
                        </h3>

                        <p
                            className="
                                mt-3
                                font-bold
                                text-[#111827]
                            "
                        >
                            Available Properties
                        </p>

                    </div>

                    <div
                        className="
                            rounded-[30px]
                            bg-[#D4AF37]
                            p-8
                            text-center
                        "
                    >

                        <h3
                            className="
                                text-5xl
                                font-black
                                text-black
                            "
                        >
                            {stats.featured}
                        </h3>

                        <p
                            className="
                                mt-3
                                font-bold
                                text-black
                            "
                        >
                            Featured Units
                        </p>

                    </div>

                    <div
                        className="
                            rounded-[30px]
                            bg-[#F97316]
                            p-8
                            text-center
                        "
                    >

                        <h3
                            className="
                                text-5xl
                                font-black
                                text-[#08101E]
                            "
                        >
                            {stats.villas}
                        </h3>

                        <p
                            className="
                                mt-3
                                font-bold
                                text-[#111827]
                            "
                        >
                            Luxury Villas
                        </p>

                    </div>

                </div>

                {/* FILTERS */}

                <RentSearchFilters
                    filters={filters}
                    updateFilter={updateFilter}
                />

                {/* RESET */}

                <div
                    className="
                        mt-8
                        flex
                        justify-center
                    "
                >

                    <button
                        onClick={resetFilters}
                        className="
                            rounded-2xl
                            border
                            border-[#D4AF37]
                            px-8
                            py-4
                            font-bold
                            text-[#D4AF37]
                            transition-all
                            duration-300
                            hover:bg-[#D4AF37]
                            hover:text-black
                        "
                    >
                        Reset Filters
                    </button>

                </div>

                {/* RESULTS */}

                <RentSearchResults
                    results={results}
                    sort={sort}
                    setSort={setSort}
                    loading={loading}
                />

            </div>

        </section>

    );

}