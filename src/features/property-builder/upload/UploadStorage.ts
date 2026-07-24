import type {
    UploadTask,
} from "./contracts";



/* =========================================================
   Types
   ========================================================= */


export interface StoredUploadTask {

    id:
        string;


    task:
        UploadTask;


    createdAt:
        number;


    updatedAt:
        number;

}



export interface UploadStorageOptions {

    key?: string;

}



/* =========================================================
   Default
   ========================================================= */


const DEFAULT_STORAGE_KEY =
    "property-upload-tasks";



/* =========================================================
   Upload Storage
   ========================================================= */


export class UploadStorage {


    private key:
        string;



    constructor(
        options:
            UploadStorageOptions = {}
    ) {

        this.key =
            options.key ??
            DEFAULT_STORAGE_KEY;

    }



    /* =====================================================
       Save
       ===================================================== */


    save(
        task: UploadTask
    ): void {


        const tasks =
            this.getAll();



        const now =
            Date.now();



        const existing =
            tasks.find(
                item =>
                    item.id ===
                    task.id
            );



        if (existing) {


            existing.task =
                task;


            existing.updatedAt =
                now;


        } else {


            tasks.push({

                id:
                    task.id,


                task,


                createdAt:
                    now,


                updatedAt:
                    now,

            });

        }



        this.write(
            tasks
        );

    }



    /* =====================================================
       Save Many
       ===================================================== */


    saveMany(
        tasks: UploadTask[]
    ): void {


        tasks.forEach(
            task => {

                this.save(
                    task
                );

            }
        );

    }

    /* =====================================================
       Get One Task
       ===================================================== */


    get(
        id: string
    ):
        UploadTask | undefined {


        const item =
            this.getAll()
                .find(
                    stored =>
                        stored.id === id
                );



        return item?.task;

    }



    /* =====================================================
       Get All Tasks
       ===================================================== */


    getAll():
        StoredUploadTask[] {


        if (
            typeof window ===
            "undefined"
        ) {

            return [];

        }



        try {


            const data =
                localStorage.getItem(
                    this.key
                );



            if (!data) {

                return [];

            }



            const parsed =
                JSON.parse(
                    data
                );



            if (
                !Array.isArray(
                    parsed
                )
            ) {

                return [];

            }



            return parsed as StoredUploadTask[];



        } catch {


            return [];

        }

    }



    /* =====================================================
       Remove One
       ===================================================== */


    remove(
        id: string
    ): void {


        const tasks =
            this.getAll();



        const filtered =
            tasks.filter(
                item =>
                    item.id !==
                    id
            );



        this.write(
            filtered
        );

    }



    /* =====================================================
       Remove Many
       ===================================================== */


    removeMany(
        ids: string[]
    ): void {


        const idSet =
            new Set(
                ids
            );



        const tasks =
            this.getAll();



        const filtered =
            tasks.filter(
                item =>
                    !idSet.has(
                        item.id
                    )
            );



        this.write(
            filtered
        );

    }



    /* =====================================================
       Clear
       ===================================================== */


    clear(): void {


        if (
            typeof window ===
            "undefined"
        ) {

            return;

        }



        localStorage.removeItem(
            this.key
        );

    }

    /* =====================================================
       Write Storage
       ===================================================== */


    private write(
        tasks: StoredUploadTask[]
    ): void {


        if (
            typeof window ===
            "undefined"
        ) {

            return;

        }



        try {


            localStorage.setItem(

                this.key,

                JSON.stringify(
                    tasks
                )

            );


        } catch(error) {


            console.error(
                "UploadStorage write failed:",
                error
            );


        }

    }



    /* =====================================================
       Exists
       ===================================================== */


    exists(
        id: string
    ): boolean {


        return this.getAll()
            .some(
                item =>
                    item.id === id
            );

    }



    /* =====================================================
       Count
       ===================================================== */


    count():
        number {

        return this.getAll()
            .length;

    }



    /* =====================================================
       Storage Key
       ===================================================== */


    getKey():
        string {

        return this.key;

    }



}



/* =========================================================
   Factory
   ========================================================= */


export function createUploadStorage(
    options:
        UploadStorageOptions = {}
): UploadStorage {


    return new UploadStorage(
        options
    );

}
