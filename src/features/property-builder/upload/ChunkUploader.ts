import type {
    UploadTask,
} from "./contracts";



/* =========================================================
   Types
   ========================================================= */


export interface ChunkUploaderOptions {


    chunkSize?:
        number;


}



export interface ChunkFile {


    index:
        number;


    start:
        number;


    end:
        number;


    size:
        number;


    blob:
        Blob;

}





export interface ChunkProgress {


    uploadedBytes:
        number;


    totalBytes:
        number;


    percentage:
        number;


}





export type ProgressCallback =
    (
        progress:ChunkProgress
    )=>void;





const DEFAULT_CHUNK_SIZE =
    10 * 1024 * 1024;






/* =========================================================
   ChunkUploader
   ========================================================= */


export class ChunkUploader {



    private chunkSize:number;



    constructor(

        options:
            ChunkUploaderOptions = {}

    ){


        this.chunkSize =

            options.chunkSize ??
            DEFAULT_CHUNK_SIZE;


    }





    /* =====================================================
       Create chunks
       ===================================================== */


    createChunks(

        task:UploadTask

    ):ChunkFile[]{



        const file =
            task.file.file;



        const chunks:
            ChunkFile[] = [];



        let index = 0;




        for(

            let start = 0;

            start < file.size;

            start += this.chunkSize

        ){



            const end =

                Math.min(

                    start +
                    this.chunkSize,

                    file.size

                );



            chunks.push({


                index,


                start,


                end,


                size:
                    end - start,


                blob:

                    file.slice(

                        start,

                        end

                    ),


            });



            index++;


        }





        return chunks;


    }






    /* =====================================================
       Upload chunks
       ===================================================== */


    async uploadChunks(


        chunks:ChunkFile[],



        uploader:

            (

                chunk:Blob,

                index:number

            )=>Promise<void>,



        onProgress:
            ProgressCallback,



        concurrency:number = 3



    ):Promise<void>{





        const totalBytes =

            chunks.reduce(

                (

                    total,

                    chunk

                )=>

                    total +
                    chunk.size,


                0

            );





        let uploadedBytes = 0;



        let pointer = 0;





        const worker = async()=>{



            while(true){



                const index =
                    pointer++;



                if(
                    index >= chunks.length
                ){

                    break;

                }





                const chunk =
                    chunks[index];





                await uploader(

                    chunk.blob,

                    chunk.index

                );





                uploadedBytes +=
                    chunk.size;





                onProgress({


                    uploadedBytes,


                    totalBytes,



                    percentage:

                        Math.round(

                            (

                                uploadedBytes /
                                totalBytes

                            ) * 100

                        ),


                });



            }


        };






        const workers =

            Array.from(

                {

                    length:

                        Math.min(

                            concurrency,

                            chunks.length

                        )

                },


                ()=>worker()


            );






        await Promise.all(

            workers

        );



    }



}