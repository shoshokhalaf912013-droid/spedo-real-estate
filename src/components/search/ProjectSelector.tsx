"use client";

import type { ProjectOption }
from "@/core/search/ProjectOption";

type Props = {

    value: string;

    options: ProjectOption[];

    onChange: (
        value: string
    ) => void;

};

export function ProjectSelector({
    value,
    options,
    onChange
}: Props) {

    return (

        <div className="space-y-2">

            <label
                className="
                    text-sm
                    font-medium
                    text-slate-300
                "
            >

                Project

            </label>

            <select
                value={value}
                onChange={(event) =>
                    onChange(
                        event.target.value
                    )
                }
                className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    text-white
                    outline-none
                    transition
                    focus:border-amber-500
                "
            >

                {options.map(
                    (option) => (

                        <option
                            key={option.value}
                            value={option.value}
                        >

                            {option.label}

                        </option>

                    )
                )}

            </select>

        </div>

    );

}