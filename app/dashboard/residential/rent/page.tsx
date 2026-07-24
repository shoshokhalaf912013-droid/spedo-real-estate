export default function DashboardResidentialRentPage() {
  return (
    <main className="min-h-screen bg-[#05070D] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full border border-[#D4AF37]/30 px-5 py-2 text-[#D4AF37]">
          DASHBOARD
        </span>

        <h1 className="mt-8 text-5xl font-bold text-[#F97316]">
          Residential Rent Management
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Manage residential properties available for rent.
        </p>

        <div className="mt-12 rounded-[28px] border border-white/10 bg-[#07111D] p-8">
          <p className="text-slate-400">
            Residential rental records will appear here.
          </p>
        </div>
      </div>
    </main>
  );
}