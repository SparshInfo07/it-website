"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  HOMEPAGE_TECH_SOLUTIONS_DATA,
  type TechSolutionsData,
} from "@/data/HomePage";
import TechSolutionCard from "@/components/Molecules/TechSolutionCard";
import RollingText from "@/components/Atoms/RollingText";

export interface TechnologySolutionsProps {
  className?: string;
  data?: TechSolutionsData;
}

export default function TechnologySolutions({
  className,
  data = HOMEPAGE_TECH_SOLUTIONS_DATA,
}: TechnologySolutionsProps = {}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const headingHtml =
    typeof data.heading === "string"
      ? data.heading
      : `${data.heading.line1}${
          data.heading.line2 ? `<br />${data.heading.line2}` : ""
        }`;

  return (
    <section
      aria-label="Technology Solutions"
      className={`sec_padding relative z-10 w-full overflow-hidden bg-white ${
        className || ""
      }`.trim()}
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <h2
            className="section-title-h2 mb-4 sm:mb-5"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />

          {data.description && (
            <p className="text-base text-justify sm:text-left text-black/80 leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Swiper Carousel with Centered Navigation Controls */}
        <div className="relative group/carousel">
          {/* Left (<) Navigation Control - Centered on the cards */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous solutions"
            className="absolute left-1 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm text-[#061826] shadow-lg transition-all duration-200 hover:border-[#061826] hover:bg-[#061826] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right (>) Navigation Control - Centered on the cards */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Next solutions"
            className="absolute right-1 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm text-[#061826] shadow-lg transition-all duration-200 hover:border-[#061826] hover:bg-[#061826] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            grabCursor={true}
            speed={500}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                // iPad / Tablet: 2 slides
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                // Big Screen / Desktop: strictly 3 services at a time
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="!py-4 !px-1"
          >
            {data.cards.map((card) => (
              <SwiperSlide key={card.id} className="!h-auto flex">
                <TechSolutionCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Optional CTA */}
        {data.cta && (
          <div className="mt-8 flex justify-center px-4 sm:mt-10">
            <Link
              href={data.cta.href}
              className="group inline-flex select-none items-center justify-center rounded-full border border-[#061826]/30 px-7 py-3.5 text-[15px] font-medium text-[#061826] shadow-sm transition-all duration-300 hover:border-[#061826] hover:bg-[#061826] hover:text-white active:scale-95"
            >
              <RollingText text={data.cta.label} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
