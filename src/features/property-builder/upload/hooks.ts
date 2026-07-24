"use client";


import {
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";


import type {
    UploadTask,
    UploadResult,
} from "./contracts";


import {
    UploadQueue,
} from "./UploadQueue";


import {
    UploadEngine,
} from "./UploadEngine";



/* =========================================================
   Types
   ========================================================= */


export interface UseUploadOptions {


    engine:
        UploadEngine;



    concurrency?:
        number;


}



export interface UploadController {


    tasks:
        UploadTask[];



    addTask(
        task:UploadTask
    ):void;



    addTasks(
        tasks:UploadTask[]
    ):void;



    upload(
        task:UploadTask
    ):Promise<UploadResult>;



    startQueue():
        Promise<void>;



    pause(
        task:UploadTask
    ):Promise<void>;



    resume(
        task:UploadTask
    ):Promise<void>;



    cancel(
        task:UploadTask
    ):Promise<void>;


}



/* =========================================================
   Hook
   ========================================================= */


export function useUpload(

    options:
        UseUploadOptions

):UploadController {



    const [

        tasks,

        setTasks

    ] =

    useState<UploadTask[]>([]);





    const queue =

        useRef<UploadQueue | null>(

            null

        );





    const getQueue =

        useCallback(

            ()=>{



                if(
                    !queue.current
                ){



                    queue.current =

                        new UploadQueue(

                            options.engine,


                            {

                                concurrency:

                                    options.concurrency ?? 2,


                            }


                        );


                }



                return queue.current;



            },


            [

                options.engine,

                options.concurrency,

            ]


        );







    /* =====================================================
       Add Task
       ===================================================== */


    const addTask =

        useCallback(

            (

                task:UploadTask

            )=>{



                task.status =
                    "queued";



                getQueue()
                    .add(

                        task

                    );



                setTasks(

                    previous => [

                        ...previous,

                        task,

                    ]

                );



            },


            [

                getQueue

            ]


        );








    /* =====================================================
       Add Tasks
       ===================================================== */


    const addTasks =

        useCallback(

            (

                newTasks:UploadTask[]

            )=>{



                newTasks.forEach(

                    task => {

                        task.status =
                            "queued";

                    }

                );



                getQueue()
                    .addMany(

                        newTasks

                    );



                setTasks(

                    previous => [

                        ...previous,

                        ...newTasks,

                    ]

                );



            },


            [

                getQueue

            ]


        );








    /* =====================================================
       Upload Single
       ===================================================== */


    const upload =

        useCallback(

            async(

                task:UploadTask

            ):Promise<UploadResult>=>{



                task.status =
                    "uploading";



                setTasks(

                    previous =>

                        previous.map(

                            item =>

                                item.id === task.id

                                ? task

                                : item

                        )

                );



                const result =

                    await options.engine.start(

                        task

                    );




                if(
                    result.success
                ){


                    task.status =
                        "completed";


                }

                else {


                    task.status =
                        "failed";


                }




                setTasks(

                    previous =>

                        previous.map(

                            item =>

                                item.id === task.id

                                ? task

                                : item

                        )

                );



                return result;



            },


            [

                options.engine

            ]


        );







    /* =====================================================
       Queue
       ===================================================== */


    const startQueue =

        useCallback(

            async()=>{


                await getQueue()
                    .start();


            },


            [

                getQueue

            ]


        );








    /* =====================================================
       Controls
       ===================================================== */


    const pause =

        useCallback(

            async(

                task:UploadTask

            )=>{


                await options.engine.pause(

                    task

                );


            },


            [

                options.engine

            ]


        );





    const resume =

        useCallback(

            async(

                task:UploadTask

            )=>{


                await options.engine.resume(

                    task

                );


            },


            [

                options.engine

            ]


        );






    const cancel =

        useCallback(

            async(

                task:UploadTask

            )=>{


                await options.engine.cancel(

                    task

                );


            },


            [

                options.engine

            ]


        );








    return useMemo(

        ()=>({


            tasks,


            addTask,


            addTasks,


            upload,


            startQueue,


            pause,


            resume,


            cancel,


        }),


        [

            tasks,

            addTask,

            addTasks,

            upload,

            startQueue,

            pause,

            resume,

            cancel,

        ]

    );

}