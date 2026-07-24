"use client";

import { useRef, useState } from "react";

export default function MediaEditor() {

    const galleryInput =
        useRef<HTMLInputElement>(null);

    const videoInput =
        useRef<HTMLInputElement>(null);

    const brochureInput =
        useRef<HTMLInputElement>(null);

    const planInput =
        useRef<HTMLInputElement>(null);

    const coverInput =
        useRef<HTMLInputElement>(null);

    const [gallery, setGallery] =
        useState<File[]>([]);

    const [video, setVideo] =
        useState<File | null>(null);

    const [cover, setCover] =
        useState<File | null>(null);

    const [brochure, setBrochure] =
        useState<File | null>(null);

    const [plans, setPlans] =
        useState<File[]>([]);

    return (

        <div
            className="
                space-y-8
            "
        >

            <UploadCard

                title="Cover Image"

                button="Upload Cover"

                onClick={()=>

                    coverInput.current?.click()

                }

            >

                <input

                    ref={coverInput}

                    hidden

                    type="file"

                    accept="image/*"

                    onChange={e=>

                        setCover(

                            e.target.files?.[0] ??

                            null

                        )

                    }

                />

                {

                    cover &&

                    <p className="mt-3 text-green-400">

                        {cover.name}

                    </p>

                }

            </UploadCard>

            <UploadCard

                title="Gallery"

                button="Upload Images"

                onClick={()=>

                    galleryInput.current?.click()

                }

            >

                <input

                    hidden

                    multiple

                    ref={galleryInput}

                    type="file"

                    accept="image/*"

                    onChange={e=>

                        setGallery(

                            Array.from(

                                e.target.files ??

                                []

                            )

                        )

                    }

                />

                <div className="mt-4 space-y-2">

                    {

                        gallery.map(

                            file=>

                                <div

                                    key={file.name}

                                >

                                    {file.name}

                                </div>

                        )

                    }

                </div>

            </UploadCard>

            <UploadCard

                title="Video"

                button="Upload Video"

                onClick={()=>

                    videoInput.current?.click()

                }

            >

                <input

                    hidden

                    ref={videoInput}

                    type="file"

                    accept="video/*"

                    onChange={e=>

                        setVideo(

                            e.target.files?.[0]

                            ??

                            null

                        )

                    }

                />

                {

                    video &&

                    <p className="mt-3 text-green-400">

                        {video.name}

                    </p>

                }

            </UploadCard>

            <UploadCard

                title="Brochure"

                button="Upload PDF"

                onClick={()=>

                    brochureInput.current?.click()

                }

            >

                <input

                    hidden

                    ref={brochureInput}

                    type="file"

                    accept=".pdf"

                    onChange={e=>

                        setBrochure(

                            e.target.files?.[0]

                            ??

                            null

                        )

                    }

                />

                {

                    brochure &&

                    <p className="mt-3 text-green-400">

                        {brochure.name}

                    </p>

                }

            </UploadCard>

            <UploadCard

                title="Floor Plans"

                button="Upload Plans"

                onClick={()=>

                    planInput.current?.click()

                }

            >

                <input

                    hidden

                    multiple

                    ref={planInput}

                    type="file"

                    accept=".pdf,image/*"

                    onChange={e=>

                        setPlans(

                            Array.from(

                                e.target.files ??

                                []

                            )

                        )

                    }

                />

                <div className="mt-4 space-y-2">

                    {

                        plans.map(

                            file=>

                                <div

                                    key={file.name}

                                >

                                    {file.name}

                                </div>

                        )

                    }

                </div>

            </UploadCard>

        </div>

    );

}

interface UploadCardProps {

    title: string;

    button: string;

    onClick(): void;

    children: React.ReactNode;

}

function UploadCard({

    title,

    button,

    onClick,

    children,

}: UploadCardProps) {

    return (

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

                    {title}

                </h2>

                <button

                    onClick={onClick}

                    className="
                        rounded-xl
                        bg-[#F97316]
                        px-6
                        py-3
                        font-bold
                        text-black
                    "

                >

                    {button}

                </button>

            </div>

            {children}

        </div>

    );

}