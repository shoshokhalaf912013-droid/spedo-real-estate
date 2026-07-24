"use client";

import { MediaLibrary } from "@/features/media-library";

export default function MediaPage() {

    return (

        <main
            className="
                min-h-screen
                bg-[#020817]
                px-10
                pb-10
                pt-32
            "
        >

            <MediaLibrary />

        </main>

    );

}