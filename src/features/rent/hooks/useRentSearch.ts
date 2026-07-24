"use client";

import { useEffect, useMemo, useState } from "react";

import { SearchService } from "@/core/search/SearchService";
import type { SearchFilters } from "@/core/search/SearchFilters";
import type { SearchSort } from "@/core/search/SearchSort";

import type { PropertyUnit } from "@/types/property-v2";

const DEFAULT_FILTERS: SearchFilters = {
    project: "all",
    propertyType: "all",
    bedrooms: "all",
    budget: "all",
    view: "all",
};

export function useRentSearch() {

    const [filters, setFilters] =
        useState<SearchFilters>(
            DEFAULT_FILTERS
        );

    const [sort, setSort] =
        useState<SearchSort>(
            "default"
        );

    const [results, setResults] =
        useState<PropertyUnit[]>([]);

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {

        setLoading(true);

        const timer =
            setTimeout(() => {

                const data =
                    SearchService.search(
                        filters,
                        sort
                    );

                const availableUnits =
                    data.filter(
                        (unit) =>
                            unit.availability
                                .available
                    );

                setResults(
                    availableUnits
                );

                setLoading(false);

            }, 300);

        return () =>
            clearTimeout(timer);

    }, [filters, sort]);

    const stats = useMemo(() => {

        return {

            total:
                results.length,

            featured:
                results.filter(
                    (unit) =>
                        unit.featured
                ).length,

            villas:
                results.filter(
                    (unit) =>
                        unit.type
                            .toLowerCase()
                            .includes("villa")
                ).length,

            apartments:
                results.filter(
                    (unit) =>
                        unit.type
                            .toLowerCase()
                            .includes("apartment")
                ).length,

        };

    }, [results]);

    function updateFilter(
        key: keyof SearchFilters,
        value: SearchFilters[keyof SearchFilters]
    ) {

        setFilters(
            (prev) => ({

                ...prev,

                [key]: value,

            })
        );

    }

    function resetFilters() {

        setFilters(
            DEFAULT_FILTERS
        );

        setSort(
            "default"
        );

    }

    return {

        filters,

        updateFilter,

        resetFilters,

        sort,

        setSort,

        results,

        loading,

        stats,

    };

}