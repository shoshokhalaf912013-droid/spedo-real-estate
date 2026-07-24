import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { areas } from "@/data/areas";
import { featuredProjects } from "@/data/featuredProjects";

type AreaDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AreaDetailsPage({
  params,
}: AreaDetailsPageProps) {
  const { slug } = await params;

  const area = areas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

const areaProjects = featuredProjects.filter((project) =>
  area.projectIds.includes(project.slug)
);

  return (
    <main className="bg-[#05070D] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src={area.heroImage}
          alt={area.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-56">
          <span className="inline-block rounded-full border border-[#D4AF37]/30 px-5 py-2 text-[#D4AF37]">
            RED SEA DESTINATION
          </span>

          <h1 className="mt-8 font-playfair text-6xl text-[#F97316] md:text-8xl">
            {area.name}
          </h1>

          <p className="mt-8 max-w-3xl text-2xl text-slate-200">
            {area.heroTitle}
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            {area.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                {area.startingPrice}
              </div>

              <div className="mt-3 text-slate-400">
                Starting Price
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                {area.averageROI}
              </div>

              <div className="mt-3 text-slate-400">
                Expected ROI
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                {area.investmentScore}
              </div>

              <div className="mt-3 text-slate-400">
                Investment Score
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                {area.delivery}
              </div>

              <div className="mt-3 text-slate-400">
                Availability
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-playfair text-5xl text-[#F97316]">
            Investment Performance
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">
                {area.rentalDemand}
              </div>

              <div className="mt-3 text-slate-400">
                Rental Demand
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">
                {area.tourismGrowth}
              </div>

              <div className="mt-3 text-slate-400">
                Tourism Growth
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">
                {area.appreciation}
              </div>

              <div className="mt-3 text-slate-400">
                Appreciation
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">
                {area.liquidity}
              </div>

              <div className="mt-3 text-slate-400">
                Liquidity
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">
                {area.risk}
              </div>

              <div className="mt-3 text-slate-400">
                Investment Risk
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-playfair text-5xl text-[#F97316]">
            Why Choose {area.name}
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {area.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center"
              >
                <div className="text-xl font-semibold text-[#D4AF37]">
                  {highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-playfair text-5xl text-[#F97316]">
            Location Details
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">
                {area.airportDistance}
              </div>

              <div className="mt-3 text-slate-400">
                From Airport
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">
                {area.beachDistance}
              </div>

              <div className="mt-3 text-slate-400">
                From Beach
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">
                {area.currency}
              </div>

              <div className="mt-3 text-slate-400">
                Property Currency
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">
                {area.foreignOwnership ? "Available" : "Restricted"}
              </div>

              <div className="mt-3 text-slate-400">
                Foreign Ownership
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-playfair text-5xl text-[#F97316]">
            About {area.name}
          </h2>

          <p className="mt-8 leading-9 text-slate-300">
            {area.heroDescription}
          </p>
        </div>
      </section>

      {area.gallery.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center font-playfair text-5xl text-[#F97316]">
              Discover {area.name}
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {area.gallery.map((image, index) => (
                <div
                  key={image}
                  className="relative h-[340px] overflow-hidden rounded-[28px] border border-white/10"
                >
                  <Image
                    src={image}
                    alt={`${area.name} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-playfair text-5xl text-[#F97316]">
            Featured Projects In {area.name}
          </h2>

          {areaProjects.length > 0 ? (
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {areaProjects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-[32px] border border-white/10 bg-[#07111D]"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="h-[260px] w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="font-playfair text-3xl text-[#F97316]">
                      {project.name}
                    </h3>

                    <p className="mt-4 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      <div className="text-[#D4AF37]">
                        Starting From {project.startingPrice}
                      </div>

                      <div className="text-slate-300">
                        {project.paymentPlan}
                      </div>

                      <div className="text-slate-300">
                        Delivery {project.delivery}
                      </div>

                      <div className="text-slate-300">
                        ROI {project.roi}
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-8 inline-block rounded-2xl bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-[#ea6a10]"
                    >
                      Explore Project
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-16 rounded-[32px] border border-white/10 bg-[#07111D] p-12 text-center">
              <p className="text-lg text-slate-400">
                New projects in {area.name} will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[36px] border border-[#D4AF37]/20 bg-[#07111D] p-12 text-center">
            <h2 className="font-playfair text-5xl text-[#F97316]">
              Speak With A SPEDO Advisor
            </h2>

            <p className="mt-6 text-slate-300">
              Get project recommendations and investment advice for{" "}
              {area.name}.
            </p>

            <Link
              href="https://wa.me/201158070998"
              className="mt-8 inline-block rounded-2xl bg-[#D4AF37] px-10 py-4 font-bold text-black transition hover:bg-[#c9a432]"
            >
              WhatsApp Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}