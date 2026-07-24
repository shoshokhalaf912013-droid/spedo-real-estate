"use client";

import {
    useState,
} from "react";


import {
    usePropertyStore,
} from "./store";


import {
    saveProperty,
} from "./property-api";



export default function SaveButton() {


    const {
        property,
    } =
        usePropertyStore();



    const [
        saving,
        setSaving,
    ] =
        useState(false);




    async function handleSave() {


        /* ===========================
           VALIDATION
        =========================== */


        if (
            !property.title.trim()
        ) {

            alert(
                "Please enter Property Title."
            );

            return;

        }



        if (
            property.price <= 0
        ) {

            alert(
                "Please enter Property Price."
            );

            return;

        }



        if (
            !property.country.trim()
        ) {

            alert(
                "Please enter Country."
            );

            return;

        }



        if (
            !property.city.trim()
        ) {

            alert(
                "Please enter City."
            );

            return;

        }




        try {


            setSaving(true);



            console.log(
                "========== PROPERTY =========="
            );


            console.table(
                property
            );




            const result =
                await saveProperty(
                    property
                );




            console.log(
                "========== API RESULT =========="
            );


            console.log(
                result
            );


            console.log(
                "================================"
            );





            if (
                !result.success
            ) {


                alert(

                    result.message ??
                    "Save failed."

                );


                return;

            }





            if (
                !result.property
            ) {


                alert(
                    "API returned success but no property object."
                );


                console.log(
                    result
                );


                return;

            }






            alert(

                "Property saved successfully.\n\nID: "
                +
                result.property.id

            );




        }

        catch(error) {


            console.error(
                "========== SAVE ERROR =========="
            );


            console.error(
                error
            );


            console.error(
                "================================"
            );



            alert(
                "Failed to save property."
            );



        }

        finally {


            setSaving(false);


        }


    }





    return (


        <div
            className="
                flex
                justify-end
            "
        >


            <button


                onClick={
                    handleSave
                }


                disabled={
                    saving
                }


                className="
                    rounded-xl
                    bg-green-600
                    px-8
                    py-4
                    text-lg
                    font-bold
                    text-white
                    transition
                    hover:bg-green-700
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "

            >


                {
                    saving
                        ? "Saving..."
                        : "Save Property"
                }


            </button>



        </div>


    );


}