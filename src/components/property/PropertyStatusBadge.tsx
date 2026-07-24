interface Props {

    status: string;

}

export default function PropertyStatusBadge({

    status

}: Props) {

    const value =
        status.toLowerCase();

    if (value === "sold") {

        return (

            <div
                className="
                    mb-4
                    rounded-xl
                    bg-red-600
                    px-4
                    py-2
                    text-center
                    font-bold
                    text-white
                "
            >
                🔴 مباع
            </div>

        );

    }

    if (value === "reserved") {

        return (

            <div
                className="
                    mb-4
                    rounded-xl
                    bg-yellow-500
                    px-4
                    py-2
                    text-center
                    font-bold
                    text-black
                "
            >
                🟡 محجوز
            </div>

        );

    }

    return (

        <div
            className="
                mb-4
                rounded-xl
                bg-green-600
                px-4
                py-2
                text-center
                font-bold
                text-white
            "
        >
            🟢 متاح
        </div>

    );

}