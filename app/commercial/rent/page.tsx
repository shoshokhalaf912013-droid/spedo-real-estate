import Link from "next/link";

const propertyTypes = [
  "Office",
  "Retail",
  "Clinic",
  "Restaurant",
  "Warehouse",
];

export default function CommercialRentPage() {
  return (
    <main className="min-h-screen bg-[#05070D] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full border border-[#D4AF37]/30 px-5 py-2 text-[#D4AF37]">
          COMMERCIAL PROPERTIES
        </span>

        <h1 className="mt-8 text-5xl font-bold text-[#F97316] md:text-7xl">
          Commercial Properties For Rent
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Discover commercial rental opportunities suitable for businesses
          and investors.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {propertyTypes.map((propertyType) => (
            <Link
              key={propertyType}
              href={`/commercial/rent/${propertyType.toLowerCase()}`}
              className="rounded-[28px] border border-white/10 bg-[#07111D] p-8 transition hover:border-[#F97316]/60"
            >
              <h2 className="text-2xl font-semibold text-[#D4AF37]">
                {propertyType}
              </h2>

              <p className="mt-3 text-slate-400">
                View {propertyType.toLowerCase()} properties available for
                rent.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}