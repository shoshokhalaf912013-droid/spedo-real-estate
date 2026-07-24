"use client";

import Link from "next/link";
import { Building2, KeyRound, Home, Hammer } from "lucide-react";

const services = [
  {
    title: "New Projects",
    description:
      "Explore off-plan developments with flexible payment plans and strong investment potential.",
    href: "/Projects",
    icon: Building2,
  },
  {
    title: "Resale",
    description:
      "Ready-to-move apartments, villas and investment opportunities across the Red Sea.",
    href: "/Resale",
    icon: KeyRound,
  },
  {
    title: "Rent",
    description:
      "Short-term and long-term rental solutions for residents and investors.",
    href: "/Rent",
    icon: Home,
  },
  {
    title: "Renovation",
    description:
      "Interior finishing, furnishing and property renovation services.",
    href: "/Renovation",
    icon: Hammer,
  },
];

export default function ServicesHub() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="tracking-[5px] uppercase text-orange-500 text-sm">
            What Are You Looking For?
          </span>

          <h2 className="mt-5 font-playfair text-5xl md:text-6xl">
            Choose Your Property Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-500">
            Whether you're investing, buying, renting or renovating,
            SPEDO connects you with the right solution.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="
                group
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-400
                hover:shadow-2xl
              "
              >
                <div
                  className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-50
                  text-orange-500
                "
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mb-8 text-slate-500">
                  {service.description}
                </p>

                <div
                  className="
                  font-semibold
                  text-orange-500
                  transition-all
                  group-hover:translate-x-1
                "
                >
                  Explore →
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}