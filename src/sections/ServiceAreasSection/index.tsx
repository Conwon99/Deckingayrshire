import { useState } from "react";
import { ServiceAreaMap } from "@/sections/ServiceAreasSection/ServiceAreaMap";
import { brandName, business, citiesLabel } from "@/data/business";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";

export const ServiceAreasSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const brand = brandName();
  const serviceList = categories.map((c) => c.name.toLowerCase()).join(", ");

  return (
    <section id="service-areas" className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">Service Areas</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] uppercase text-black">
            Areas We Cover
          </h2>
          <p className="text-[15px] text-neutral-700 leading-6 md:text-base max-w-[700px]">
            {brand} provides {serviceList} across {citiesLabel()} and {business.region}. Select your area below or{" "}
            <a href="/locations" className="text-[#ea580c] hover:underline font-medium">
              view all service areas
            </a>
            . Get in touch to confirm coverage and book a free quote.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="box-border">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="font-bold uppercase text-black text-left flex items-center gap-2"
                aria-expanded={isOpen}
              >
                <span>{isOpen ? "Hide locations" : "Show locations"}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] leading-6 text-neutral-700 md:text-base mt-4 list-none pl-0">
                  {locations.map((location) => (
                    <li key={location.slug} className="flex items-center gap-2">
                      <span className="text-neutral-800" aria-hidden>
                        •
                      </span>
                      <a href={`/locations/${location.slug}`} className="text-neutral-700 hover:text-[#ea580c] hover:underline">
                        {location.name}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-800" aria-hidden>•</span>
                    <span>Surrounding areas</span>
                  </li>
                </ul>
              )}
            </div>

            <div className="box-border w-full relative rounded-xl overflow-hidden aspect-[4/3] min-h-[280px] lg:min-h-[320px]">
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
