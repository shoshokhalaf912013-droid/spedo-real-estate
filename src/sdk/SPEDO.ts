import { SearchSDK } from "./SearchSDK";
import { ProjectsSDK } from "./ProjectsSDK";

export class SPEDO {

    readonly search: SearchSDK;

    readonly projects: ProjectsSDK;

    constructor() {

        this.search = new SearchSDK();

        this.projects = new ProjectsSDK();

    }

}