import Link from "next/link";

export default function NotFound() {

    return (

        <main
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-[#08101E]
                px-6
            "
        >

            <div
                className="
                    max-w-3xl
                    text-center
                "
            >

                <div
                    className="
                        mb-10
                        text-8xl
                    "
                >
                    🏡
                </div>

                <h1
                    className="
                        text-6xl
                        font-black
                        text-white
                    "
                >
                    Property Not Found
                </h1>

                <p
                    className="
                        mt-8
                        text-xl
                        leading-9
                        text-slate-300
                    "
                >
                    The property you are looking
                    for may have been sold,
                    rented, or removed from
                    our listings.
                </p>

                <Link
                    href="/listings"
                    className="
                        mt-12
                        inline-flex
                        rounded-2xl
                        bg-[#F97316]
                        px-10
                        py-5
                        text-lg
                        font-black
                        text-[#08101E]
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >
                    Browse All Properties
                </Link>

            </div>

        </main>

    );

}