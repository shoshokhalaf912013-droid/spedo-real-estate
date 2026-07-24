import { Project } from "./Project";

export interface ValidationError {

    field: string;

    message: string;

}

export class ProjectValidator {

    validate(

        project: Project

    ): ValidationError[] {

        const errors: ValidationError[] = [];

        if (!project.metadata.id.trim()) {

            errors.push({

                field: "metadata.id",

                message: "Project ID is required."

            });

        }

        if (!project.metadata.slug.trim()) {

            errors.push({

                field: "metadata.slug",

                message: "Project slug is required."

            });

        }

        if (!project.metadata.name.trim()) {

            errors.push({

                field: "metadata.name",

                message: "Project name is required."

            });

        }

        if (!project.identity.projectCode.trim()) {

            errors.push({

                field: "identity.projectCode",

                message: "Project code is required."

            });

        }

        if (project.units.length === 0) {

            errors.push({

                field: "units",

                message: "Project must contain at least one unit."

            });

        }

        if (!project.manifest.ready) {

            errors.push({

                field: "manifest.ready",

                message: "Project is not marked as ready."

            });

        }

        return errors;

    }

    isValid(

        project: Project

    ): boolean {

        return this.validate(project).length === 0;

    }

}

export const projectValidator =
    new ProjectValidator();