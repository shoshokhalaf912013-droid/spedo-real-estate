"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { PropertyUnit }
from "@/types/property";

type Props = {

    units: PropertyUnit[];

};

export default function ProjectSearchClientV2({
    units
}: Props) {

    const [query, setQuery] =
        useState("");

    const [selectedProject, setSelectedProject] =
        useState("");

    const [hasSearched, setHasSearched] =
        useState(false);

    const projects =
        Array.from(

            new Set(

                units.map(

                    (unit: any) =>

                        unit.project

                )

            )

        )

        .filter(Boolean)

        .sort();

    const filteredUnits =
        useMemo(() => {

            if (!hasSearched) {

                return [];

            }

            return units.filter(
                (unit: any) => {

                    const searchText = [

                        unit.project,

                        unit.unitNo,

                        unit.type,

                        unit.view,

                        unit.building,

                        String(unit.area),

                        String(unit.price)

                    ]

                        .join(" ")

                        .toLowerCase();

                    const matchesQuery =

                        !query ||

                        searchText.includes(

                            query.toLowerCase()

                        );

                    const matchesProject =

                        !selectedProject ||

                        unit.project ===
                        selectedProject;

                    return (

                        matchesQuery &&

                        matchesProject

                    );

                }

            );

        }, [

            units,

            query,

            selectedProject,

            hasSearched

        ]);

    return (

        <section className="py-20">

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) =>
                        setQuery(
                            e.target.value
                        )
                    }
                    className="
                        w-full
                        rounded-xl
                        border
                        p-4
                    "
                />

                <div className="mt-4">

                    <select
                        value={
                            selectedProject
                        }
                        onChange={(e) =>
                            setSelectedProject(
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            p-4
                        "
                    >

                        <option value="">

                            All Projects

                        </option>

                        {projects.map(

                            project => (

                                <option
                                    key={project}
                                    value={project}
                                >

                                    {project}

                                </option>

                            )

                        )}

                    </select>

                </div>

                <button
                    onClick={() =>
                        setHasSearched(
                            true
                        )
                    }
                    className="
                        mt-6
                        rounded-xl
                        bg-amber-500
                        px-6
                        py-3
                    "
                >

                    SEARCH

                </button>

                <div
                    className="
                        mt-12
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {filteredUnits.map(
                        (unit: any) => (

                            <div
                                key={unit.id}
                                className="
                                    rounded-2xl
                                    border
                                    p-6
                                "
                            >

                                <h3>

                                    {unit.project}

                                </h3>

                                <div>

                                    {unit.unitNo}

                                </div>

                                <div>

                                    {unit.type}

                                </div>

                                <div>

                                    {unit.price
                                        ?.toLocaleString()}

                                </div>

                                <Link
                                    href={
                                        `/property/${unit.slug}`
                                    }
                                >

                                    Details

                                </Link>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>

    );

}