export default function Loading() {

    return (

        <main
            className="
                min-h-screen
                bg-[#08101E]
                py-20
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    animate-pulse
                    px-6
                "
            >

                {/* HERO */}

                <div
                    className="
                        h-[600px]
                        rounded-[40px]
                        bg-[#1A2436]
                    "
                />

                {/* CONTENT */}

                <div
                    className="
                        mt-12
                        grid
                        gap-10
                        lg:grid-cols-3
                    "
                >

                    {/* LEFT */}

                    <div
                        className="
                            lg:col-span-2
                        "
                    >

                        <div
                            className="
                                flex
                                gap-4
                            "
                        >

                            <div
                                className="
                                    h-12
                                    w-40
                                    rounded-full
                                    bg-[#1A2436]
                                "
                            />

                            <div
                                className="
                                    h-12
                                    w-40
                                    rounded-full
                                    bg-[#1A2436]
                                "
                            />

                        </div>

                        <div
                            className="
                                mt-10
                                h-20
                                w-3/4
                                rounded-3xl
                                bg-[#1A2436]
                            "
                        />

                        <div
                            className="
                                mt-6
                                h-8
                                w-1/2
                                rounded-2xl
                                bg-[#1A2436]
                            "
                        />

                        <div
                            className="
                                mt-12
                                grid
                                gap-6
                                md:grid-cols-4
                            "
                        >

                            {Array.from({
                                length: 4,
                            }).map((_, i) => (

                                <div
                                    key={i}
                                    className="
                                        h-36
                                        rounded-[28px]
                                        bg-[#1A2436]
                                    "
                                />

                            ))}

                        </div>

                        <div
                            className="
                                mt-16
                                h-[300px]
                                rounded-[40px]
                                bg-[#1A2436]
                            "
                        />

                    </div>

                    {/* SIDEBAR */}

                    <div
                        className="
                            h-[300px]
                            rounded-[40px]
                            bg-[#1A2436]
                        "
                    />

                </div>

            </div>

        </main>

    );

}