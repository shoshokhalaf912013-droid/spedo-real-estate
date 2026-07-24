"use client";

import { PropertyStatusEngine }
from "@/core/property/PropertyStatusEngine";

interface Props {

    propertyId: string;

    project: string;

    unitNo: string;

    building: string;

    floor: number;

    area: number;

    engine: PropertyStatusEngine;

    onRefresh?: () => void;

}

export default function PropertyActions({

    propertyId,

    project,

    unitNo,

    building,

    floor,

    area,

    engine,

    onRefresh

}: Props) {

    async function makeAvailable() {

        const ok = window.confirm(

`إعادة الوحدة إلى متاحة؟

المشروع:
${project}

الوحدة:
${unitNo}

المبنى:
${building}

الدور:
${floor}

المساحة:
${area} م²
`
        );

        if (!ok) {

            return;

        }
	
	(window as any).__SPEDO_STATUS__ =
            "Available";
        await engine.markAsAvailable(
            propertyId
        );

        alert(

`✅ تم إعادة الوحدة ${unitNo}

إلى قائمة الوحدات المتاحة بنجاح`
        );

        onRefresh?.();

    }

    async function makeReserved() {

        const ok = window.confirm(

`تأكيد حجز الوحدة؟

المشروع:
${project}

الوحدة:
${unitNo}

المبنى:
${building}

الدور:
${floor}

المساحة:
${area} م²

سيتم إخفاؤها من المستثمرين.
`
        );

        if (!ok) {

            return;

        }
	(window as any).__SPEDO_STATUS__ =
           "Reserved";

        await engine.markAsReserved(
            propertyId
        );

        alert(

`🟡 تم حجز الوحدة ${unitNo}

في مشروع ${project}`
        );

        onRefresh?.();

    }

    async function makeSold() {

        const ok = window.confirm(

`تأكيد بيع الوحدة؟

المشروع:
${project}

الوحدة:
${unitNo}

المبنى:
${building}

الدور:
${floor}

المساحة:
${area} م²

سيتم إخفاؤها من المستثمرين بعد البيع.
`
        );

        if (!ok) {

            return;

        }
	(window as any).__SPEDO_STATUS__ =
           "Sold";
        await engine.markAsSold(
            propertyId
        );

        alert(

`🔴 تم بيع الوحدة ${unitNo}

في مشروع ${project}

بنجاح`
        );

        onRefresh?.();

    }

    return (

        <div
            className="
                mt-6
                flex
                gap-3
            "
        >

            <button
                onClick={makeAvailable}
                className="
                    flex-1
                    rounded-xl
                    bg-green-600
                    px-4
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:bg-green-700
                "
            >
                🟢 متاح
            </button>

            <button
                onClick={makeReserved}
                className="
                    flex-1
                    rounded-xl
                    bg-yellow-500
                    px-4
                    py-3
                    font-bold
                    text-black
                    transition
                    hover:bg-yellow-600
                "
            >
                🟡 محجوز
            </button>

            <button
                onClick={makeSold}
                className="
                    flex-1
                    rounded-xl
                    bg-red-600
                    px-4
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:bg-red-700
                "
            >
                🔴 مباع
            </button>

        </div>

    );

}