"use client";


import {
    useState,
} from "react";


import {
    usePropertyStore,
} from "./store";


import UploadDialog from "./upload/UploadDialog";


import type {
    UploadTask,
} from "./upload/contracts";



export default function GalleryManager() {


    const {

        galleries,

        addGallery,

        removeGallery,

        addMedia,

        addMediaToGallery,

	media,

    } = usePropertyStore();



    const [
        uploadOpen,
        setUploadOpen,
    ] =
        useState(false);



    const [
        activeGalleryId,
        setActiveGalleryId,
    ] =
        useState<string | null>(
            null
        );



    async function uploadImage(
        task: UploadTask
    ) {


        const formData =
            new FormData();



        formData.append(

            "file",

            task.file.file

        );



        const response =
            await fetch(

                "/api/cloudinary/upload",

                {

                    method:
                        "POST",


                    body:
                        formData,

                }

            );



        const result =
            await response.json();



        if (
            !result.success
        ) {

            throw new Error(

                result.message ??
                "Image upload failed."

            );

        }



        return result.asset;

    }




    return (

        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">


            <div className="mb-6 flex items-center justify-between">


                <h2 className="text-2xl font-bold text-orange-500">

                    Galleries

                </h2>



		<button
 		   onClick={() => addGallery()}
  		   className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"
		>
 		   + Gallery
		</button>


            </div>




            {
                galleries.length === 0 && (

                    <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-500">

                        No galleries yet.

                    </div>

                )
            }




            <div className="space-y-6">



                {
                    galleries.map(

                        gallery => (

                            <div

                                key={
                                    gallery.id
                                }

                                className="rounded-xl border border-slate-700 p-5"

                            >


                                <div className="mb-4 flex items-center justify-between">


                                    <h3 className="text-lg font-semibold text-white">

                                        {
                                            gallery.title
                                        }

                                    </h3>



                                    <button

                                        onClick={
                                            () =>
                                                removeGallery(
                                                    gallery.id
                                                )
                                        }

                                        className="rounded-lg bg-red-600 px-4 py-2 text-white"

                                    >

                                        Delete

                                    </button>


                                </div>



	<div className="rounded-xl border border-dashed border-slate-700 p-4">

   	 {
    	    gallery.mediaIds.length === 0 ? (

            <div className="text-center text-slate-400">
                No images selected
            </div>

        ) : (

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                {
                    gallery.mediaIds.map(
                        mediaId => {

                            const item =
                                galleries
                                    .flatMap(
                                        () => media
                                    )
                                    .find(
                                        media =>
                                            media.id === mediaId
                                    );


                            if (!item) {
                                return null;
                            }


                            return (

                                <div
                                    key={item.id}
                                    className="
                                        overflow-hidden
                                        rounded-xl
                                        border
                                        border-slate-700
                                    "
                                >

                                    <img

                                        src={
                                            item.url
                                        }

                                        alt={
                                            item.name
                                        }

                                        className="
                                            h-40
                                            w-full
                                            object-cover
                                        "

                                    />

                                </div>

                            );


                        }
                    )
                }

            </div>

        )
    }

</div>




                                <div className="mt-4 flex gap-3">


                                    <button

                                        onClick={() => {


                                            setActiveGalleryId(
                                                gallery.id
                                            );


                                            setUploadOpen(
                                                true
                                            );


                                        }}

                                        className="rounded-lg bg-sky-600 px-4 py-2 text-white"

                                    >

                                        Select Images

                                    </button>




                                    <button

                                        className="rounded-lg bg-slate-700 px-4 py-2 text-white"

                                    >

                                        Preview

                                    </button>


                                </div>





                                <div className="mt-4 text-sm text-slate-400">

                                    {
                                        gallery.mediaIds.length
                                    }{" "}

                                    media selected

                                </div>



                            </div>

                        )

                    )
                }



            </div>





            <UploadDialog


                open={
                    uploadOpen
                }


                uploadType="image"



                onClose={() => {


                    setUploadOpen(
                        false
                    );


                    setActiveGalleryId(
                        null
                    );


                }}



                onPrepared={
                    async (

                        tasks: UploadTask[]

                    ) => {



                        if (
                            !activeGalleryId
                        ) {

                            return;

                        }




                        for (
                            const task of tasks
                        ) {



                            const asset =
                                await uploadImage(
                                    task
                                );



                            const mediaId =
                                crypto.randomUUID();



                            addMedia({


                                id:
                                    mediaId,


                                type:
                                    "image",


                                name:
                                    asset.name,


                                url:
                                    asset.url,


                            });




                            addMediaToGallery(

                                activeGalleryId,

                                mediaId

                            );


                        }


                    }

                }


            />


        </section>

    );

}
