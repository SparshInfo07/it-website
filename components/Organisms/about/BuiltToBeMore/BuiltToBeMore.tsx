"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_OVERVIEW_DATA, type AboutOverviewData } from "@/data/about";
import VerticalTicker from "@/components/Atoms/VerticalTicker";

export interface BuiltToBeMoreProps {
  data?: AboutOverviewData;
}

export default function BuiltToBeMore({
  data = ABOUT_OVERVIEW_DATA,
}: BuiltToBeMoreProps = {}) {
  const [countersActive, setCountersActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const imageCard = imageCardRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const statsContainer = statsContainerRef.current;

    if (!section || !paragraph || !statsContainer) return;

    // Split words inside paragraph for word-by-word scrub reveal
    const words = paragraph.querySelectorAll<HTMLSpanElement>(".scroll-word");

    const ctx = gsap.context(() => {
      // 1. Entrance animation for the image card
      if (imageCard) {
        gsap.from(imageCard, {
          opacity: 0,
          y: 35,
          scale: 0.96,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageCard,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 2. Entrance animation for heading
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 3. Word-by-word on-scroll text reveal scrub animation (identical to homepage EngineeringPartner)
      if (words.length > 0) {
        gsap.fromTo(
          words,
          {
            color: "#cbd5e1",
            opacity: 0.35,
          },
          {
            color: "#061826",
            opacity: 1,
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 82%",
              end: "bottom 55%",
              scrub: 0.5,
            },
          },
        );
      }

      // 4. Trigger vertical scrolling number counters when scrolled into view
      ScrollTrigger.create({
        trigger: statsContainer,
        start: "top 85%",
        onEnter: () => setCountersActive(true),
        onLeaveBack: () => setCountersActive(false),
      });
    }, sectionRef);

    // Refresh ScrollTrigger once everything is mounted and calculated
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  // Split description text into words for on-scroll reveal
  const words = data.paragraph.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about-intro"
      aria-label="Built to be more than a technology vendor"
      className="sec_padding relative w-full bg-white text-slate-900 overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="flex flex-col w-full">
            <div
              ref={imageCardRef}
              className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm bg-slate-100 will-change-transform"
            >
              {data?.image?.src && (
                <Image
                  src={data.image.src}
                  alt={data?.image?.alt || ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out select-none"
                  priority
                  onLoad={() => ScrollTrigger.refresh()}
                />
              )}
            </div>
          </div>

          {/* Right Column: Heading & On-Scroll Text Reveal */}
          <div className="flex flex-col justify-center">
            {/* Section Heading */}
            <h2
              ref={headingRef}
              className="section-title-h2"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />
            {data.subheading && (
              <h3
                ref={headingRef}
                className="title-h3 mt-3"
                dangerouslySetInnerHTML={{ __html: data.subheading }}
              />
            )}

            {/* GSAP On-Scroll Text Reveal Paragraph */}
            <div className="mt-6 sm:mt-8">
              <p ref={paragraphRef} className="text-[17px] ">
                {words.map((word, wIdx) => (
                  <span
                    key={wIdx}
                    className="scroll-word inline-block mr-[0.28em] text-[#cbd5e1] opacity-35 will-change-[color,opacity]"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Vertical Rolling Number Counters */}
        <div
          ref={statsContainerRef}
          className="mt-16 sm:mt-20 lg:mt-24 pt-4 sm:pt-6 border-t border-transparent"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-start justify-items-center">
            {data.stats.map((stat, idx) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center w-full max-w-[260px]"
              >
                {/* Vertical Scrolling Ticker Number / Value */}
                <div className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] xl:text-[54px] font-medium leading-[1.25] tracking-tight text-[#1E70BF]">
                  <VerticalTicker
                    value={stat.rawValue}
                    numericValue={stat.targetNumber}
                    suffix={stat.suffix}
                    isNumeric={stat.isNumeric}
                    isActive={countersActive}
                    delay={idx * 0.1}
                    colorClass="text-[#1E70BF]"
                  />
                </div>

                {/* Subtext Label */}
                <p className="mt-2.5 sm:mt-3 lg:text-[16px] font-normal leading-snug text-[#71717a]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
