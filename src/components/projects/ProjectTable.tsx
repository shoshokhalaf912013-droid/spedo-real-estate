"use client";

import type { PropertyUnit } from "@/types/property";

interface ProjectTableProps {
    project: readonly PropertyUnit[];
}

function formatPrice(
    price: number,
    currency: string
) {
    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency,
            maximumFractionDigits: 0
        }
    ).format(price);
}

export default function ProjectTable({
    project
}: ProjectTableProps) {

    if (project.length === 0) {

        return (

            <div
                className="
                rounded-3xl
                border
                border-white/10
                bg-[#111111]
                p-10
                text-center
                text-gray-400
                "
            >
                No units are currently available.
            </div>

        );

    }

    return (

        <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#111111]
            "
        >

            <div className="overflow-x-auto">

                <table
                    className="
                    min-w-full
                    border-collapse
                    text-left
                    "
                >

                    <thead
                        className="
                        border-b
                        border-white/10
                        bg-white/[0.03]
                        "
                    >

                        <tr>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Unit
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Type
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Building
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Floor
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Bedrooms
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Bathrooms
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Area
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Price
                            </th>

                            <th className="px-6 py-5 text-sm font-medium text-gray-400">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            project.map(

                                unit => (

                                    <tr
                                        key={unit.id}
                                        className="
                                        border-b
                                        border-white/5
                                        transition
                                        last:border-b-0
                                        hover:bg-white/[0.03]
                                        "
                                    >

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            font-medium
                                            text-white
                                            "
                                        >
                                            {unit.unitNo}
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            text-gray-300
                                            "
                                        >
                                            {unit.type}
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            text-gray-300
                                            "
                                        >
                                            {unit.building}
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            text-gray-300
                                            "
                                        >
                                            {unit.floor}
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            text-gray-300
                                            "
                                        >
                                            {unit.bedrooms}
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            text-gray-300
                                            "
                                        >
                                            {unit.bathrooms}
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            text-gray-300
                                            "
                                        >
                                            {unit.area}
                                            {" "}
                                            m²
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            font-medium
                                            text-[#d4af37]
                                            "
                                        >
                                            {
                                                formatPrice(
                                                    unit.price,
                                                    unit.currency
                                                )
                                            }
                                        </td>

                                        <td
                                            className="
                                            whitespace-nowrap
                                            px-6
                                            py-5
                                            "
                                        >

                                            <span
                                                className={`
                                                inline-flex
                                                rounded-full
                                                px-3
                                                py-1
                                                text-xs
                                                font-medium
                                                ${
                                                    unit.availability.available
                                                        ? "bg-green-500/10 text-green-400"
                                                        : "bg-red-500/10 text-red-400"
                                                }
                                                `}
                                            >
                                                {
                                                    unit.availability.available
                                                        ? "Available"
                                                        : "Unavailable"
                                                }
                                            </span>

                                        </td>

                                    </tr>

                                )

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}