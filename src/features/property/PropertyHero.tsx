import type { Project } from "@/core/project";
import type { PropertyUnit } from "@/types/property-v2";

type Props = {
    project: Project;
    unit: PropertyUnit;
};

export function PropertyHero({
    project,
    unit
}: Props) {

    return (

        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

            <div className="relative h-[340px]">

                <img
                    src="/projects/blue-crest/hero.jpg"
                    alt={project.metadata.name}
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8">

                    <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300">

                        {project.metadata.name}

                    </span>

                    <h1 className="mt-4 text-4xl font-bold">

                        Unit {unit.unitNo}

                    </h1>

                    <div className="mt-4 flex flex-wrap gap-3">

                        <Badge>
                            {unit.type}
                        </Badge>

                        <Badge>
                            {unit.area} m²
                        </Badge>

                        <Badge>
                            Building {unit.building}
                        </Badge>

                        <Badge>
                            {unit.view}
                        </Badge>

                    </div>

                </div>

            </div>

        </section>

    );

}

function Badge({
    children
}: {
    children: React.ReactNode;
}) {

    return (

        <div className="rounded-xl bg-slate-900/80 px-4 py-2">

            {children}

        </div>

    );

}