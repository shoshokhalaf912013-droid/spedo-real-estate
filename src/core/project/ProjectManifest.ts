import { Project } from "./Project";

export class ProjectManifest {

    validate(

        project: Project

    ): boolean {

        return (

            project.metadata.id.length > 0 &&

            project.metadata.slug.length > 0 &&

            project.metadata.name.length > 0 &&

            project.identity.projectCode.length > 0 &&

            project.units.length > 0 &&

            project.manifest.ready

        );

    }

    version(

        project: Project

    ): string {

        return project.metadata.version;

    }

    schema(

        project: Project

    ): string {

        return project.manifest.schema;

    }

    summary(

        project: Project

    ) {

        return {

            id: project.metadata.id,

            name: project.metadata.name,

            developer: project.metadata.developer,

            units: project.units.length,

            version: project.metadata.version,

            published: project.manifest.published,

            searchable: project.manifest.searchable

        };

    }

}

export const projectManifest =
    new ProjectManifest();