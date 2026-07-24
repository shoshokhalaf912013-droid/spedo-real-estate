import { residentialStore }
from "./ResidentialStore";

export function getResidentialTypes() {

    return residentialStore
        .getState()
        .types;

}

export function getResidentialType(

    id: string

) {

    return residentialStore

        .getState()

        .types

        .find(

            item =>

                item.id===id

        );

}