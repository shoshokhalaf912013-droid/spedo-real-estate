"use client";

import PropertyWizard from "./PropertyWizard";

interface Props {
    propertyType: string;
}

export default function CompactResidentialForm({
    propertyType,
}: Props) {
    return (
        <PropertyWizard
            propertyType={propertyType}
        />
    );
}