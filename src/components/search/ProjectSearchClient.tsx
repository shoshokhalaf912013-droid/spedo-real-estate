"use client";

import Link from "next/link";
import {
    useEffect,
    useMemo,
    useState
}
from "react";

import type { PropertyUnit } from "@/types/property";
import { PriceDisplay }
from "@/core/display/PriceDisplay";

import PropertyAdminPanel
from "@/components/property/PropertyAdminPanel";

import {
    PropertyStatusEngine
} from "@/core/property/PropertyStatusEngine";

import {
    LocalPropertyRepository
} from "@/core/property/LocalPropertyRepository";

interface Props {
  units: PropertyUnit[];
}

export default function ProjectSearchClient({
    units
}: Props) {

    const [

        localUnits,

        setLocalUnits

    ] = useState(units);

    useEffect(

        () => {

            setLocalUnits(
                units
            );

        },

        [units]

    );

  const [query, setQuery] =
    useState("");

  const [selectedProject, setSelectedProject] =
    useState("");

  const [selectedType, setSelectedType] =
    useState("");

  const [selectedBudget, setSelectedBudget] =
    useState("");

  const [selectedBuilding, setSelectedBuilding] =
    useState("");

  const [selectedFloor, setSelectedFloor] =
    useState("");

  const [selectedView, setSelectedView] =
    useState("");

  const [selectedFinishing, setSelectedFinishing] =
    useState("");

  const [hasSearched, setHasSearched] =
    useState(false);
  const statusEngine =

    new PropertyStatusEngine(

       new LocalPropertyRepository(
           localUnits
       )

    );
  const isAdmin = true;

const projects =
    Array.from(
        new Set(
            localUnits.map(
                (unit: any) =>
                    unit.project
            )
        )
    )
    .filter(Boolean)
    .sort();

const propertyTypes =
    Array.from(
      new Set(
        localUnits.map(
          (unit: any) => unit.type
        )
      )
    ).sort();

   const buildings =
    Array.from(
      new Set(
        localUnits.map(
          (unit: any) => unit.building
        )
      )
    ).sort();

   const floors =
    Array.from(
      new Set(
        localUnits.map(
          (unit: any) =>
            unit.floorNumber
        )
      )
    )

      .filter(Boolean)
      .sort(
        (a: any, b: any) => a - b
      );

   const views =
    Array.from(
      new Set(
        localUnits.map(
          (unit: any) =>
            unit.view
        )
      )
    )

      .filter(Boolean)
      .sort();

    const finishings =
    Array.from(
      new Set(
        localUnits.map(
          (unit: any) =>
            unit.finishing
        )
      )
    )
      .filter(Boolean)
      .sort();
        const visibleUnits =

    isAdmin

        ? localUnits

        : localUnits.filter(

            unit => {

                const status =

                    String(
                        unit.status ??
                        "Available"
                    ).toLowerCase();

                return (

                    status !== "sold"

                    &&

                    status !== "reserved"

                );

            }

        );

  const filteredUnits =
    useMemo(() => {

        if (!hasSearched) {
            return [];
        }

        return visibleUnits.filter(
            (unit: any) => {

                const searchText = [

                    unit.unitNo,

                    unit.type,

                    unit.view,

                    unit.building,

                    String(unit.area),

                    String(unit.bedrooms),

                    String(unit.price)

                ]
                    .join(" ")
                    .toLowerCase();

                const matchesQuery =

                    !query ||

                    searchText.includes(
                        query.toLowerCase()
                    );

                const matchesProject =

                    !selectedProject ||

                    unit.project ===
                    selectedProject;

                const matchesType =

                    !selectedType ||

                    unit.type ===
                    selectedType;

                const matchesBuilding =

                    !selectedBuilding ||

                    unit.building ===
                    selectedBuilding;

                const matchesFloor =

                    !selectedFloor ||

                    String(
                        unit.floorNumber
                    ) === selectedFloor;

                const matchesView =

                    !selectedView ||

                    unit.view ===
                    selectedView;

                const matchesFinishing =

                    !selectedFinishing ||

                    unit.finishing ===
                    selectedFinishing;

                let matchesBudget = true;

                if (
                    selectedBudget ===
                    "under-2"
                ) {

                    matchesBudget =
                        unit.price < 2000000;

                }

                if (
                    selectedBudget ===
                    "2-2.5"
                ) {
	 
	       matchesBudget =

    unit.price >= 2000000 &&

    unit.price < 2500000;

}

if (
    selectedBudget ===
    "2.5-3"
) {

    matchesBudget =

        unit.price >= 2500000 &&

        unit.price < 3000000;

}

if (
    selectedBudget ===
    "3-3.5"
) {

    matchesBudget =

        unit.price >= 3000000 &&

        unit.price < 3500000;

}

if (
    selectedBudget ===
    "3.5-4"
) {

    matchesBudget =

        unit.price >= 3500000 &&

        unit.price < 4000000;

}

if (
    selectedBudget ===
    "4+"
) {

    matchesBudget =
        unit.price >= 4000000;

}

return (

    matchesQuery &&

    matchesProject &&

    matchesType &&

    matchesBuilding &&

    matchesFloor &&

    matchesView &&

    matchesFinishing &&

    matchesBudget

);

}

);

}, [

    units,

    query,

    selectedProject,

    selectedType,

    selectedBudget,

    selectedBuilding,

    selectedFloor,

    selectedView,

    selectedFinishing,

    hasSearched

]);

return (

<section className="bg-[#05070D] py-20">

    <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

            <span
                className="
                    rounded-full
                    border
                    border-[#D4AF37]/30
                    bg-[#D4AF37]/10
                    px-5
                    py-2
                    text-sm
                    uppercase
                    tracking-[4px]
                    text-[#D4AF37]
                "
            >
                Smart Property Search
            </span>

            <h2
                className="
                    mt-8
                    text-5xl
                    font-bold
                    text-white
                "
            >
                Find Your Dream Property
            </h2>

            <p
                className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-slate-400
                "
            >
                Search by type, budget,
                building, floor and view.
            </p>

        </div>

        <div
            className="
                rounded-3xl
                border
                border-[#D4AF37]/15
                bg-[#101826]
                p-8
            "
        >

            <input
                type="text"
                placeholder="Search by unit, view, area or price..."
                value={query}
                onChange={(e) =>
                    setQuery(
                        e.target.value
                    )
                }
                className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0B1220]
                    px-6
                    py-5
                    text-white
                    outline-none
                    focus:border-[#D4AF37]
                "
            />

            <div
                className="
                    mt-6
                    grid
                    gap-4
                    md:grid-cols-4
                "
            >

                <select
                    value={selectedProject}
                    onChange={(e) =>
                        setSelectedProject(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Projects
                    </option>

                    {projects.map(
                        (project: any) => (

                            <option
                                key={project}
                                value={project}
                            >
                                {project}
                            </option>

                        )
                    )}

                </select>

                <select
                    value={selectedType}
                    onChange={(e) =>
                        setSelectedType(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Property Types
                    </option>

                    {propertyTypes.map(
                        (type: any) => (

                            <option
                                key={type}
                                value={type}
                            >
                                {type}
                            </option>

                        )
                    )}

                </select>

                <select
                    value={selectedBudget}
                    onChange={(e) =>
                        setSelectedBudget(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Budgets
                    </option>

                    <option value="under-2">
                        Less Than 2M
                    </option>

                    <option value="2-2.5">
                        2M - 2.5M
                    </option>

                    <option value="2.5-3">
                        2.5M - 3M
                    </option>

                    <option value="3-3.5">
                        3M - 3.5M
                    </option>

                    <option value="3.5-4">
                        3.5M - 4M
                    </option>

                    <option value="4+">
                        4M+
                    </option>

                </select>

                <select
                    value={selectedBuilding}
                    onChange={(e) =>
                        setSelectedBuilding(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Buildings
                    </option>

                    {buildings.map(
                        (building: any) => (

                            <option
                                key={building}
                                value={building}
                            >
                                Building {building}
                            </option>

                        )
                    )}

                </select>

            </div>

            <div
                className="
                    mt-4
                    grid
                    gap-4
                    md:grid-cols-3
                "
            >

                <select
                    value={selectedFloor}
                    onChange={(e) =>
                        setSelectedFloor(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Floors
                    </option>

                    {floors.map(
                        (floor: any) => (

                            <option
                                key={floor}
                                value={floor}
                            >
                                Floor {floor}
                            </option>

                        )
                    )}

                </select>

                <select
                    value={selectedView}
                    onChange={(e) =>
                        setSelectedView(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Views
                    </option>

                    {views.map(
                        (view: any) => (

                            <option
                                key={view}
                                value={view}
                            >
                                {view}
                            </option>

                        )
                    )}

                </select>

                <select
                    value={selectedFinishing}
                    onChange={(e) =>
                        setSelectedFinishing(
                            e.target.value
                        )
                    }
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0B1220]
                        p-4
                        text-white
                    "
                >

                    <option value="">
                        All Finishings
                    </option>

                    {finishings.map(
                        (item: any) => (

                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>

                        )
                    )}

                </select>

            </div>

            <button
                onClick={() =>
                    setHasSearched(true)
                }
                className="
                    mt-6
                    rounded-2xl
                    bg-[#D4AF37]
                    px-8
                    py-4
                    font-bold
                    text-black
                    transition
                    hover:opacity-90
                "
            >
                SEARCH
            </button>

        </div>
	{hasSearched && (

    <div className="mt-12">

        <div
            className="
                mb-8
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-[#101826]
                p-8
            "
        >

            <h3
                className="
                    text-4xl
                    font-bold
                    text-white
                "
            >
                Search Results
            </h3>

            <div
                className="
                    mt-4
                    text-xl
                    text-[#D4AF37]
                "
            >
                {filteredUnits.length}
                {" "}
                Matching Units
            </div>

        </div>

        <div
            className="
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {

                filteredUnits.map(

                    (
                        unit: any,
                        index: number
                    ) => (

                        <div
                            key={`${unit.project}-${unit.building}-${unit.floorNumber}-${unit.unitNo}-${index}`}
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-[#101826]
                                p-8
                                transition
                                hover:border-[#D4AF37]
                            "
                        >
			    <div
        			  className="
      				  mb-6
      				  rounded-2xl
      				  bg-[#D4AF37]
     				  px-4
    				  py-3
     				  text-center
     				  text-lg
      				  font-bold
      				  uppercase
    			          tracking-wider
    			          text-black
                                  shadow-lg
                                "
                                    >

  		        {

  			      unit.compound

  			      ||

   			     unit.project

   			 }

			</div>

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <h4
                                    className="
                                        text-3xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    {unit.unitNo}
                                </h4>

                                <span
                                    className="
                                        rounded-full
                                        bg-[#D4AF37]/10
                                        px-4
                                        py-2
                                        text-sm
                                        text-[#D4AF37]
                                    "
                                >
                                    {unit.type}
                                </span>

                            </div>

                            <div
                                className="
                                    mt-6
                                    space-y-2
                                    text-slate-300
                                "
                            >

                                <div>
                                    Building:
                                    {" "}
                                    {unit.building}
                                </div>

                                <div>
                                    Floor:
                                    {" "}
                                    {unit.floorNumber}
                                </div>

                                <div>
                                    Area:
                                    {" "}
                                    {unit.area}
                                    {" "}
                                    m²
                                </div>

                                <div>
                                    Bedrooms:
                                    {" "}
                                    {unit.bedrooms}
                                </div>

                                <div>
                                    View:
                                    {" "}
                                    {unit.view}
                                </div>

                                <div>
                                    Finishing:
                                    {" "}
                                    {unit.finishing}
                                </div>

                            </div>

			    <div
  				  className="
  				  mt-8
      				  border-t
                                  border-white/10
                                  pt-6
                                  space-y-3
                                 "
                               >

                            <div
                                className="
                                text-3xl
                                font-bold
                                text-[#D4AF37]
                                "
                            >
                               {PriceDisplay.format(unit)}
                               </div>

                            </div>
			     {
				    isAdmin && (

					<PropertyAdminPanel

    propertyId={unit.id}

    project={
        unit.compound ||
        unit.project
    }

    unitNo={
        unit.unitNo
    }

    building={
        unit.building
    }

    floor={
        unit.floorNumber
    }

    area={
        unit.area
    }

    status={
        unit.status ||
        "Available"
    }

    engine={
        statusEngine
    }

    onRefresh={() => {

        setLocalUnits(

            current =>

                current.map(

                    item => {

                        if (

                            item.id !== unit.id

                        ) {

                            return item;

                        }

                        return {

                            ...item,

			  status:

  			    (window as any)
                                .__SPEDO_STATUS__

                            ||

                            item.status
                        };

                    }

                )

        );

    }}

/>   
                                 )
                             }
                            <div
                                className="
                                    mt-8
                                    border-t
                                    border-white/10
                                    pt-6
                                "
                            >

                                <Link
                                    href={`/property/${unit.slug}`}
                                    className="
                                        mt-6
                                        inline-flex
                                        rounded-2xl
                                        bg-[#D4AF37]
                                        px-6
                                        py-3
                                        font-semibold
                                        text-black
                                        transition
                                        hover:opacity-90
                                    "
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>

                    )

                )

            }

        </div>

    </div>

)}

      </div>

    </section>

  );

}