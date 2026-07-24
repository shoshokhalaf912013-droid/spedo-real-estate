type CommercialSaleTypePageProps = {
  params: Promise<{
    type: string;
  }>;
};

function formatPropertyType(value: string) {
  return decodeURIComponent(value)
    .replaceAll("-", " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default async function CommercialSaleTypePage({
  params,
}: CommercialSaleTypePageProps) {
  const { type } = await params;
  const propertyType = formatPropertyType(type);

  return (
    <main className="min-h-screen bg-[#05070D] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full border border-[#D4AF37]/30 px-5 py-2 text-[#D4AF37]">
          COMMERCIAL SALE
        </span>

        <h1 className="mt-8 text-5xl font-bold text-[#F97316] md:text-7xl">
          {propertyType} For Sale
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Explore available {propertyType.toLowerCase()} investment
          opportunities with SPEDO.
        </p>

        <div className="mt-14 rounded-[32px] border border-white/10 bg-[#07111D] p-10">
          <h2 className="text-3xl font-semibold text-[#D4AF37]">
            Available Properties
          </h2>

          <p className="mt-4 text-slate-400">
            Property listings will appear here after they are added from the
            SPEDO administration dashboard.
          </p>
        </div>
      </div>
    </main>
  );
}