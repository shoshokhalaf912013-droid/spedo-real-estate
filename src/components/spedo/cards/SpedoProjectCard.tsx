import Image from "next/image";
import GoldButton from "./GoldButton";
import Badge from "./Badge";
import SpedoCard from "./SpedoCard";

interface SpedoProjectCardProps {
    image: string;

    project: string;

    developer: string;

    location: string;

    investmentScore: number;

    roi: string;

    startingPrice: string;

    paymentPlan: string;

    status?: string;

    onView?: () => void;
}

export default function SpedoProjectCard({
    image,
    project,
    developer,
    location,
    investmentScore,
    roi,
    startingPrice,
    paymentPlan,
    status = "Verified",
    onView,
}: SpedoProjectCardProps) {
    return (
        <SpedoCard className="p-0 overflow-hidden">

            {/* IMAGE */}

            <div className="relative h-64 overflow-hidden">

                <Image
                    src={image}
                    alt={project}
                    fill
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                    "
                />

                <div className="absolute left-6 top-6">

                    <Badge>
                        ✓ {status}
                    </Badge>

                </div>

                <div className="absolute bottom-6 left-6">

                    <h3
                        className="
                            text-3xl
                            font-bold
                            text-white
                        "
                    >
                        {project}
                    </h3>

                    <p className="mt-2 text-zinc-300">
                        {location}
                    </p>

                </div>

            </div>

            {/* CONTENT */}

            <div className="p-8">

                <p
                    className="
                        uppercase
                        tracking-[3px]
                        text-xs
                        text-[#D4AF37]
                    "
                >
                    Developer
                </p>

                <h4
                    className="
                        mt-2
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    {developer}
                </h4>

                {/* METRICS */}

                <div
                    className="
                        mt-8
                        grid
                        grid-cols-2
                        gap-5
                    "
                >

                    <Metric
                        title="Investment Score"
                        value={`${investmentScore}/100`}
                    />

                    <Metric
                        title="Expected ROI"
                        value={roi}
                    />

                    <Metric
                        title="Starting From"
                        value={startingPrice}
                    />

                    <Metric
                        title="Payment Plan"
                        value={paymentPlan}
                    />

                </div>

                <GoldButton
                    className="
                        mt-10
                        w-full
                    "
                    onClick={onView}
                >
                    View Project
                </GoldButton>

            </div>

        </SpedoCard>
    );
}

interface MetricProps {
    title: string;
    value: string;
}

function Metric({
    title,
    value,
}: MetricProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
            "
        >
            <p
                className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-slate-400
                "
            >
                {title}
            </p>

            <h5
                className="
                    mt-2
                    text-lg
                    font-bold
                    text-[#D4AF37]
                "
            >
                {value}
            </h5>
        </div>
    );
}