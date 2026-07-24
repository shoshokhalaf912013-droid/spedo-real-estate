export const ResidentialPropertyTypes = [
    "Apartment",
    "Studio",
    "Duplex",
    "Penthouse",
    "Villa",
    "Standalone Villa",
    "Twin House",
    "Townhouse",
    "Chalet",
    "Cabin",
    "Loft",
    "Roof",
    "Mansion",
    "Palace",
    "Farm House",
] as const;

export const ResidentialPurpose = [
    "Sale",
    "Rent",
] as const;

export const ResidentialPayment = [
    "Cash",
    "Installments",
    "Cash + Installments",
    "Monthly",
    "Quarterly",
    "Yearly",
] as const;

export const ResidentialCurrency = [
    "EGP",
    "USD",
    "AED",
    "SAR",
    "EUR",
    "GBP",
] as const;

export const ResidentialStatus = [
    "Draft",
    "Published",
    "Reserved",
    "Sold",
    "Rented",
    "Hidden",
] as const;