import { projects }
from "@/data/projects";

import { projectEngine }
from "@/core/project";

projectEngine.boot(
    projects
);

console.log("");

console.log(
    "================================"
);

console.log(
    "PROJECT ENGINE"
);

console.log(
    "================================"
);

console.log(
    "Projects :",
    projectEngine.count()
);

console.log(
    projectEngine.ids()
);

console.log(
    projectEngine.projects()
);

console.log("");