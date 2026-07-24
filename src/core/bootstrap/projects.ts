// src/core/bootstrap/projects.ts

import { projects }
from "@/data/projects";

import {
    projectEngine
}
from "@/core/project";

if (

    projectEngine.count() === 0

) {

    projectEngine.boot(
        projects
    );

}

