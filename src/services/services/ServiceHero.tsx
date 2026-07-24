interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function ServiceHero({
  badge,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="bg-[#05070D] py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <span
          className="
          rounded-full
          border
          border-[#D4AF37]/30
          px-5
          py-2
          text-[#D4AF37]
        "
        >
          {badge}
        </span>

        <h1
          className="
          mt-8
          font-luxury
          text-5xl
          font-semibold
          text-white
          md:text-7xl
        "
        >
          {title}
        </h1>

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          text-slate-400
        "
        >
          {description}
        </p>

      </div>
    </section>
  );
}