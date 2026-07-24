import { searchService }
from "@/services/search/SearchService";

import type { AIQuery }
from "./types";

type SearchResults =
    ReturnType<
        typeof searchService.all
    >;

type PropertyUnit =
    SearchResults[number];

export class RecommendationEngine {

    recommend(
        query: AIQuery
    ): PropertyUnit[] {

        let units:
            PropertyUnit[] = [

                ...searchService.all()

            ];

        // =====================
        // DEBUG
        // =====================

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "RECOMMENDATION ENGINE"
        );

        console.log(
            "TOTAL UNITS:",
            units.length
        );

        console.log(
            "FIRST 20 PROJECTS:"
        );

        console.log(

            units
                .slice(0, 20)
                .map(
                    unit =>
                        unit.project
                )

        );

        console.log(
            "QUERY:",
            query
        );

        console.log(
            "================================"
        );

        console.log("");

        // =====================
        // PROJECT
        // =====================

        if (query.project) {

            console.log(
                "FILTER PROJECT:",
                query.project
            );

            const projectQuery =
                query.project.toLowerCase();

            units = units.filter(

                unit =>

                    unit.project
                        .toLowerCase()
                        .includes(
                            projectQuery
                        )

            );

            console.log(
                "AFTER PROJECT FILTER:",
                units.length
            );

        }

        // =====================
        // TYPE
        // =====================

        if (query.type) {

            const typeQuery =
                query.type.toLowerCase();

            units = units.filter(

                unit =>

                    unit.type
                        .toLowerCase()
                        .includes(
                            typeQuery
                        )

            );

        }

        // =====================
        // VIEW
        // =====================

        if (query.view) {

            const viewQuery =
                query.view.toLowerCase();

            units = units.filter(

                unit =>

                    unit.view
                        .toLowerCase()
                        .includes(
                            viewQuery
                        )

            );

        }

        // =====================
        // BEDROOMS
        // =====================

        if (

            query.bedrooms !== undefined

        ) {

            units = units.filter(

                unit =>

                    unit.bedrooms ===
                    query.bedrooms

            );

        }

        // =====================
        // FAMILY MODE
        // =====================

        if (query.family) {

            units = units.filter(

                unit =>

                    unit.bedrooms >= 2

            );

        }

        // =====================
        // PRICE
        // =====================

        if (

            query.minPrice !== undefined

        ) {

            units = units.filter(

                unit =>

                    unit.price >=
                    query.minPrice!

            );

        }

        if (

            query.maxPrice !== undefined

        ) {

            units = units.filter(

                unit =>

                    unit.price <=
                    query.maxPrice!

            );

        }

        // =====================
        // AVAILABLE ONLY
        // =====================

        units = units.filter(

            unit =>

                unit.availability.available

        );

        console.log(
            "AFTER AVAILABLE FILTER:",
            units.length
        );

        // =====================
        // SORTING
        // =====================

        switch (query.sortBy) {

            case "price_desc":

                units.sort(

                    (a, b) =>

                        b.price - a.price

                );

                break;

            case "area_asc":

                units.sort(

                    (a, b) =>

                        a.area - b.area

                );

                break;

            case "area_desc":

                units.sort(

                    (a, b) =>

                        b.area - a.area

                );

                break;

            case "price_asc":

            default:

                units.sort(

                    (a, b) =>

                        a.price - b.price

                );

        }

        console.log(
            "FINAL RESULTS:",
            units.length
        );

        return units;

    }

}

export const recommendationEngine =
    new RecommendationEngine();

export default recommendationEngine;