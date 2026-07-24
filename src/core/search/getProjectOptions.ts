import { projects } from "@/data/projects";

import type { ProjectOption }
from "./ProjectOption";

export function getProjectOptions():
ProjectOption[] {

    return [

        {

            label: "All Projects",

            value: "all"

        },

        ...projects.map(
            (project) => ({

                label:
                    project.metadata.name,

                value:
                    project.metadata.slug

            })
        )

    ];

}