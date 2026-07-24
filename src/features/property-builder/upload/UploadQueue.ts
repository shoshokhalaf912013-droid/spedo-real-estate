import type {
    UploadTask,
    UploadResult,
} from "./contracts";


import {
    UploadEngine,
} from "./UploadEngine";



/* =========================================================
   Types
   ========================================================= */


export type QueueStatus =

    | "idle"
    | "running"
    | "paused"
    | "completed"
    | "stopped";




interface QueueItem {

    task:UploadTask;

    attempts:number;

}





export interface UploadQueueOptions {


    concurrency?:
        number;



    onTaskStarted?(
        task:UploadTask
    ):void;



    onTaskCompleted?(
        task:UploadTask,
        result:UploadResult
    ):void;



    onTaskFailed?(
        task:UploadTask,
        error:string
    ):void;



    onProgress?(
        task:UploadTask
    ):void;



    onQueueCompleted?():
        void;


}







/* =========================================================
   Queue
   ========================================================= */


export class UploadQueue {



    private engine:
        UploadEngine;



    private concurrency:
        number;



    private queue:
        QueueItem[];



    private running:
        Set<string>;



    private status:
        QueueStatus;



    private options:
        UploadQueueOptions;





    constructor(

        engine:UploadEngine,

        options:
            UploadQueueOptions = {}

    ){


        this.engine =
            engine;



        this.concurrency =
            options.concurrency ?? 2;



        this.options =
            options;



        this.queue =
            [];



        this.running =
            new Set();



        this.status =
            "idle";


    }






    /* =====================================================
       Add
       ===================================================== */


    add(

        task:UploadTask

    ){



        task.status =
            "queued";



        this.queue.push({

            task,

            attempts:0,

        });



    }






    addMany(

        tasks:UploadTask[]

    ){



        tasks.forEach(

            task =>

                this.add(
                    task
                )

        );


    }







    /* =====================================================
       Start
       ===================================================== */


    async start():

        Promise<void>

    {



        if(
            this.status === "running"
        ){

            return;

        }



        this.status =
            "running";



        await this.process();


    }








    private async process():

        Promise<void>

    {



        while(

            this.status === "running"

            &&

            (

                this.queue.length > 0

                ||

                this.running.size > 0

            )

        ){



            while(

                this.running.size <
                this.concurrency

                &&

                this.queue.length > 0

            ){



                const item =
                    this.queue.shift();



                if(item){

                    void this.execute(
                        item
                    );

                }


            }





            await new Promise(

                resolve =>

                    setTimeout(

                        resolve,

                        100

                    )

            );


        }





        if(

            this.status === "running"

        ){


            this.status =
                "completed";



            this.options
                .onQueueCompleted
                ?.();


        }


    }







    /* =====================================================
       Execute
       ===================================================== */


    private async execute(

        item:QueueItem

    ){



        const task =
            item.task;




        this.running.add(

            task.id

        );





        task.onProgress =

        (

            progress

        )=>{


            task.progress =
                progress;



            this.options
                .onProgress
                ?.(
                    task
                );


        };






        this.options
            .onTaskStarted
            ?.(
                task
            );






        try {



            const result =

                await this.engine.start(

                    task

                );






            if(

                result.success

            ){



                task.status =
                    "completed";



                this.options
                    .onTaskCompleted
                    ?.(
                        task,

                        result

                    );



            }

            else {



                task.status =
                    "failed";



                this.options
                    .onTaskFailed
                    ?.(
                        task,

                        result.error ??
                        "Upload failed"

                    );


            }





        }

        catch(error){



            task.status =
                "failed";



            this.options
                .onTaskFailed
                ?.(
                    task,

                    error instanceof Error

                    ?

                    error.message

                    :

                    "Upload failed"

                );


        }

        finally {



            this.running.delete(

                task.id

            );


        }



    }







    /* =====================================================
       Controls
       ===================================================== */


    pause(){

        this.status =
            "paused";

    }





    resume(){

        if(

            this.status === "paused"

        ){

            void this.start();

        }

    }






    stop(){


        this.status =
            "stopped";


        this.queue =
            [];


    }



}