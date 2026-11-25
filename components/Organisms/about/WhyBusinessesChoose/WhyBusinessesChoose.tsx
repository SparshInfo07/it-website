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
        track.style.paddingRight = `${isMobile ? containerLeft : containerLeft + 80}px`;
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

    // Phones (< 768px): the cards stack instead of sliding sideways. Each card sticks below the
    // navbar, slides up on its way in, and the one underneath eases back and dims as the next covers it.
    mm.add("(max-width: 767px)", () => {
      const items = Array.from(track.children) as HTMLElement[];
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 92%", once: true },
          }
        );
        const next = items[i + 1];
        if (next) {
          gsap.fromTo(
            item,
            { scale: 1, "--stack-dim": 0 },
            {
              scale: 0.93,
              "--stack-dim": 0.18,
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: () => `top ${88 + (i + 1) * 12}px`,
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });
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
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden max-md:overflow-clip z-10 ${className}`}
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
      <div ref={carouselRef} className="relative w-full overflow-hidden max-md:overflow-visible cursor-default">
        <div
          ref={trackRef}
          style={{
            paddingLeft: "max(1rem, calc((100vw - 1280px) / 2 + 1.5rem))",
            paddingRight: "max(1.5rem, calc((100vw - 1280px) / 2 + 5rem))",
          }}
          className="flex flex-col md:flex-row items-stretch gap-4 md:gap-7 lg:gap-8 w-full md:w-max will-change-transform"
        >
          {data.cards.map((card: WhyChooseItem, index: number) => {
            const isLast = index === data.cards.length - 1;

            return (
              <div
                key={card.id}
                style={{ top: `${88 + index * 12}px`, transformOrigin: "50% 0" }}
                className="flex flex-col w-full md:w-[380px] lg:w-[400px] shrink-0 max-md:sticky"
              >

                <div className="relative hidden md:flex items-center gap-3.5 mb-7 sm:mb-8 w-full">
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
                <div className="good-software-card group relative flex flex-col justify-between h-full md:min-h-[360px] rounded-[22px] sm:rounded-[28px] bg-white p-6 sm:p-7 md:p-8 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-transparent transition-all duration-500 ease-out select-none cursor-pointer overflow-hidden">
                  {/* Exact Signature Hover Gradient: linear-gradient(180deg, #061826 0%, #0D9488 55%, #06B6D4 100%) */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-[inherit]"
                    style={{
                      background:
                        "linear-gradient(180deg, #061826 0%, #0D9488 55%, #06B6D4 100%)",
                    }}
                  />

                  {/* Phones: dims as the next card stacks over this one. */}
                  <div
                    aria-hidden="true"
                    className="md:hidden absolute inset-0 z-20 bg-[#061826] pointer-events-none rounded-[inherit]"
                    style={{ opacity: "var(--stack-dim, 0)" }}
                  />
                  {/* Phones: the step number moves into the card. */}
                  {card.number && (
                    <span className="md:hidden absolute top-6 right-6 z-10 text-[13px] font-semibold tracking-[0.08em] text-[#0D9488] bg-[#0D9488]/10 rounded-full px-2.5 py-1">
                      {card.number}
                    </span>
                  )}

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
