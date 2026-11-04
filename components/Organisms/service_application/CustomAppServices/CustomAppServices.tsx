"use client";

import React from "react";
import {
  CUSTOM_APP_SERVICES_DATA,
  type CustomAppServicesData,
  type CustomAppServiceItem,
} from "@/data/serviceApplication";
import GoodSoftwareCard from "@/components/Molecules/GoodSoftwareCard";

export interface CustomAppServicesProps {
  data?: CustomAppServicesData;
  className?: string;
  id?: string;
}

export default function CustomAppServices({
  data = CUSTOM_APP_SERVICES_DATA,
  className = "",
  id = "custom-app-services",
}: CustomAppServicesProps) {
  return (
    <section
      id={id}
      aria-label={data.heading}
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden ${className}`}
    >
      <div className="container">
        {/* Section Heading, Subheading & Description */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14 mx-auto max-w-4xl">
          <h2
            className="section-title-h2 text-[#061826]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          {data.subheading && (
            <p className="text-[17px] sm:text-[19px] md:text-[20px] font-semibold text-[#061826] mt-3 sm:mt-4 leading-snug">
              {data.subheading}
            </p>
          )}
          {data.description && (
            <p className="section-p text-[15px] sm:text-[16px] leading-[1.62] text-[#555068] mt-3 sm:mt-4 max-w-3xl mx-auto font-normal">
              {data.description}
            </p>
          )}
        </div>

        {/* 9 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {data.cards.map((card: CustomAppServiceItem) => (
            <GoodSoftwareCard key={card.id} card={card} invertOnHover={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
