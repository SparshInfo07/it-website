import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  INDUSTRY_LISTING_DATA,
  type IndustryListingData,
} from "@/data/Industry/IndustryMainPage/industryListing.data";

export interface IndustryListingSectionProps {
  data?: IndustryListingData;
  id?: string;
  className?: string;
}

export default function IndustryListingSection({
  data = INDUSTRY_LISTING_DATA,
  id = "industries",
  className = "",
}: IndustryListingSectionProps) {
  const industries = data?.industries || [];

  return (
    <section
      id={id}
      aria-label={data?.title || "Industries We Serve"}
      className={`sec_padding relative bg-[#FAFAFC] overflow-hidden ${className}`}
    >
      <div className="container w-full mx-auto">
        {/* Section Header */}
        {(data?.title || data?.subtitle) && (
          <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-4">
            {data?.title && (
              <h2 className="section-title-h2"
                dangerouslySetInnerHTML={{ __html: data.title }}>
              </h2>
            )}
            {data?.subtitle && (
              <p className="text-[#555] text-base leading-[1.65] mt-4 font-normal"
                dangerouslySetInnerHTML={{ __html: data.subtitle }} />
            )}
          </div>
        )}

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5 items-stretch">
          {industries.map((item) => {
            const cardContent = (
              <>
                {/* Visual Image Banner */}
                {item?.image && (
                  <div className="relative w-full h-[300px] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item?.alt || item?.title || ""}
                      height={450}
                      width={450}
                      className="object-cover object-center transition-transform duration-700 ease-out"
                    />
                  </div>
                )}

                {/* Card Text & Metadata */}
                <div className="p-4 flex flex-col grow justify-between bg-white">
                  <div>
                    {item?.tag && (
                      <span className="block text-[11px] sm:text-[12px] font-bold uppercase tracking-[1.5px] text-[#0D9488] mb-2.5">
                        {item.tag}
                      </span>
                    )}

                    {item?.title && (
                      <h3 className="text-xl sm:text-[22px] font-semibold text-[#061826] tracking-tight leading-[1.28] transition-colors duration-300 group-hover:text-[#0D9488]">
                        {item.title}
                      </h3>
                    )}

                    {item?.description && (
                      <p className="text-[14.5px] sm:text-[15px] text-black/80 leading-[1.62] mt-3 font-normal">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[14px] font-semibold text-[#061826] group-hover:text-[#0D9488] transition-colors duration-300">
                    <span>Explore Industry</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </>
            );

            const cardClasses =
              "group flex flex-col h-full rounded-[20px] bg-white border border-slate-200/90 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(39,114,184,0.18)] hover:border-[#0D9488]/40 hover:-translate-y-1.5 transition-all duration-500 ease-out select-none cursor-pointer";

            return item?.href ? (
              <Link key={item.id} href={item.href} className={cardClasses}>
                {cardContent}
              </Link>
            ) : (
              <div key={item.id} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

