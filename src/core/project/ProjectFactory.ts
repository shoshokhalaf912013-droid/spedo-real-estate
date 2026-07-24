import type { Project } from "./Project";

export interface CreateProjectInput {

    metadata: Project["metadata"];

    identity: Project["identity"];

    manifest: Project["manifest"];

    units?: Project["units"];

    assets?: Project["assets"];

}

export class ProjectFactory {

    create(
        input: CreateProjectInput
    ): Project {

        return {

            metadata: input.metadata,

            identity: input.identity,

            manifest: input.manifest,

            units: input.units ?? [],

            assets: input.assets ?? {}

        };

    }

}

export const projectFactory =
    new ProjectFactory();

export default projectFactory;