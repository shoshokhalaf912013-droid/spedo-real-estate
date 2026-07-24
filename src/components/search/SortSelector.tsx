"use client";

export type SortOption =
    | "default"
    | "price-asc"
    | "price-desc"
    | "area-asc"
    | "area-desc"
    | "bedrooms"
    | "unit-number";

interface SortSelectorProps {

    value: SortOption;

    onChange: (
        value: SortOption
    ) => void;

}

export function SortSelector({
    value,
    onChange
}: SortSelectorProps) {

    return (

        <div className="flex flex-col gap-2">

            <label
                htmlFor="sort"
                className="text-sm font-medium text-slate-300"
            >

                Sort By

            </label>

            <select
                id="sort"
                value={value}
                onChange={(event) =>
                    onChange(
                        event.target.value as SortOption
                    )
                }
                className="
                    h-12
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

                <option value="default">
                    Default
                </option>

                <option value="price-asc">
                    Price: Low → High
                </option>

                <option value="price-desc">
                    Price: High → Low
                </option>

                <option value="area-asc">
                    Area: Small → Large
                </option>

                <option value="area-desc">
                    Area: Large → Small
                </option>

                <option value="bedrooms">
                    Bedrooms
                </option>

                <option value="unit-number">
                    Unit Number
                </option>

            </select>

        </div>

    );

}