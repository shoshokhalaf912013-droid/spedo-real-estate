import residentialTypes
from "@/features/residential/data";

import type { ResidentialState }
from "./ResidentialState";

class ResidentialStore {

    private state:
    ResidentialState = {

        currentType:

            residentialTypes[0].id,

        types:

            residentialTypes

    };

    getState() {

        return this.state;

    }

    setCurrentType(

        id: string

    ) {

        this.state.currentType = id;

    }

    updateTypes(

        types:

        ResidentialState["types"]

    ) {

        this.state.types = types;

    }

}

export const residentialStore =
new ResidentialStore();