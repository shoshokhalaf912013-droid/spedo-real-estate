"use client";

import ProjectSearchClientV2
from "./ProjectSearchClientV2";

import { getAllUnits }
from "./getAllUnits";

export default function UniversalProjectSearch() {

    const units = getAllUnits();

    return (

        <ProjectSearchClientV2
            units={units}
        />

    );

}