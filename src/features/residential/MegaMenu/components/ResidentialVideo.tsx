"use client";

interface Props {

    video: string;

}

export default function ResidentialVideo({

    video,

}: Props) {

    if (!video) {

        return (

            <div
                className="
                    flex
                    aspect-video
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#08101E]
                    text-slate-400
                "
            >

                Video is not available.

            </div>

        );

    }

    return (

        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black
            "
        >

            <video

                className="
                    aspect-video
                    w-full
                "

                controls

                muted

                loop

                playsInline

                preload="metadata"

            >

                <source

                    src={video}

                    type="video/mp4"

                />

                Your browser does not support the video tag.

            </video>

        </div>

    );

}