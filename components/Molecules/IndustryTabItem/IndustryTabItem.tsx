"use client";

import React from "react";
import { IndustryItem } from "@/data/differentIndustries";

export interface IndustryTabItemProps {
  industry: IndustryItem;
  isActive: boolean;
  onSelect: (id: string) => void;
  className?: string;
}

export default function IndustryTabItem({
  industry,
  isActive,
  onSelect,
  className = "",
}: IndustryTabItemProps) {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <button
        type="button"
        role="tab"
        aria-selected={isActive}
        onClick={() => onSelect(industry.id)}
        onMouseEnter={() => onSelect(industry.id)}
        className="group flex items-center text-left focus:outline-none select-none transition-all duration-300 cursor-pointer"
      >
        {/* Active Radio Indicator vs Inactive Dot */}
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
          {industry?.name}
        </span>
      </button>

      {/* Smooth Expanding and Collapsing Tagline Accordion */}
      {(industry?.tagline || industry?.description) && (
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
        >
          <div className="overflow-hidden">
            <p
              className="pt-1.5 pb-0.5 text-sm sm:text-[14.5px] text-[#64748B] font-normal leading-normal pl-8 sm:pl-[34px]"
              dangerouslySetInnerHTML={{ __html: industry.tagline || industry.description || "" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
