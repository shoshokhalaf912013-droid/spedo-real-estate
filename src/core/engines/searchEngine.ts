import { PropertyUnit } from "@/types/property";

export class SearchEngine {

    constructor(private units: PropertyUnit[]) {}

    byBudget(max:number){

        return this.units.filter(u=>u.price<=max);

    }

    byArea(min:number,max:number){

        return this.units.filter(

            u=>u.area>=min && u.area<=max

        );

    }

    byBedrooms(count:number){

        return this.units.filter(

            u=>u.bedrooms===count

        );

    }

    byProject(project:string){

        return this.units.filter(

            u=>u.project===project

        );

    }

}