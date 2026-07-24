import {
    residentialListings
}
from "./residential";

import {
    commercialListings
}
from "./commercial";

export const listings = [

    ...residentialListings,

    ...commercialListings,

];