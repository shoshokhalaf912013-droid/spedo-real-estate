import { projects }
from "@/data/projects";

import type { Project }
from "@/core/project";

import type { PropertyUnit }
from "@/types/property/Property";

export class PropertyIndex {

    private units: PropertyUnit[] = [];

    refresh(): void {

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "PROPERTY INDEX REFRESH"
        );

        console.log(
            "PROJECT COUNT:",
            projects.length
        );

        console.log(
            "PROJECT NAMES:"
        );

        console.log(

            projects.map(

                project => ({

                    id:
                        project.metadata.id,

                    name:
                        project.metadata.name,

                    units:
                        project.units.length

                })

            )

        );

        this.units =

            projects.flatMap(

                project =>

                    project.units

            );

        console.log(
            "TOTAL INDEXED UNITS:",
            this.units.length
        );

        console.log(
            "================================"
        );

        console.log("");

    }

    all(): PropertyUnit[] {

        this.refresh();

        return this.units;

    }

    projects(): Project[] {

        return projects;

    }

    count(): number {

        return this.all().length;

    }

    project(
        projectId: string
    ): PropertyUnit[] {

        return this
            .all()
            .filter(

                unit =>

                    unit.project ===
                    projectId

                    ||

                    unit.compound ===
                    projectId

            );

    }

    available(): PropertyUnit[] {

        return this
            .all()
            .filter(

                unit =>

                    unit.availability.available

            );

    }

    featured(): PropertyUnit[] {

        return this
            .all()
            .filter(

                unit =>

                    unit.featured

            );

    }

    find(
        id: string
    ): PropertyUnit | undefined {

        return this
            .all()
            .find(

                unit =>

                    unit.id === id

            );

    }

}

export const propertyIndex =
    new PropertyIndex();

export default propertyIndex;
