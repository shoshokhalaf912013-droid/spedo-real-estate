import { PropertyUnit } from "@/types/property";

export class Registry {

    private projects = new Map<string, PropertyUnit[]>();

    register(

        project: string,

        units: PropertyUnit[]

    ) {

        this.projects.set(project, units);

    }

    get(project: string) {

        return this.projects.get(project) || [];

    }

    all() {

        return Array.from(this.projects.values()).flat();

    }

    projectsList() {

        return Array.from(this.projects.keys());

    }

}

export const registry = new Registry();