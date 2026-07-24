"use client";

import Link from "next/link";

import type { PropertyUnit } from "@/types/property-v2";
import type { SearchSort } from "@/core/search/SearchSort";
import { getProjectCover }
from "../utils/getProjectCover";

interface RentSearchResultsProps {
    results: PropertyUnit[];

    sort: SearchSort;

    setSort: (
        value: SearchSort
    ) => void;

    loading: boolean;
}

export default function RentSearchResults({
    results,
    sort,
    setSort,
    loading,
}: RentSearchResultsProps) {

    if (loading) {

        return (

            <div
                className="
                    py-24
                    text-center
                    text-white
                "
            >
                Loading Properties...
            </div>

        );

    }

    return (

        <section className="mt-20">

            {/* TOP BAR */}

            <div
                className="
                    mb-10
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                <div>

                    <h2
                        className="
                            !text-white
                            text-4xl
                            font-black
                        "
                    >
                        {results.length} VERIFIED RENTALS
                    </h2>

                    <p
                        className="
                            mt-3
                            text-slate-300
                        "
                    >
                        Luxury properties across
                        Hurghada, Sahl Hasheesh
                        and the Red Sea.
                    </p>

                </div>

                <select
                    value={sort}
                    onChange={(e) =>
                        setSort(
                            e.target.value as SearchSort
                        )
                    }
                    className="
                        w-[240px]
                        rounded-2xl
                        border
                        border-[#F97316]
                        bg-[#F97316]
                        px-5
                        py-4
                        font-bold
                        text-[#08101E]
                    "
                >
                    <option value="default">
                        Default
                    </option>

                    <option value="price-asc">
                        Price ↑
                    </option>

                    <option value="price-desc">
                        Price ↓
                    </option>

                    <option value="area-asc">
                        Area ↑
                    </option>

                    <option value="area-desc">
                        Area ↓
                    </option>

                    <option value="bedrooms">
                        Bedrooms
                    </option>

                </select>

            </div>

            {/* GRID */}

            <div
                className="
                    grid
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {results.map((unit) => (

                    <div
                        key={unit.id}
                        className="
                            overflow-hidden
                            rounded-[36px]
                            bg-[#F97316]
                            shadow-[0_20px_60px_rgba(249,115,22,0.25)]
                            transition-all
                            duration-500
                            hover:-translate-y-3
                        "
                    >

                        {/* IMAGE */}

                        <div
                            className="
                                relative
                                h-[260px]
                                bg-[#08101E]
                            "
                        >

                             <img
 				  src={getProjectCover(unit.project)}
   				  alt={unit.project}
   				  className="
   			          h-full
 			          w-full
   			          object-cover
  			     "
			      />
                            <div
                                className="
                                    absolute
                                    left-5
                                    top-5
                                    rounded-full
                                    bg-[#D4AF37]
                                    px-4
                                    py-2
                                    text-sm
                                    font-black
                                    text-black
                                "
                            >
                                VERIFIED
                            </div>

                        </div>

                        {/* CONTENT */}

                        <div className="p-8">

                            <p
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[3px]
                                    text-[#08101E]
                                "
                            >
                                {unit.project}
                            </p>

                            <h3
                                className="
                                    mt-4
                                    text-3xl
                                    font-black
                                    !text-[#08101E]
                                "
                            >
                                {unit.type}
                            </h3>

                            <div
                                className="
                                    mt-6
                                    flex
                                    flex-wrap
                                    gap-3
                                "
                            >

                                <span
                                    className="
                                        rounded-full
                                        bg-[#08101E]
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >
                                    {unit.bedrooms} Beds
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        bg-[#08101E]
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >
                                    {unit.bathrooms} Baths
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        bg-[#08101E]
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >
                                    {unit.view}
                                </span>

                            </div>

                            <div className="mt-8">

                                <span
                                    className="
                                        text-sm
                                        font-bold
                                        text-[#08101E]
                                    "
                                >
                                    Price
                                </span>

                                <h4
                                    className="
                                        mt-2
                                        text-4xl
                                        font-black
                                        !text-[#08101E]
                                    "
                                >
                                    {unit.price.toLocaleString()}
                                    <span
                                        className="
                                            ml-2
                                            text-xl
                                        "
                                    >
                                        EGP
                                    </span>
                                </h4>

                            </div>

                            <Link
                                href={unit.seo.url}
                                className="
                                    mt-8
                                    flex
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#08101E]
                                    py-4
                                    font-bold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-black
                                "
                            >
                                View Details
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}