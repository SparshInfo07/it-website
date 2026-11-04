"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OUR_WORK_DATA, type OurWorkData } from "@/data/ourWork";
import RollingText from "@/components/Atoms/RollingText";

export interface OurWorkProps {
  data?: OurWorkData;
  className?: string;
}

export default function OurWork({ data = OUR_WORK_DATA, className = "" }: OurWorkProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="our-work-section"
      ref={sectionRef}
      aria-label={data.heading.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()}
      className={`sec_padding relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2
            className="section-title-h2 text-[#061826]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p
            className="text-[14px] sm:text-[15px] leading-[1.62] text-[#555068] font-normal"
            dangerouslySetInnerHTML={{ __html: data?.description || data?.subheading || OUR_WORK_DATA.description || "" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 lg:gap-10 items-start">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col cursor-pointer"
            >
              {item?.image && (
                <div className="relative w-full h-[440px] rounded-[24px] sm:rounded-[28px] overflow-hidden mb-4 sm:mb-5">
                  <Image
                    src={item.image}
                    alt={item?.alt || item?.name || ""}
                    width={440}
                    height={440}
                    className="object-cover h-full w-full object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  />
                </div>
              )}

              <p className="text-[14px] sm:text-[16px] font-semibold text-black mb-2 sm:mb-2.5">
                {item.category}
              </p>

              <p className="text-[14px] sm:text-[15px] leading-[1.62] text-[#555068] font-normal">
                <span className="font-semibold text-black mr-1.5">
                  {item.name}:
                </span>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {data?.cta?.href && data?.cta?.label && (
          <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center">
            <Link
              href={data.cta.href}
              className="group inline-flex items-center justify-center rounded-full border border-[#443385]/55 px-8 py-3.5 text-[15px] font-medium text-[#2E2068] transition-all duration-300 hover:border-[#061826] hover:bg-[#061826] hover:text-white active:scale-95 select-none shadow-sm"
            >
              <RollingText text={data.cta.label} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
