interface Props {

    params: {

        type: string;

    };

}

export default function SaleTypePage({
    params,
}: Props) {

    return (

        <main
            className="
                min-h-screen
                bg-[#08101E]
                pt-32
                pb-24
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                <h1
                    className="
                        text-6xl
                        font-black
                        text-[#F97316]
                    "
                >
                    {params.type}
                </h1>

                <p
                    className="
                        mt-6
                        text-2xl
                        text-slate-300
                    "
                >
                    Sale properties for
                    {` ${params.type}`}
                </p>

            </div>

        </main>

    );

}