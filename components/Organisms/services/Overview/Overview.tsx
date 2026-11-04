import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  SERVICE_OVERVIEW_DATA,
  type ServiceOverviewData,
} from "@/data/serviceOverview";

const GRID_COLS_MAP: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
};

export interface OverviewProps {
  data?: ServiceOverviewData;
  id?: string;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | number;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | number;
  gridCols?: 1 | 2 | 3 | 4 | 5 | 6 | number;
}

export default function Overview({
  data = SERVICE_OVERVIEW_DATA,
  id = "services",
  className = "",
  columns = 3,
  cols,
  gridCols,
}: OverviewProps) {
  const activeCols = cols ?? gridCols ?? columns ?? 3;
  const gridColsClass =
    GRID_COLS_MAP[activeCols] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id={id}
      aria-label={data?.title || "Explore Our Services"}
      className={`relative sec_padding bg-white overflow-hidden ${className}`}
    >
      <div className="container w-full mx-auto">
        {/* Section Heading */}
        {(data?.title || data?.subtitle || data?.description) && (
          <div className="text-center mb-10 sm:mb-14 lg:mb-16 max-w-4xl mx-auto">
            {data?.title && (
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-medium tracking-tight text-[#061826]">
                {data.title}
              </h2>
            )}
            {(data?.subtitle || data?.description) && (
              <p className="mt-4 sm:mt-5 text-base sm:text-[17px] text-[#555] max-w-3xl mx-auto leading-[1.68]">
                {data.subtitle || data.description}
              </p>
            )}
          </div>
        )}

        {/* Services Cards Grid */}
        <div className={`grid ${gridColsClass} gap-5`}>
          {data?.services?.map((service) => {
            const cardContent = (
              <>
                {/* Graphic Banner - 2:1 Aspect Ratio matching Figma (443x221) */}
                {service?.image && (
                  <div className="relative w-full aspect-[2/1] overflow-hidden bg-slate-50">
                    <Image
                      src={service.image}
                      alt={service?.title || ""}
                      fill
                      sizes={
                        activeCols >= 4
                          ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      }
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {service?.title && (
                      <h3 className="text-xl sm:text-[20px] font-semibold text-[#061826] tracking-tight transition-colors duration-200 group-hover:text-blue-600 leading-snug">
                        {service.title}
                      </h3>
                    )}

                    {service?.subtitle && (
                      <p className="mt-2 text-sm sm:text-sm font-medium text-black leading-snug">
                        {service.subtitle}
                      </p>
                    )}

                    {service?.description && (
                      <p className="mt-3 text-base text-[#555] leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>

                  {service?.href && service.href !== "#" && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-medium text-[#061826] group-hover:text-blue-600 transition-colors">
                      <span>Explore Capability</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </>
            );

            const cardClassName =
              "group flex flex-col h-full bg-white rounded-[20px] border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50";

            return service?.href && service.href !== "#" ? (
              <Link
                key={service.id}
                href={service.href}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={service.id}
                className={cardClassName}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
