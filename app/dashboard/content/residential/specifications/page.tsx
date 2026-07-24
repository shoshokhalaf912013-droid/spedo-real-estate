"use client";

import { useState } from "react";

import { specifications }
from "@/features/residential/data/specifications";

export default function ResidentialSpecificationsPage() {

    const [

        floors,

        setFloors,

    ] = useState(

        specifications.floors

    );

    const [

        newFloor,

        setNewFloor,

    ] = useState("");

    function addFloor() {

        if (

            !newFloor.trim()

        ) return;

        setFloors(

            [

                ...floors,

                newFloor

            ]

        );

        setNewFloor("");

    }

    function removeFloor(

        floor: string

    ) {

        setFloors(

            floors.filter(

                item =>

                    item !== floor

            )

        );

    }

    return (

        <main
            className="
                mx-auto
                max-w-6xl
                p-10
            "
        >

            <h1
                className="
                    text-4xl
                    font-black
                "
            >

                Residential Specifications

            </h1>

            <div
                className="
                    mt-10
                    rounded-3xl
                    border
                    p-8
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                    "
                >

                    Floors

                </h2>

                <div
                    className="
                        mt-6
                        flex
                        gap-3
                    "
                >

                    <input

                        value={newFloor}

                        onChange={e=>

                            setNewFloor(

                                e.target.value

                            )

                        }

                        placeholder="New Floor"

                        className="
                            h-12
                            flex-1
                            rounded-xl
                            border
                            px-4
                        "

                    />

                    <button

                        onClick={addFloor}

                        className="
                            rounded-xl
                            bg-orange-500
                            px-6
                            font-bold
                        "

                    >

                        Add

                    </button>

                </div>

                <div
                    className="
                        mt-8
                        flex
                        flex-wrap
                        gap-3
                    "
                >

                    {

                        floors.map(

                            floor=>(

                                <div

                                    key={floor}

                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        px-4
                                        py-3
                                    "
                                >

                                    {floor}

                                    <button

                                        onClick={()=>

                                            removeFloor(

                                                floor

                                            )

                                        }

                                        className="
                                            text-red-500
                                        "
                                    >

                                        ✕

                                    </button>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </main>

    );

}