"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  MODERN_BANKING_SOLUTIONS_DATA,
  type ModernBankingSolutionsData,
  type ModernBankingSolutionItem,
} from "@/data/serviceApplication";

export interface HowWeHelpBankingProps {
  data?: ModernBankingSolutionsData;
  defaultOpenId?: string | null;
  className?: string;
  id?: string;
}

export default function HowWeHelpBanking({
  data = MODERN_BANKING_SOLUTIONS_DATA,
  defaultOpenId = "mobile-banking-solutions",
  className = "",
  id = "how-we-help-modern-banking",
}: HowWeHelpBankingProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleItem = (itemId: string) => {
    setOpenId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section
      id={id}
      aria-label={`${data.heading} ${data.headingLine2 || ""} ${data.headingLine3 || ""}`.trim()}
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden ${className}`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="section-title-h2 text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-medium leading-[1.15] tracking-[-0.02em] text-[#061826]">
              {data.heading}
              {data.headingLine2 && (
                <>
                  <br />
                  {data.headingLine2}
                </>
              )}
              {data.headingLine3 && (
                <>
                  <br />
                  {data.headingLine3}
                </>
              )}
            </h2>

            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal max-w-md">
              {data.subheading}
            </p>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-3.5">
            {data.solutions.map((item: ModernBankingSolutionItem) => {
              const isOpen = item.id === openId;

              return (
                <div
                  key={item.id}
                  className={`transition-all duration-300 rounded-[14px] sm:rounded-[16px] overflow-hidden ${
                    isOpen
                      ? "bg-white border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(20,25,70,0.08)]"
                      : "bg-[#F4F6F9] hover:bg-[#EEF1F6] border border-transparent"
                  }`}
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`accordion-body-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between text-left select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] transition-colors"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                      {/* Soft Blue Icon Badge */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-[#EBF3FC] flex items-center justify-center shrink-0">
                        <Image
                          src={item.icon}
                          alt=""
                          width={22}
                          height={22}
                          className="w-5 h-5 object-contain"
                        />
                      </div>

                      {/* Solution Title */}
                      <span
                        className={`text-[15.5px] sm:text-[16.5px] md:text-[17px] leading-snug transition-colors duration-200 truncate sm:whitespace-normal ${
                          isOpen
                            ? "font-semibold text-[#061826]"
                            : "font-medium text-[#061826]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Chevron Toggle Indicator */}
                    <div
                      aria-hidden="true"
                      className="shrink-0 text-slate-500 pl-2 flex items-center justify-center"
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-700 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Expanding Drawer with Signature Gradient */}
                  <div
                    id={`accordion-body-${item.id}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-5 py-5 sm:px-6 sm:py-6 text-[14px] sm:text-[15px] leading-relaxed text-white font-normal"
                        style={{
                          background:
                            "linear-gradient(180deg, #1C2356 0%, #1A387E 55%, #1F68B6 100%)",
                        }}
                      >
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
