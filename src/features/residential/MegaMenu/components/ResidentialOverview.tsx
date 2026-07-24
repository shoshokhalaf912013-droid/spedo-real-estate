"use client";

import type {
    ResidentialType,
} from "../../data/types";

interface Props {

    data: ResidentialType;

}

export default function ResidentialOverview({

    data,

}: Props) {

    return (

        <div
            className="
                rounded-3xl
                border
                border-white/10
                bg-[#08101E]
                p-6
                lg:p-8
            "
        >

            <h2
                className="
                    text-3xl
                    font-black
                    text-white
                    lg:text-4xl
                "
            >

                {data.title}

            </h2>

            <p
                className="
                    mt-2
                    text-base
                    text-[#F97316]
                    lg:text-lg
                "
            >

                {data.subtitle}

            </p>

            <p
                className="
                    mt-6
                    leading-8
                    text-slate-300
                "
            >

                {data.description}

            </p>

            <div
                className="
                    mt-10
                    grid
                    gap-8
                    lg:grid-cols-2
                "
            >

                <div>

                    <h3
                        className="
                            mb-4
                            text-xl
                            font-bold
                            text-white
                        "
                    >

                        Advantages

                    </h3>

                    <ul
                        className="
                            space-y-3
                        "
                    >

                        {

                            data.advantages.map(

                                item => (

                                    <li
                                        key={item}
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                            text-slate-300
                                        "
                                    >

                                        <span
                                            className="
                                                text-[#F97316]
                                            "
                                        >

                                            ✓

                                        </span>

                                        <span>

                                            {item}

                                        </span>

                                    </li>

                                )

                            )

                        }

                    </ul>

                </div>

                <div>

                    <h3
                        className="
                            mb-4
                            text-xl
                            font-bold
                            text-white
                        "
                    >

                        Best For

                    </h3>

                    <ul
                        className="
                            space-y-3
                        "
                    >

                        {

                            data.suitableFor.map(

                                item => (

                                    <li
                                        key={item}
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                            text-slate-300
                                        "
                                    >

                                        <span
                                            className="
                                                text-[#F97316]
                                            "
                                        >

                                            ✓

                                        </span>

                                        <span>

                                            {item}

                                        </span>

                                    </li>

                                )

                            )

                        }

                    </ul>

                </div>

            </div>

        </div>

    );

}