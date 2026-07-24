"use client";

import PropertyBuilder from "@/features/property-builder/PropertyBuilder";

export default function CreatePropertyPage() {
    return (
        <main
            className="
                min-h-screen
                bg-[#020817]
                p-10
            "
        >
            <PropertyBuilder />
        </main>
    );
}