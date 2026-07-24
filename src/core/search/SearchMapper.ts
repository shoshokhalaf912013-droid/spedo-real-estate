import type { Project } from "@/core/project";
import type { SearchUnit } from "./SearchModel";

export function mapProjectToSearchUnits(
    project: Project
): SearchUnit[] {

    return project.units.map(

        unit => ({

            id:
                unit.id,

            code:
                unit.unitNo,

            slug:
                unit.id,

            projectId:
                project.metadata.id,

            projectName:
                project.metadata.name,

            developer:
                unit.developer ||
                project.metadata.developer,

            city:
                project.metadata.city,

            district:
                project.metadata.district,

            type:
                unit.type,

            bedrooms:
                unit.bedrooms,

            bathrooms:
                unit.bathrooms,

            area:
                unit.area,

            building:
                unit.building,

            floor:
                unit.floor,

            view:
                unit.view,

            finishing:
                unit.finishing,

            price:
                unit.price,

            currency:
                unit.currency,

            status:
                unit.status,

            featured:
                false

        })

    );

}