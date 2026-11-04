"use client";

import React from "react";
import Image from "next/image";
import { IndustryItem } from "@/data/differentIndustries";
import { ASSETS } from "@/constants/images.constants";
import IndustryTabItem from "@/components/Molecules/IndustryTabItem";

export interface IndustryCardProps {
  industries: IndustryItem[];
  activeId: string;
  onSelectIndustry: (id: string) => void;
  className?: string;
}

export default function IndustryCard({
  industries,
  activeId,
  onSelectIndustry,
  className = "",
}: IndustryCardProps) {
  return (
    <div
      className={`relative max-w-[1360px] w-full min-h-[540px] lg:h-[540px] mx-auto bg-white rounded-[24px] border border-[#E9EDF4] shadow-[0_20px_60px_-15px_rgba(20,15,45,0.05)] p-6 sm:p-10 lg:p-12 xl:p-14 overflow-hidden flex flex-col justify-center ${className}`}
    >
      {/* Card Bottom Wave Pattern */}
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center h-full">
        {/* Left Column: Industry Selector List */}
        <div
          role="tablist"
          aria-label="Industries"
          className="lg:col-span-5 flex flex-col space-y-3.5 sm:space-y-4 lg:space-y-4.5 justify-center"
        >
          {industries.map((industry) => (
            <IndustryTabItem
              key={industry.id}
              industry={industry}
              isActive={industry.id === activeId}
              onSelect={onSelectIndustry}
            />
          ))}
        </div>

        {/* Right Column: Dynamic Editorial Photo */}
        <div className="lg:col-span-7 flex items-center justify-center h-full">
          <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.5/1] max-h-[440px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)] bg-slate-900 will-change-transform"
          >
            {industries.map((industry) => {
              const isActive = industry.id === activeId;
              return (
                <div
                  key={industry.id}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-[1.03] z-0 pointer-events-none"
                  }`}
                >
                  {industry?.image && (
                    <Image
                      src={industry.image}
                      alt={industry.alt || industry.name}
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
  );
}
