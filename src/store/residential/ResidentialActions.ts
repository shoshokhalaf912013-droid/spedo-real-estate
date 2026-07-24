import { residentialStore }
from "./ResidentialStore";

export function setResidentialType(

    id: string

){

    residentialStore

        .setCurrentType(id);

}