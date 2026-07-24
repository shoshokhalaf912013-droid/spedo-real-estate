"use client";

import { useState } from "react";

import Sidebar
from "./components/Sidebar";

import MediaEditor
from "./components/MediaEditor";

export default function ResidentialContentPage() {

    const [

        propertyType,

        setPropertyType,

    ] = useState(

        "Apartments"

    );

    return (

        <main
            className="
                min-h-screen
                bg-[#020817]
                p-8
            "
        >

            <h1
                className="
                    mb-8
                    text-4xl
                    font-black
                    text-white
                "
            >

                Residential Content Manager

            </h1>

            <div
                className="
                    grid
                    gap-8
                    lg:grid-cols-[280px_1fr]
                "
            >

                <Sidebar

                    active={propertyType}

                    onChange={setPropertyType}

                />

                <div>

                    <div
                        className="
                            mb-8
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#08101E]
                            p-6
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-[#F97316]
                            "
                        >

                            {propertyType}

                        </h2>

                        <p
                            className="
                                mt-2
                                text-slate-400
                            "
                        >

                            Manage media for this residential category.

                        </p>

                    </div>

                    <MediaEditor />

                </div>

            </div>

        </main>

    );

}