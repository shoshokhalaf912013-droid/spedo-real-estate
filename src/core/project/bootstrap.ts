// src/core/project/bootstrap.ts

import { projects }
from "@/data/projects";

import {
    projectEngine
}
from "@/core/project";

console.log("");

console.log(
    "BOOTSTRAP PROJECTS:"
);

console.log(

    projects.map(
        project =>
            project.metadata.name
    )

);

console.log("");

if (

    projectEngine.count() === 0

) {

    projectEngine.boot(

        projects

    );

}