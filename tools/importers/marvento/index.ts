import { importMarvento }
from "./importer";

import { generateUnits }
from "./generator";

const units =

    importMarvento(

        "./developer-files/marvento/MARVENTO AVAILABILITY.xlsx"

    );

generateUnits(units);