"use client";

import React from "react";
import { HOMEPAGE_GOOD_SOFTWARE_DATA, type GoodSoftwareData } from "@/data/HomePage";
import GoodSoftwareCard from "@/components/Molecules/GoodSoftwareCard";

export interface GoodSoftwareProps {
  data?: GoodSoftwareData;
}

export default function GoodSoftware({ data = HOMEPAGE_GOOD_SOFTWARE_DATA }: GoodSoftwareProps = {}) {
  return (
    <section className="Good-software relative w-full bg-white">
      <div className="container">
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="section-title-h2"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p
            className="section-p text-[15px] sm:text-[16px] max-w-5xl mx-auto leading-[1.58] text-black/80 mt-6 transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {data.cards.map((card) => (
            <GoodSoftwareCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
