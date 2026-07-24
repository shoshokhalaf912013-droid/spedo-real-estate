import { PropertyUnit } from "@/types/property";

export class Database {

    private projects = new Map<string, PropertyUnit[]>();

    addProject(name: string, units: PropertyUnit[]) {

        this.projects.set(name, units);

    }

    getProject(name: string) {

        return this.projects.get(name) || [];

    }

    getProjects() {

        return Array.from(this.projects.keys());

    }

    getAllUnits() {

        return Array.from(this.projects.values()).flat();

    }

}