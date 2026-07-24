import FloatingHeader from "@/components/header/FloatingHeader";

import PropertyMatcher
from "@/components/ai/PropertyMatcher";

import WhatsappButton
from "@/components/whatsapp/WhatsappButton";

export default function PropertyMatcherPage() {

    return (

        <>

            <main
                className="
                min-h-screen
                bg-black
                pt-24
                "
            >

                <section
                    className="
                    mx-auto
                    max-w-7xl
                    px-6
                    pb-24
                    "
                >

                    <div
                        className="
                        mb-16
                        text-center
                        "
                    >

                        <span
                            className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[6px]
                            text-[#d4af37]
                            "
                        >
                            SPEDO AI ENGINE
                        </span>

                        <h1
                            className="
                            mt-6
                            text-5xl
                            font-light
                            leading-tight
                            text-[#ff7a1a]
                            md:text-7xl
                            "
                        >
                            Find The Perfect
                            Property In The
                            Red Sea
                        </h1>

                        <p
                            className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-lg
                            leading-8
                            text-gray-400
                            "
                        >
                            Use artificial intelligence
                            to discover investment
                            opportunities, family homes,
                            rental properties and
                            high-return projects
                            tailored to your goals.
                        </p>

                    </div>

                    <PropertyMatcher />

                </section>

            </main>


            <WhatsappButton />

        </>

    );

}