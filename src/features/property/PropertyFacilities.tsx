type PropertyFacilitiesProps = {
  facilities: string[];
};

export function PropertyFacilities({
  facilities,
}: PropertyFacilitiesProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Project Facilities
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {facilities.map((facility) => (
          <div
            key={facility}
            className="rounded-2xl bg-slate-800 p-4"
          >
            ✓ {facility}
          </div>
        ))}
      </div>
    </section>
  );
}