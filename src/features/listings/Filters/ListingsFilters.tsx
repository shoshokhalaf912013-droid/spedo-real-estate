"use client";

import { useListings }
from "../hooks/useListings";

import type {
    ListingCategory,
} from "@/data/listings/types";

interface ListingsFiltersProps {

    defaultCategory?:
        ListingCategory;

}

export default function ListingsFilters({
    defaultCategory,
}: ListingsFiltersProps) {

    const {

        sector,
        setSector,

        category,
        setCategory,

        saleType,
        setSaleType,

        propertyType,
        setPropertyType,

        search,
        setSearch,

        resetFilters,

    } = useListings();

    return (

        <section
            className="
                py-12
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
                        p-10
                    "
                >

                    <div
                        className="
                            grid
                            gap-6
                            md:grid-cols-2
                            xl:grid-cols-5
                        "
                    >

                        {/* SEARCH */}

                        <input
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                            placeholder="
                            Search city,
                            district or title...
                            "
                            className="
                                rounded-2xl
                                border-0
                                bg-[#08101E]
                                px-6
                                py-4
                                text-white
                                outline-none
                            "
                        />

                        {/* SECTOR */}

                        <select
                            value={sector}
                            onChange={(e) =>
                                setSector(
                                    e.target.value as any
                                )
                            }
                            className="
                                rounded-2xl
                                bg-[#08101E]
                                px-6
                                py-4
                                font-bold
                                text-white
                            "
                        >

                            <option value="all">
                                All Sectors
                            </option>

                            <option value="residential">
                                Residential
                            </option>

                            <option value="commercial">
                                Commercial
                            </option>

                        </select>

                        {/* CATEGORY */}

                        <select
                            value={
                                defaultCategory
                                ??
                                category
                            }
                            onChange={(e) =>
                                setCategory(
                                    e.target.value as any
                                )
                            }
                            disabled={
                                !!defaultCategory
                            }
                            className="
                                rounded-2xl
                                bg-[#08101E]
                                px-6
                                py-4
                                font-bold
                                text-white
                            "
                        >

                            <option value="all">
                                All Categories
                            </option>

                            <option value="rent">
                                Rent
                            </option>

                            <option value="sale">
                                Sale
                            </option>

                        </select>

                        {/* SALE TYPE */}

                        <select
                            value={saleType}
                            onChange={(e) =>
                                setSaleType(
                                    e.target.value as any
                                )
                            }
                            className="
                                rounded-2xl
                                bg-[#08101E]
                                px-6
                                py-4
                                font-bold
                                text-white
                            "
                        >

                            <option value="all">
                                Cash &
                                Installments
                            </option>

                            <option value="cash">
                                Cash
                            </option>

                            <option value="installments">
                                Installments
                            </option>

                        </select>

                        {/* PROPERTY TYPE */}

                        <select
                            value={propertyType}
                            onChange={(e) =>
                                setPropertyType(
                                    e.target.value as any
                                )
                            }
                            className="
                                rounded-2xl
                                bg-[#08101E]
                                px-6
                                py-4
                                font-bold
                                text-white
                            "
                        >

                            <option value="all">
                                All Types
                            </option>

                            <option value="apartment">
                                Apartments
                            </option>

                            <option value="studio">
                                Studios
                            </option>

                            <option value="villa">
                                Villas
                            </option>

                            <option value="chalet">
                                Chalets
                            </option>

                            <option value="penthouse">
                                Penthouses
                            </option>

                            <option value="duplex">
                                Duplexes
                            </option>

                            <option value="townhouse">
                                Townhouses
                            </option>

                            <option value="twinhouse">
                                Twin Houses
                            </option>

                            <option value="office">
                                Offices
                            </option>

                            <option value="shop">
                                Shops
                            </option>

                            <option value="clinic">
                                Clinics
                            </option>

                            <option value="restaurant">
                                Restaurants
                            </option>

                            <option value="warehouse">
                                Warehouses
                            </option>

                            <option value="factory">
                                Factories
                            </option>

                            <option value="hotel">
                                Hotels
                            </option>

                            <option value="land">
                                Land
                            </option>

                        </select>

                    </div>

                    {/* RESET */}

                    <div
                        className="
                            mt-8
                            flex
                            justify-center
                        "
                    >

                        <button
                            onClick={
                                resetFilters
                            }
                            className="
                                rounded-2xl
                                bg-[#08101E]
                                px-10
                                py-4
                                text-lg
                                font-black
                                text-white
                                transition-all
                                duration-300
                                hover:bg-black
                            "
                        >
                            Reset Filters
                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}