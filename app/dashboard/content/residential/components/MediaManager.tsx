"use client";

import { useRef, useState } from "react";

interface MediaState {

    cover: string | null;

    video: string | null;

    gallery: string[];

}

export default function MediaManager() {

    const [

        media,

        setMedia,

    ] = useState<MediaState>({

        cover: null,

        video: null,

        gallery: [],

    });

    const coverInput =
        useRef<HTMLInputElement>(null);

    const galleryInput =
        useRef<HTMLInputElement>(null);

    const videoInput =
        useRef<HTMLInputElement>(null);

    function uploadCover(

        e: React.ChangeEvent<HTMLInputElement>

    ) {

        const file =
            e.target.files?.[0];

        if (!file) return;

        setMedia({

            ...media,

            cover:

                URL.createObjectURL(file),

        });

    }

    function uploadGallery(

        e: React.ChangeEvent<HTMLInputElement>

    ) {

        const files =

            Array.from(

                e.target.files ?? []

            );

        setMedia({

            ...media,

            gallery: [

                ...media.gallery,

                ...files.map(

                    file =>

                        URL.createObjectURL(file)

                )

            ]

        });

    }

    function uploadVideo(

        e: React.ChangeEvent<HTMLInputElement>

    ) {

        const file =
            e.target.files?.[0];

        if (!file) return;

        setMedia({

            ...media,

            video:

                URL.createObjectURL(file),

        });

    }

    function removeImage(

        index: number

    ) {

        setMedia({

            ...media,

            gallery:

                media.gallery.filter(

                    (_,

                        i) =>

                        i !== index

                )

        });

    }

    return (

        <div
            className="
                space-y-10
            "
        >

            <div
                className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#08101E]
                    p-8
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-white
                        "
                    >

                        Cover Image

                    </h2>

                    <button

                        onClick={()=>

                            coverInput.current?.click()

                        }

                        className="
                            rounded-xl
                            bg-[#F97316]
                            px-6
                            py-3
                            font-bold
                            text-black
                        "

                    >

                        Upload

                    </button>

                </div>

                <input

                    hidden

                    ref={coverInput}

                    type="file"

                    accept="image/*"

                    onChange={uploadCover}

                />

                {

                    media.cover &&

                    <img

                        src={media.cover}

                        alt="cover"

                        className="
                            mt-8
                            h-64
                            w-full
                            rounded-2xl
                            object-cover
                        "

                    />

                }

            </div>

            <div
                className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#08101E]
                    p-8
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-white
                        "
                    >

                        Gallery

                    </h2>

                    <button

                        onClick={()=>

                            galleryInput.current?.click()

                        }

                        className="
                            rounded-xl
                            bg-[#F97316]
                            px-6
                            py-3
                            font-bold
                            text-black
                        "

                    >

                        Add Images

                    </button>

                </div>

                <input

                    hidden

                    multiple

                    ref={galleryInput}

                    type="file"

                    accept="image/*"

                    onChange={uploadGallery}

                />

                <div
                    className="
                        mt-8
                        grid
                        gap-5
                        md:grid-cols-3
                    "
                >

                    {

                        media.gallery.map(

                            (

                                image,

                                index

                            ) => (

                                <div

                                    key={index}

                                    className="
                                        relative
                                    "

                                >

                                    <img

                                        src={image}

                                        alt="gallery"

                                        className="
                                            h-56
                                            w-full
                                            rounded-2xl
                                            object-cover
                                        "

                                    />

                                    <button

                                        onClick={()=>

                                            removeImage(index)

                                        }

                                        className="
                                            absolute
                                            right-3
                                            top-3
                                            rounded-lg
                                            bg-red-600
                                            px-3
                                            py-2
                                            text-xs
                                            font-bold
                                            text-white
                                        "

                                    >

                                        Delete

                                    </button>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

            <div
                className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#08101E]
                    p-8
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-white
                        "
                    >

                        Video

                    </h2>

                    <button

                        onClick={()=>

                            videoInput.current?.click()

                        }

                        className="
                            rounded-xl
                            bg-[#F97316]
                            px-6
                            py-3
                            font-bold
                            text-black
                        "

                    >

                        Upload Video

                    </button>

                </div>

                <input

                    hidden

                    ref={videoInput}

                    type="file"

                    accept="video/*"

                    onChange={uploadVideo}

                />

                {

                    media.video &&

                    <video

                        controls

                        className="
                            mt-8
                            w-full
                            rounded-2xl
                        "

                        src={media.video}

                    />

                }

            </div>

        </div>

    );

}