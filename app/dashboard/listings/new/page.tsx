import { Suspense } from "react";

import AddListingForm
from "@/features/dashboard/Listings/AddListingForm";

export default function NewListingPage() {

    return (

        <main
            className="
                min-h-screen
                bg-[#08101E]
                px-6
                py-32
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >

                <Suspense
                    fallback={
                        <div
                            className="
                                py-20
                                text-center
                                text-white
                            "
                        >
                            Loading...
                        </div>
                    }
                >

                    <AddListingForm />

                </Suspense>

            </div>

        </main>

    );

}