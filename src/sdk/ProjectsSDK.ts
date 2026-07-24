import { projectEngine } from "@/core/project";

export class ProjectsSDK {

    all() {
        return projectEngine.projects();
    }

    get(id: string) {
        return projectEngine.find(id);
    }

    exists(id: string) {
        return this.get(id) !== undefined;
    }

    count() {
        return projectEngine.count();
    }

}