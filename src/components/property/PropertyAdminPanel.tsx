"use client";

import PropertyStatusBadge
from "./PropertyStatusBadge";

import PropertyActions
from "./PropertyActions";

import {
    PropertyStatusEngine
} from "@/core/property/PropertyStatusEngine";

interface Props {

    propertyId: string;

    project: string;

    unitNo: string;

    building: string;

    floor: number;

    area: number;

    status: string;

    engine: PropertyStatusEngine;

    onRefresh?: () => void;

}

export default function PropertyAdminPanel({

    propertyId,

    project,

    unitNo,

    building,

    floor,

    area,

    status,

    engine,

    onRefresh

}: Props) {

    return (

        <div
            className="
                mt-6
                rounded-2xl
                border
                border-[#D4AF37]/20
                bg-[#0E1623]
                p-5
            "
        >

            <PropertyStatusBadge
                status={status}
            />

            <PropertyActions

                propertyId={propertyId}

                project={project}

                unitNo={unitNo}

                building={building}

                floor={floor}

                area={area}

                engine={engine}

                onRefresh={onRefresh}

            />

        </div>

    );

}