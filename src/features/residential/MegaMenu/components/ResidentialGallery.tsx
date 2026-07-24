"use client";

import Image from "next/image";

interface Props {

    images: string[];

}

export default function ResidentialGallery({

    images,

}: Props) {

    if (images.length === 0) {

        return (

            <div
                className="
                    mt-6
                    flex
                    h-64
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#08101E]
                    text-slate-400
                "
            >

                No gallery images available.

            </div>

        );

    }

    return (

        <div
            className="
                mt-6
                grid
                grid-cols-2
                gap-3
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
            "
        >

            {

                images.map(

                    (image, index) => (

                        <div

                            key={image}

                            className="
                                relative
                                aspect-square
                                overflow-hidden
                                rounded-xl
                            "

                        >

                            <Image

                                src={image}

                                alt={`Property gallery image ${index + 1}`}

                                fill

                                className="
                                    object-cover
                                    transition-transform
                                    duration-300
                                    hover:scale-105
                                "

                                sizes="
                                    (max-width:768px) 50vw,
                                    (max-width:1024px) 33vw,
                                    (max-width:1280px) 25vw,
                                    20vw
                                "

                            />

                        </div>

                    )

                )

            }

        </div>

    );

}