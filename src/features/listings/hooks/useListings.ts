"use client";

import { useMemo, useState } from "react";

import { listings } from "@/data/listings";

import type {
    Listing,
    ListingCategory,
    ListingPropertyType,
    ListingSaleType,
    ListingSector,
} from "@/data/listings/types";

export function useListings() {

    const [
        sector,
        setSector,
    ] = useState<
        ListingSector | "all"
    >("all");

    const [
        category,
        setCategory,
    ] = useState<
        ListingCategory | "all"
    >("all");

    const [
        saleType,
        setSaleType,
    ] = useState<
        ListingSaleType | "all"
    >("all");

    const [
        propertyType,
        setPropertyType,
    ] = useState<
        ListingPropertyType | "all"
    >("all");

    const [
        search,
        setSearch,
    ] = useState("");

    const results = useMemo(() => {

        let data: Listing[] = [...listings];

        if (sector !== "all") {

            data = data.filter(
                (item) =>
                    item.sector === sector
            );

        }

        if (category !== "all") {

            data = data.filter(
                (item) =>
                    item.category === category
            );

        }

        if (
            category === "sale" &&
            saleType !== "all"
        ) {

            data = data.filter(
                (item) =>
                    item.saleType === saleType
            );

        }

        if (
            propertyType !== "all"
        ) {

            data = data.filter(
                (item) =>
                    item.propertyType ===
                    propertyType
            );

        }

        if (search.trim()) {

            const q =
                search.toLowerCase();

            data = data.filter(
                (item) =>

                    item.title
                        .toLowerCase()
                        .includes(q)

                    ||

                    item.city
                        .toLowerCase()
                        .includes(q)

                    ||

                    item.district
                        .toLowerCase()
                        .includes(q)
            );

        }

        return data;

    }, [
        sector,
        category,
        saleType,
        propertyType,
        search,
    ]);

    function resetFilters() {

        setSector("all");

        setCategory("all");

        setSaleType("all");

        setPropertyType("all");

        setSearch("");

    }

    return {

        results,

        total:
            results.length,

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

    };

}