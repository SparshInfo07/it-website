"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DIFFERENT_INDUSTRIES_DATA, type DifferentIndustriesData } from "@/data/differentIndustries";
import { ASSETS } from "@/constants/images.constants";

export interface DifferentIndustriesProps {
  data?: DifferentIndustriesData;
  id?: string;
  className?: string;
}

export default function DifferentIndustries({
  data = DIFFERENT_INDUSTRIES_DATA,
  id = "different-industries-section",
  className = "",
}: DifferentIndustriesProps = {}) {
  const currentData = data || DIFFERENT_INDUSTRIES_DATA;
  const initialId =
    currentData.industries?.find((i) => i.id === "banking")?.id ||
    currentData.industries?.[0]?.id ||
    "banking";
  const [activeId, setActiveId] = useState<string>(initialId);
  const effectiveActiveId = currentData.industries?.some((i) => i.id === activeId)
    ? activeId
    : currentData.industries?.[0]?.id || "";
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const ctx = gsap.context(() => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleSelectIndustry = (id: string, immediate = false) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (immediate) {
      setActiveId(id);
    } else {
      // 80ms gentle debounce prevents fast accidental cursor sweeps from thrashing images
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveId(id);
      }, 80);
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label="Different industries. Same pressure to evolve."
      className={`sec_padding relative w-full overflow-hidden ${className}`}
    >
      {/* Background Section Pattern */}
      {ASSETS?.INDUSTRIES_BG_PATTERN && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src={ASSETS.INDUSTRIES_BG_PATTERN || ""}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top pointer-events-none select-none"
            priority
          />
        </div>
      )}

      <div className="relative container">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-10">
          <h2
            className="section-title-h2"
            dangerouslySetInnerHTML={{ __html: currentData.heading }}
          />

          {currentData.subheading && (
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[16px] text-[#5A556B] leading-[1.65] font-normal">
              {currentData.subheading}
            </p>
          )}
        </div>

        {/* Main Interactive Industry Card */}
        <div
          ref={cardRef}
          className="relative bg-white rounded-[28px] sm:rounded-[36px] border border-[#E9EDF4] shadow-[0_20px_60px_-15px_rgba(20,15,45,0.05)] p-6 sm:p-10 lg:p-12 xl:p-14 overflow-hidden"
        >
          {/* Card Decorative Wave Pattern */}
          {ASSETS?.INDUSTRIES_CARD_PATTERN && (
            <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden z-0">
              <Image
                src={ASSETS.INDUSTRIES_CARD_PATTERN}
                alt=""
                width={2040}
                height={366}
                className="w-full h-auto min-h-[140px] object-cover lg:object-contain object-bottom pointer-events-none select-none"
              />
            </div>
          )}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column: Industry Selector List */}
            <div
              role="tablist"
              aria-label="Industries"
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                  hoverTimeoutRef.current = null;
                }
              }}
              className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {currentData.industries.map((industry) => {
                const isActive = industry.id === effectiveActiveId;
                return (
                  <div key={industry.id} className="relative flex flex-col">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSelectIndustry(industry.id, true)}
                      onMouseEnter={() => handleSelectIndustry(industry.id, false)}
                      className="group flex items-center text-left focus:outline-none select-none transition-all duration-300 cursor-pointer"
                    >
                      {/* Active Radio Indicator vs Inactive Dot with smooth scale & fade transition */}
                      <span className="relative w-5 h-5 flex items-center justify-center mr-3 sm:mr-3.5 shrink-0">
                        {/* Inactive Dot */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-[#CBD5E1] group-hover:bg-[#94A3B8] transition-all duration-300 ease-out ${isActive ? "opacity-0 scale-0" : "opacity-100 scale-100"
                            }`}
                        />

                        {/* Active Radio Ring & Dot */}
                        <span
                          className={`absolute inset-0 m-auto w-4 h-4 rounded-full border-[1.5px] border-[#061826] flex items-center justify-center transition-all duration-300 ease-out ${isActive
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-50 pointer-events-none"
                            }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#061826]" />
                        </span>
                      </span>

                      {/* Industry Name */}
                      <span
                        className={`text-lg sm:text-[21px] transition-colors duration-300 ${isActive
                          ? "font-semibold text-[#061826]"
                          : "font-medium text-[#94A3B8] group-hover:text-[#475569]"
                          }`}
                      >
                        {industry.name}
                      </span>
                    </button>

                    {/* Smooth Expanding and Collapsing Tagline Accordion */}
                    {(industry.subheading || industry.tagline || industry.description) && (
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-2 pb-0.5 pl-8 sm:pl-[34px] flex flex-col gap-1">
                            {industry.subheading && (
                              <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#061826] leading-snug tracking-[-0.01em]">
                                {industry.subheading}
                              </h4>
                            )}
                            {(industry.tagline || industry.description) && (
                              <p
                                className="text-sm sm:text-[16px] text-[#64748B] font-normal leading-normal"
                                dangerouslySetInnerHTML={{
                                  __html: industry.tagline || industry.description || "",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Editorial Photo with smooth cross-fade */}
            <div className="lg:col-span-7">
              <div
                className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)] bg-slate-900 will-change-transform"
              >
                {currentData.industries.map((industry) => {
                  const isActive = industry.id === effectiveActiveId;
                  return (
                    <div
                      key={industry.id}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${isActive
                        ? "opacity-100 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 scale-[1.03] z-0 pointer-events-none"
                        }`}
                    >
                      {industry?.image && (
                        <Image
                          src={industry.image}
                          alt={industry?.alt || industry?.name || ""}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                          priority
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
