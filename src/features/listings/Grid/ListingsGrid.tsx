"use client";

import ListingCard from "./ListingCard";

import { useListings }
from "../hooks/useListings";

import type {
    ListingCategory,
} from "@/data/listings/types";

interface ListingsGridProps {

    category?:
        ListingCategory;

}

export default function ListingsGrid({
    category,
}: ListingsGridProps) {

    const {
        results,
    } = useListings();

    const filteredResults =

        category

            ? results.filter(
                  (item) =>
                      item.category ===
                      category
              )

            : results;

    if (
        filteredResults.length === 0
    ) {

        return (

            <section
                className="
                    py-24
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-6
                    "
                >

                    <div
                        className="
                            rounded-[40px]
                            bg-[#F97316]
                            p-16
                            text-center
                        "
                    >

                        <h2
                            className="
                                !text-[#08101E]
                                text-4xl
                                font-black
                            "
                        >
                            No Properties Found
                        </h2>

                        <p
                            className="
                                mt-6
                                text-lg
                                text-[#111827]
                            "
                        >
                            Try changing your
                            filters or add new
                            listings to the
                            database.
                        </p>

                    </div>

                </div>

            </section>

        );

    }

    return (

        <section
            className="
                py-20
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                {/* RESULTS HEADER */}

                <div
                    className="
                        mb-12
                        flex
                        items-center
                        justify-between
                    "
                >

                    <h2
                        className="
                            text-4xl
                            font-black
                            text-white
                        "
                    >
                        {filteredResults.length}
                        {" "}
                        Properties Found
                    </h2>

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

                    {filteredResults.map(
                        (listing) => (

                            <ListingCard
                                key={
                                    listing.id
                                }
                                listing={
                                    listing
                                }
                            />

                        )
                    )}

                </div>

            </div>

        </section>

    );

}