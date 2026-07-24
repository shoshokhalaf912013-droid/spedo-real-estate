import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {

    slug: string;

    name: string;

    description: string;

    image: string;

    badge: string;

    tags: string[];

    cta?: string;

}

export default function ProjectCard({

    slug,

    name,

    description,

    image,

    badge,

    tags,

    cta = "Explore Project →"

}: ProjectCardProps) {

    return (

        <Link

            href={`/projects/${slug}`}

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

            <div className="relative h-[700px]">

                <Image

                    src={image}

                    alt={name}

                    fill

                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "

                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

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

                            {badge}

                        </span>

                        <h2 className="mt-8 font-playfair text-6xl md:text-8xl">

                            {name}

                        </h2>

                        <p className="mt-8 text-xl leading-8 text-slate-300">

                            {description}

                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            {

                                tags.map(

                                    tag => (

                                        <div

                                            key={tag}

                                            className="
                                                rounded-2xl
                                                border
                                                border-white/20
                                                bg-black/20
                                                px-6
                                                py-4
                                            "

                                        >

                                            {tag}

                                        </div>

                                    )

                                )

                            }

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

                                {cta}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </Link>

    );

}