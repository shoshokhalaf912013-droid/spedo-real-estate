"use client";

interface Props {

    onUpload(): void;

}

export default function MediaToolbar({

    onUpload,

}: Props) {

    return (

        <div
            className="
                mb-8
                flex
                items-center
                justify-between
            "
        >

            <div>

                <h1
                    className="
                        text-3xl
                        font-bold
                        text-white
                    "
                >

                    Media Library

                </h1>

                <p
                    className="
                        mt-2
                        text-slate-400
                    "
                >

                    Images • Videos • PDF

                </p>

            </div>

            <button

                onClick={onUpload}

                className="
                    rounded-xl
                    bg-orange-500
                    px-6
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:bg-orange-600
                "

            >

                Upload Files

            </button>

        </div>

    );

}