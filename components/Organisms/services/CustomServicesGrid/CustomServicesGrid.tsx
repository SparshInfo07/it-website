"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  type CustomServicesGridData,
  type CustomServiceCardItem,
  CUSTOM_SERVICES_DEFAULT_DATA,
} from "@/data/customServices";

export interface CustomServicesGridProps {
  data?: CustomServicesGridData;
  defaultActiveId?: string | null;
  className?: string;
  id?: string;
  containerClassName?: string;
}

// Custom Technical SVG Icons matching the design screenshot
function ServiceIcon({
  type,
  isActive,
}: {
  type?: string;
  isActive: boolean;
}) {
  const gradientId = `grad-${type || "default"}`;

  return (
    <div className="relative w-12 h-12 flex items-center justify-start select-none">
      <svg
        className={`w-11 h-11 transition-all duration-300 ${isActive ? "text-white" : "text-[#0D9488]"
          }`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Website Development: Browser window with </> and gear */}
        {type === "website" && (
          <g
            stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
          >
            <rect
              x="5"
              y="8"
              width="32"
              height="24"
              rx="4"
              strokeWidth="2.4"
              fill="none"
            />
            <path d="M5 15H37" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
            <circle cx="10" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="19" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
            <path
              d="M14 24L10.5 27L14 30"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M20 24L23.5 27L20 30"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path d="M18 22L16 31" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Gear in corner */}
            <circle cx="37" cy="33" r="5" strokeWidth="2" fill="none" />
            <circle cx="37" cy="33" r="1.8" fill="currentColor" stroke="none" />
            <path
              d="M37 26.5V28M37 38V39.5M30.5 33H32M42 33H43.5M32.5 28.5L33.5 29.5M40.5 36.5L41.5 37.5M32.5 37.5L33.5 36.5M40.5 29.5L41.5 28.5"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Web App Development: Browser screen with code blocks & gear */}
        {type === "webapp" && (
          <g
            stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
          >
            <rect
              x="5"
              y="8"
              width="30"
              height="24"
              rx="4"
              strokeWidth="2.4"
              fill="none"
            />
            <path d="M5 15H35" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
            <circle cx="9.5" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="14" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="18.5" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
            <rect x="10" y="19" width="12" height="2" rx="1" fill="currentColor" stroke="none" />
            <rect x="10" y="24" width="8" height="2" rx="1" fill="currentColor" stroke="none" />
            {/* Prominent gear */}
            <circle cx="36" cy="31" r="5.5" strokeWidth="2.2" fill="none" />
            <circle cx="36" cy="31" r="2" fill="currentColor" stroke="none" />
            <path
              d="M36 24V25.5M36 36.5V38M29 31H30.5M41.5 31H43M31 26L32.2 27.2M39.8 34.8L41 36M31 36L32.2 34.8M39.8 27.2L41 26"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Web Portal Development: Dashboard with user profile and security shield */}
        {type === "portal" && (
          <g
            stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
          >
            <rect
              x="6"
              y="7"
              width="34"
              height="27"
              rx="4.5"
              strokeWidth="2.4"
              fill="none"
            />
            <path d="M6 15H40" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
            {/* User portal avatar */}
            <circle cx="16" cy="22" r="3.2" strokeWidth="2" fill="none" />
            <path
              d="M10.5 30C10.5 27.5 13 26.5 16 26.5C19 26.5 21.5 27.5 21.5 30"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Portal data rows */}
            <rect x="25" y="20" width="10" height="2" rx="1" fill="currentColor" stroke="none" />
            <rect x="25" y="25" width="7" height="2" rx="1" fill="currentColor" stroke="none" />
            {/* Network connector badge */}
            <circle cx="38" cy="35" r="4.5" strokeWidth="2" fill="none" />
            <path d="M38 33V37M36 35H40" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        )}

        {/* E-commerce Development: Screen with shopping cart & items */}
        {type === "ecommerce" && (
          <g
            stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
          >
            <rect
              x="5"
              y="7"
              width="34"
              height="26"
              rx="4.5"
              strokeWidth="2.4"
              fill="none"
            />
            <path d="M5 14H39" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
            {/* Shopping Cart */}
            <path
              d="M11 20H14L16.5 28H28L30 22H17"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="18" cy="31" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="27" cy="31" r="1.4" fill="currentColor" stroke="none" />
            {/* Price tag badge */}
            <rect x="30" y="28" width="11" height="9" rx="2" strokeWidth="2" fill="none" />
            <path d="M34 32.5H37" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        )}

        {/* Custom Web Design: UI wireframe canvas with layout elements and cursor */}
        {type === "design" && (
          <g
            stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
          >
            <rect
              x="6"
              y="7"
              width="34"
              height="26"
              rx="4.5"
              strokeWidth="2.4"
              fill="none"
            />
            <path d="M6 14H40" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
            {/* Wireframe UI blocks */}
            <rect x="11" y="19" width="10" height="7" rx="1.5" strokeWidth="1.8" fill="none" />
            <rect x="25" y="19" width="10" height="7" rx="1.5" strokeWidth="1.8" fill="none" />
            {/* Vector cursor / pen */}
            <path
              d="M21 27L25 38L28 32L34 31L21 27Z"
              strokeWidth="2"
              strokeLinejoin="round"
              fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
              fillOpacity={isActive ? "0.8" : "0.25"}
            />
          </g>
        )}

        {/* Website Modernization: Screen with circular refresh & upgrade arrow */}
        {type === "modernization" && (
          <g
            stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
          >
            <rect
              x="6"
              y="8"
              width="32"
              height="25"
              rx="4"
              strokeWidth="2.4"
              fill="none"
            />
            <path d="M6 15H38" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
            {/* Circular refresh / upgrade arrows */}
            <path
              d="M17 26C17.5 23.5 20 21.5 23 21.5C26.5 21.5 29 24 29 27C29 29.5 27 31.5 24.5 32"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M29 23V27H25"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Forward upgrade indicator */}
            <circle cx="37" cy="33" r="5" strokeWidth="2" fill="none" />
            <path
              d="M35 33L37.5 31L39.5 34"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        )}

        {/* Default fallback icon */}
        {!["website", "webapp", "portal", "ecommerce", "design", "modernization"].includes(
          type || ""
        ) && (
            <g
              stroke={isActive ? "#FFFFFF" : `url(#${gradientId})`}
              fill={isActive ? "#FFFFFF" : `url(#${gradientId})`}
            >
              <rect
                x="6"
                y="8"
                width="36"
                height="26"
                rx="5"
                strokeWidth="2.4"
                fill="none"
              />
              <path d="M6 16H42" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.7"} />
              <circle cx="11" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="21" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <path
                d="M18 24L14 28L18 32M30 24L34 28L30 32"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          )}
      </svg>
    </div>
  );
}

export default function CustomServicesGrid({
  data = CUSTOM_SERVICES_DEFAULT_DATA,
  defaultActiveId = "website-dev",
  className = "",
  id = "custom-services-grid",
  containerClassName = "",
}: CustomServicesGridProps) {
  // Controlled or uncontrolled active card (defaults to Card 2 "web-app" matching screenshot)
  const [activeCardId, setActiveCardId] = useState<string | null>(defaultActiveId);

  return (
    <section
      id={id}
      aria-label={data.heading.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()}
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden select-none ${className}`}
    >
      <div className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {/* Section Header: Centered Heading & Subtitle */}
        <div className="mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
          <h2
            className="section-title-h2 text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-medium leading-[1.18] tracking-[-0.02em] text-[#061826]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          {(data.description || data.subheading) && (
            <p
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[16px] text-[#6B7280] max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: (data.description || data.subheading) as string,
              }}
            />
          )}
        </div>

        {/* 3x2 Responsive Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
          onMouseLeave={() => setActiveCardId(defaultActiveId)}
        >
          {data.items.map((card: CustomServiceCardItem) => {
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                role="article"
                aria-label={card.title}
                tabIndex={0}
                onMouseEnter={() => setActiveCardId(card.id)}
                onFocus={() => setActiveCardId(card.id)}
                onClick={() => setActiveCardId(card.id)}
                className={`group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 cursor-pointer transition-all duration-300 ease-out outline-none ${isActive
                    ? "text-white shadow-[0_20px_45px_-10px_rgba(13,148,136,0.38)] -translate-y-1.5"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-slate-300"
                  }`}
                style={
                  isActive
                    ? {
                      background:
                        "linear-gradient(165deg, #061826 0%, #0D9488 55%, #06B6D4 100%)",
                    }
                    : undefined
                }
              >
                {/* Top: Icon + Title */}
                <div>
                  <div className="mb-5 sm:mb-6">
                    {card.icon ? (
                      <div className="relative w-12 h-12 flex items-center justify-start select-none">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    ) : (
                      <ServiceIcon type={card.icon || card.iconType} isActive={isActive} />
                    )}
                  </div>

                  <h3
                    className={`text-[19px] sm:text-[21px] font-semibold leading-[1.3] tracking-[-0.01em] transition-colors duration-300 ${isActive ? "text-white" : "text-[#061826]"
                      }`}
                  >
                    {card.title}
                  </h3>

                  {/* Subtle Divider Line matching design */}
                  <div
                    className={`h-px w-full my-4 sm:my-5 transition-colors duration-300 ${isActive ? "bg-white/20" : "bg-slate-200/90"
                      }`}
                  />

                  {/* Description */}
                  {Boolean(card.description && /\r?\n\r?\n/.test(card.description)) ? (
                    (() => {
                      const [subheading, ...rest] = card.description.split(/\r?\n\r?\n/);
                      const body = rest.join("\n\n");
                      return (
                        <div className="flex flex-col gap-2">
                          <h4
                            className={`text-[14.5px] sm:text-[15.5px] font-semibold leading-snug transition-colors duration-300 ${isActive ? "text-white" : "text-[#061826]"
                              }`}
                          >
                            {subheading}
                          </h4>
                          {body && (
                            <p
                              className={`text-[14px] sm:text-[14.5px] leading-[1.65] font-normal transition-colors duration-300 whitespace-pre-line ${isActive ? "text-white/90" : "text-[#6B7280]"
                                }`}
                            >
                              {body}
                            </p>
                          )}
                        </div>
                      );
                    })()
                  ) : (
                    <p
                      className={`text-[14px] sm:text-[15px] leading-[1.65] transition-colors duration-300 ${isActive ? "text-white/95" : "text-[#6B7280]"
                        }`}
                    >
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
