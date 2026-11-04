"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHY_CHOOSE_DATA, type WhyBusinessesChooseData, type WhyChooseItem } from "@/data/about";

export interface WhyBusinessesChooseProps {
  data?: WhyBusinessesChooseData;
  className?: string;
  id?: string;
}

export default function WhyBusinessesChoose({
  data = WHY_CHOOSE_DATA,
  className = "",
  id = "why-choose-sparsh-it",
}: WhyBusinessesChooseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const carousel = carouselRef.current;
    const track = trackRef.current;

    if (!section || !carousel || !track) return;

    // Dynamically calculate left offset so track starts aligned with standard max-w-7xl container margin
    const updateOffset = () => {
      const isMobile = window.innerWidth < 768;
      const containerLeft = isMobile
        ? 16
        : Math.max(20, (window.innerWidth - 1280) / 2 + 24);
      if (track) {
        track.style.paddingLeft = `${containerLeft}px`;
        track.style.paddingRight = `${containerLeft + (isMobile ? 40 : 80)}px`;
      }
      return containerLeft;
    };

    updateOffset();
    ScrollTrigger.addEventListener("refreshInit", updateOffset);

    const mm = gsap.matchMedia();

    // Horizontal pinned scrub on desktop & tablets (>= 768px)
    mm.add("(min-width: 768px)", () => {
      const getScrollAmount = () => {
        if (!track) return 0;
        return Math.max(0, track.scrollWidth - window.innerWidth + 80);
      };

      const getPinDistance = () => {
        const scrollAmount = getScrollAmount();
        return Math.max(scrollAmount * 1.6, 2000);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: carousel,
          start: "center center",
          end: () => `+=${getPinDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 1. Smooth horizontal scrub across all cards (first 75% of pinned distance)
      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        duration: 0.75,
      });

      // 2. Comfortable resting phase before unpinning (remaining 25%)
      tl.to({}, { duration: 0.25 });
    });

    // Horizontal pinned scrub on mobile (< 768px)
    mm.add("(max-width: 767px)", () => {
      const getScrollAmount = () => {
        if (!track) return 0;
        return Math.max(0, track.scrollWidth - window.innerWidth + 32);
      };

      const getPinDistance = () => {
        const scrollAmount = getScrollAmount();
        return Math.max(scrollAmount * 1.4, 1300);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: carousel,
          start: "center center",
          end: () => `+=${getPinDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 1. Smooth horizontal scrub across all cards
      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        duration: 0.8,
      });

      // 2. Resting buffer before unpinning
      tl.to({}, { duration: 0.2 });
    });

    const handleResize = () => {
      updateOffset();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      updateOffset();
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      ScrollTrigger.removeEventListener("refreshInit", updateOffset);
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-label={data.heading.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()}
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden z-10 ${className}`}
    >
      {/* Centered Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-14 px-4 sm:px-6">

        <h2
          className="section-title-h2 text-[#061826]"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        {data.description ? (
          <p
            className="section-p text-[16px]  leading-[1.62] text-[#555068] mt-4 sm:mt-5 mx-auto font-normal"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        ) : data.subheading ? (
          <p
            className="section-p text-[16px]  leading-[1.62] text-[#555068] mt-4 sm:mt-5  mx-auto font-normal"
            dangerouslySetInnerHTML={{ __html: data.subheading }}
          />
        ) : null}
      </div>

      {/* Horizontal Carousel Area with Pinned Scroll */}
      <div ref={carouselRef} className="relative w-full overflow-hidden cursor-default">
        <div
          ref={trackRef}
          style={{
            paddingLeft: "max(1rem, calc((100vw - 1280px) / 2 + 1.5rem))",
            paddingRight: "max(1.5rem, calc((100vw - 1280px) / 2 + 5rem))",
          }}
          className="flex items-stretch gap-5 sm:gap-7 lg:gap-8 w-max will-change-transform"
        >
          {data.cards.map((card: WhyChooseItem, index: number) => {
            const isLast = index === data.cards.length - 1;

            return (
              <div
                key={card.id}
                className="flex flex-col w-[290px] sm:w-[350px] md:w-[380px] lg:w-[400px] shrink-0"
              >

                <div className="relative flex items-center gap-3.5 mb-7 sm:mb-8 w-full">
                  {card.number && (
                    <span className="text-[15px] sm:text-[16px] font-medium text-slate-500 tracking-tight select-none shrink-0">
                      {card.number}
                    </span>
                  )}
                  <div
                    className={`h-[1px] bg-slate-200/90 grow ${isLast
                      ? "w-48 sm:w-64"
                      : "-mr-6 sm:-mr-7 lg:-mr-8"
                      }`}
                  />
                </div>

                {/* Good Software Card Style Container */}
                <div className="good-software-card group relative flex flex-col justify-between h-full min-h-[340px] sm:min-h-[360px] rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-7 md:p-8 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-transparent transition-all duration-500 ease-out select-none cursor-pointer overflow-hidden">
                  {/* Exact Signature Hover Gradient: linear-gradient(180deg, #061826 0%, #0D9488 55%, #06B6D4 100%) */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-[inherit]"
                    style={{
                      background:
                        "linear-gradient(180deg, #061826 0%, #0D9488 55%, #06B6D4 100%)",
                    }}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Icon with automatic white inversion on card hover */}
                    <div className="w-12 h-12 flex items-center justify-start mb-6">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={36}
                          height={36}
                          className="w-auto h-auto max-w-10 max-h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    </div>

                    {/* Card Title & Subtitle */}
                    <div className="min-h-[52px] sm:min-h-[58px] flex flex-col justify-start">
                      <h3 className="title-h3 text-[17px] sm:text-[18.5px] font-bold leading-[1.24] tracking-[-0.01em] text-[#061826] group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-[13px] sm:text-[13.5px] font-medium leading-snug text-[#0D9488] group-hover:text-cyan-200 transition-colors duration-300 mt-1">
                          {card.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Subtle Divider Line */}
                    <div className="my-3.5 sm:my-4 h-px w-full bg-slate-200/90 group-hover:bg-white/20 transition-colors duration-300" />

                    {/* Card Description */}
                    <p className="section-p text-[16px] leading-[1.6] text-slate-500 group-hover:text-white/95 transition-colors duration-300">
                      {card.description}
                    </p>
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
