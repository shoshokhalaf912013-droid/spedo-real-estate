import Image from "next/image";
import Link from "next/link";

import type { ProjectCardModel } from "@/application/project/ProjectCardModel";

interface Props {
    project: ProjectCardModel;
}

export default function ProjectCard({
    project,
}: Props) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="
                group
                relative
                block
                overflow-hidden
                rounded-[40px]
                border
                border-[#F97316]/20
                bg-[#09111C]
                shadow-2xl
                transition-all
                duration-500
                hover:border-[#F97316]
            "
        >
            <div className="relative h-[700px] overflow-hidden">

                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="
   		    object-cover
                    brightness-125 contrast-105
                    transition-transform
                    duration-700
                    group-hover:scale-105
                 "
                />


                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-3xl px-12 md:px-20">

                        <span
                            className="
                                rounded-full
                                border
                                border-[#F97316]/40
                                bg-black/20
                                px-5
                                py-2
                                text-sm
                                uppercase
                                tracking-[3px]
                                text-[#F97316]
                            "
                        >
                            {project.badge}
                        </span>

                        <h2
 			     className="
  			      mt-8
  			      font-playfair
     			      text-6xl
                              md:text-8xl
                              text-[#F97316]
                              drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
                             "
                        >
                            {project.name}
                        </h2>

                        <p
 			   className="
   			     mt-8
   			     text-xl
    			     leading-8
      			     text-white
      			     drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
   			 "
			>
                            {project.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            {project.tags.map(tag => (
                                <div
                                    key={tag}
                                    className="
                                        rounded-2xl
                                        border
                                        border-white/20
                                        bg-black/40
					backdrop-blur-sm
                                        px-6
                                        py-4
                                    "
                                >
                                    {tag}
                                </div>
                            ))}

                        </div>

                        <div className="mt-10">

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    rounded-2xl
                                    bg-white
                                    px-8
                                    py-4
                                    font-bold
                                    text-black
                                    transition
                                    group-hover:bg-[#F97316]
                                    group-hover:text-white
                                "
                            >
                                {project.cta}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </Link>
    );
}