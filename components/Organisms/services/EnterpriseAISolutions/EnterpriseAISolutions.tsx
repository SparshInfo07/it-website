"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ENTERPRISE_AI_SOLUTIONS_DATA,
  type EnterpriseAISolutionsData,
} from "@/data/artificial-intelligence";

export interface EnterpriseAISolutionsProps {
  data?: EnterpriseAISolutionsData;
  defaultActiveId?: string | null;
  className?: string;
  id?: string;
}

const CARD_HOVER_GRADIENT =
  "linear-gradient(224.21deg, #061826 -15.9%, #0D9488 51.97%, #06B6D4 82.29%, #FFFFFF 134.27%)";

export default function EnterpriseAISolutions({
  data = ENTERPRISE_AI_SOLUTIONS_DATA,
  defaultActiveId = null,
  className = "",
  id = "enterprise-ai-solutions",
}: EnterpriseAISolutionsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(defaultActiveId);

  return (
    <section
      id={id}
      aria-label={data.heading}
      className={`sec_padding relative w-full bg-white overflow-hidden ${className}`.trim()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* {
            data.badge && (
              <p className="text-[14px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0D9488] uppercase mb-4 sm:mb-5">
                {data.badge}
              </p>
            )
          } */}
          <h2
            className="section-title-h2 font-normal leading-[1.18] tracking-[-0.02em] text-[#061826] mb-4 sm:mb-5"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          {data.description && (
            <p
              className="text-[16] text-black/80 mb-4 sm:mb-5"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
        </div>

        {/* Solutions Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch"
          onMouseLeave={() => setHoveredId(null)}
        >
          {data.items.map((item) => {
            const isHovered = hoveredId === item.id;
            const hasDoubleBreak = Boolean(
              item.description && /\r?\n\r?\n/.test(item.description),
            );
            const [subtitle, ...rest] = hasDoubleBreak
              ? item.description.split(/\r?\n\r?\n/)
              : [item.description];
            const body = rest.join("\n\n");

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                className={`relative rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-start text-left select-none outline-none overflow-hidden bg-white ${isHovered
                  ? "border border-transparent"
                  : "border border-[#E8ECF2] "
                  }`}
              >
                {/* User Requested Gradient Background active only on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  style={{
                    background: CARD_HOVER_GRADIENT,
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Card Icon */}
                    <div className="mb-3 flex items-center justify-start">
                      <div
                        className="w-14 h-14 flex items-center justify-center"
                      >

                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <Image
                            src={item.iconType || ""}
                            alt={item.title || ""}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>

                      </div>
                    </div>

                    {/* Card Title (H3) */}

                    {item.title && (
                      <h3
                        className={`text-[17px] sm:text-[18px] lg:text-[19px] xl:text-[20px] font-semibold leading-[1.35] tracking-[-0.015em] min-h-[52px] sm:min-h-[56px] flex items-start transition-colors duration-300 ${isHovered ? "text-white" : "text-[#061826]"
                          }`}
                      >
                        {/* Card Subtitle */}
                        {item.title}
                      </h3>
                    )}

                    {item.subtitle && (
                      <p
                        className={`text-[14px] font-medium leading-[1.4] mt-1 transition-colors duration-300 ${isHovered ? "text-white/90" : "text-[#0D9488]"
                          }`}
                      >
                        {item.subtitle}
                      </p>
                    )}

                    <div
                      className={`w-full h-px my-3.5 transition-all duration-300 ${isHovered ? "bg-white/25" : "bg-black"
                        }`}
                    />

                    {/* Card Description */}
                    {hasDoubleBreak ? (
                      <div className="flex flex-col gap-2">
                        <p
                          className={`text-[16px] leading-snug font-medium transition-colors duration-300 ${isHovered ? "text-white" : "text-black"
                            }`}
                          dangerouslySetInnerHTML={{ __html: subtitle }}
                        />
                        {body && (
                          <p
                            className={`text-[16px]  leading-[1.65] font-normal transition-colors duration-300 whitespace-pre-line ${isHovered ? "text-white/85" : "text-[#666666]"
                              }`}
                            dangerouslySetInnerHTML={{ __html: body }}
                          />
                        )}
                      </div>
                    ) : (
                      <p
                        className={`text-[16px] leading-[1.65] font-normal transition-colors duration-300 whitespace-pre-line ${isHovered ? "text-white/90" : "text-[#666666]"
                          }`}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
