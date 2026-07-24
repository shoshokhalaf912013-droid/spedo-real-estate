import { notFound } from "next/navigation";

import { listings }
from "@/data/listings";

import Image
from "next/image";

interface PageProps {

    params: {

        slug: string;

    };

}

export default function ListingDetailsPage({
    params,
}: PageProps) {

    const listing = listings.find(
        (item) =>
            item.slug === params.slug
    );

    if (!listing) {

        notFound();

    }

    return (

        <main
            className="
                min-h-screen
                bg-[#030712]
                pt-32
                text-white
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                {/* HERO VIDEO */}

                {listing.media?.videos?.length ? (

                    <video
                        controls
                        className="
                            h-[600px]
                            w-full
                            rounded-[40px]
                            object-cover
                        "
                    >

                        <source
                            src={
                                listing
                                    .media
                                    .videos[0]
                            }
                            type="video/mp4"
                        />

                    </video>

                ) : (

                    <Image
                        src={
                            listing
                                .media
                                .cover
                        }
                        alt={
                            listing
                                .title
                        }
                        width={1600}
                        height={900}
                        className="
                            h-[600px]
                            w-full
                            rounded-[40px]
                            object-cover
                        "
                    />

                )}

                {/* TITLE */}

                <section
                    className="
                        py-16
                    "
                >

                    <h1
                        className="
                            text-6xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        {listing.title}
                    </h1>

                    <p
                        className="
                            mt-6
                            text-xl
                            text-slate-300
                        "
                    >
                        {listing.description}
                    </p>

                </section>

                {/* GALLERY */}

                {!!listing
                    .media
                    ?.gallery
                    ?.length && (

                    <section
                        className="
                            mb-20
                        "
                    >

                        <h2
                            className="
                                mb-8
                                text-4xl
                                font-black
                            "
                        >
                            Gallery
                        </h2>

                        <div
                            className="
                                grid
                                gap-6
                                md:grid-cols-2
                                xl:grid-cols-4
                            "
                        >

                            {listing
                                .media
                                .gallery
                                .map(
                                    (
                                        image
                                    ) => (

                                        <Image
                                            key={
                                                image
                                            }
                                            src={
                                                image
                                            }
                                            alt=""
                                            width={
                                                600
                                            }
                                            height={
                                                400
                                            }
                                            className="
                                                h-[250px]
                                                w-full
                                                rounded-[30px]
                                                object-cover
                                            "
                                        />

                                    )
                                )}

                        </div>

                    </section>

                )}

                {/* DETAILS */}

                <section
                    className="
                        mb-20
                        rounded-[40px]
                        bg-[#08101E]
                        p-10
                    "
                >

                    <h2
                        className="
                            mb-8
                            text-4xl
                            font-black
                        "
                    >
                        Property Details
                    </h2>

                    <div
                        className="
                            grid
                            gap-8
                            md:grid-cols-3
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-slate-400
                                "
                            >
                                Type
                            </p>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                {
                                    listing
                                        .propertyType
                                }
                            </h3>

                        </div>

                        <div>

                            <p
                                className="
                                    text-slate-400
                                "
                            >
                                Area
                            </p>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                {
                                    listing
                                        .area
                                }
                                m²
                            </h3>

                        </div>

                        <div>

                            <p
                                className="
                                    text-slate-400
                                "
                            >
                                Price
                            </p>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#F97316]
                                "
                            >
                                {listing.price.toLocaleString()}
                                {" "}
                                {
                                    listing.currency
                                }
                            </h3>

                        </div>

                    </div>

                </section>

                {/* WHATSAPP */}

                <section
                    className="
                        pb-24
                    "
                >

                    <a
                        href="
                        https://wa.me/201155807098
                        "
                        target="_blank"
                        className="
                            inline-flex
                            rounded-full
                            bg-[#F97316]
                            px-12
                            py-5
                            text-xl
                            font-black
                            text-white
                        "
                    >
                        Contact On WhatsApp
                    </a>

                </section>

            </div>

        </main>

    );

}