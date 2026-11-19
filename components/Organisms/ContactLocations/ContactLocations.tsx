"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import OfficeMapPin from "@/components/Atoms/OfficeMapPin";
import {
  CONTACT_LOCATIONS_DATA,
  type OfficeLocationItem,
} from "@/data/contact-us";

export interface ContactLocationsProps {
  data?: OfficeLocationItem[];
}

export default function ContactLocations({
  data = CONTACT_LOCATIONS_DATA,
}: ContactLocationsProps = {}) {
  const [activeOffice, setActiveOffice] = useState(data[0] || CONTACT_LOCATIONS_DATA[0]);
  const mapUrl = `https://maps.google.com/maps?q=${activeOffice.coordinates}&z=13&output=embed`;

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="container">
        <header className="mx-auto mb-12 max-w-5xl text-center sm:mb-14">
          <h2 className="text-5xl font-medium tracking-tight text-[#111] sm:text-4xl lg:text-[45px]">
            Our Presence Across the United States
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-6 text-[#858585]">
            With offices across the United States, Sparsh IT stays closer to clients, enabling stronger collaboration, responsive support, and seamless business engagement.
          </p>
        </header>

        <div className="mx-auto grid  gap-15 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-18">
          <div className="group relative aspect-[1.08] min-h-[320px] overflow-hidden rounded-xl bg-[#d9f1f3] shadow-sm sm:aspect-[1.2] lg:aspect-[1.08]">
            <iframe
              key={activeOffice.id}
              title={`Map showing the ${activeOffice.city} office`}
              src={mapUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${activeOffice.coordinates}`}
              target="_blank"
              rel="noreferrer"
              className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-[#202b50] shadow-md transition hover:bg-[#f6f8ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
            >
              View map <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <span className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-medium text-[#222] shadow-md">
              <OfficeMapPin className="h-5 w-4" />
              {activeOffice.city}, {activeOffice.country}
            </span>
          </div>

          <div className="divide-y divide-[#dedede]">
            {["USA Offices", "India Offices"].map((region) => (
              <section key={region} className="py-6 first:pt-0 last:pb-0">
                <h3 className="mb-4 text-[22px] font-medium tracking-tight text-[#111] sm:text-2xl">
                  {region}
                </h3>
                <div className="space-y-5">
                  {data.filter((office) => office.region === region).map((office) => (
                    <article key={office.id}>
                      <button
                        type="button"
                        onClick={() => setActiveOffice(office)}
                        aria-pressed={activeOffice.id === office.id}
                        className="group/office flex items-center gap-2 text-left text-sm font-medium text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                      >
                        <OfficeMapPin className="h-[21px] w-4 shrink-0" />
                        <span className="transition-colors group-hover/office:text-[#0D9488] font-bold text-[18px]">{office.city}, {office.country}</span>
                      </button>
                      <p className="ml-[25px] mt-1.5 text-xs leading-5 text-[#858585] sm:text-[13px]">
                        {office.address}
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveOffice(office)}
                        className="ml-[25px] mt-1 inline-block text-xs text-[#202b50] underline decoration-[#aaa] underline-offset-4 transition hover:text-[#0D9488] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                      >
                        Show on Map
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
