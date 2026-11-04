"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  BANKING_SOFTWARE_SERVICES_DATA,
  type BankingSoftwareServicesData,
  type BankingSoftwareServiceItem,
} from "@/data/serviceApplication";

export interface BankingSoftwareServicesProps {
  data?: BankingSoftwareServicesData;
  className?: string;
  id?: string;
}

export default function BankingSoftwareServices({
  data = BANKING_SOFTWARE_SERVICES_DATA,
  className = "",
  id = "banking-software-services",
}: BankingSoftwareServicesProps) {
  const [activeId, setActiveId] = useState<string>(
    data.services[0]?.id || "custom-software-development"
  );

  const activeService =
    data.services.find((s) => s.id === activeId) || data.services[0];

  return (
    <section
      id={id}
      aria-label={data.heading}
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden ${className}`}
    >
      <div className="container">
        {/* Centered Section Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="section-title-h2 text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-medium leading-[1.18] tracking-[-0.02em] text-[#061826]">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="section-p mt-4 text-[15px] sm:text-[16px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {data.subheading}
            </p>
          )}
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Interactive Services List */}
          <div
            role="tablist"
            aria-label="Banking and Financial Software Services"
            className="lg:col-span-6 flex flex-col border-t border-slate-200"
          >
            {data.services.map((service: BankingSoftwareServiceItem) => {
              const isActive = service.id === activeId;

              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className="group w-full py-5 sm:py-6 lg:py-7 flex items-center justify-between border-b border-slate-200 transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] select-none cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Number (01, 02, etc.) */}
                    <span
                      className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 w-8 sm:w-10 shrink-0 ${
                        isActive ? "text-[#0D9488]" : "text-[#061826]"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Service Title with dynamic vertical blue accent bar on active state */}
                    <div
                      className={`pl-4 sm:pl-5 transition-all duration-300 border-l-2 ${
                        isActive
                          ? "border-[#0D9488]"
                          : "border-transparent"
                      }`}
                    >
                      <span
                        className={`block text-[17px] sm:text-[19px] lg:text-[20px] transition-colors duration-300 leading-snug ${
                          isActive
                            ? "font-semibold text-[#0D9488]"
                            : "font-medium text-[#061826] group-hover:text-[#0D9488]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {/* Right Circle Arrow Button */}
                  <div
                    aria-hidden="true"
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                      isActive
                        ? "bg-[#1E194A] text-white shadow-md scale-105"
                        : "bg-white border border-slate-200 text-slate-700 group-hover:border-[#0D9488] group-hover:text-[#0D9488]"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Preview Card */}
          <div className="lg:col-span-6">
            <div
              id={`panel-${activeService.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeService.id}`}
              className="relative w-full rounded-[24px] sm:rounded-[32px] p-6 sm:p-9 md:p-10 lg:p-11 overflow-hidden shadow-[0_20px_50px_rgba(20,25,70,0.22)] flex flex-col justify-between min-h-[460px] sm:min-h-[500px] transition-all duration-500"
              style={{
                background:
                  "linear-gradient(135deg, #1C1548 0%, #171E56 35%, #183C85 75%, #1D50A6 100%)",
              }}
            >
              {/* Soft Ambient Radial Lighting */}
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#38BDF8]/15 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2563EB]/20 blur-3xl pointer-events-none"
              />

              {/* Top Vector Illustration Container */}
              <div className="relative z-10 w-full flex items-center justify-center py-4 sm:py-6">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[190px] sm:h-[220px]">
                  {data.services.map((service: BankingSoftwareServiceItem) => {
                    const isCardActive = service.id === activeId;
                    return (
                      <div
                        key={service.id}
                        aria-hidden={!isCardActive}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                          isCardActive
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={380}
                          height={220}
                          className="w-full h-auto max-h-[220px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
                          priority
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Content: Title, Divider, and Description */}
              <div className="relative z-10 mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-white tracking-tight leading-tight">
                  {activeService.title}
                </h3>

                {/* Subtle Divider Rule */}
                <div className="my-3.5 sm:my-4 h-px w-full bg-white/20" />

                <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] text-white/85 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
