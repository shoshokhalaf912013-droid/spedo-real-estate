import { projectApplication } from "@/application/project/ProjectApplication";

export default function ProjectSearch() {

  const stats =
    projectApplication.getStatistics();

  return (

    <section className="bg-[#05070D] py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-[#D4AF37]">
          SPEDO Core Test
        </h2>

        <div className="mt-8 space-y-4 text-2xl text-white">

          <div>
            Projects: {stats.projects}
          </div>

          <div>
            Units: {stats.units}
          </div>

          <div>
            Available: {stats.available}
          </div>

        </div>

      </div>

    </section>

  );

}