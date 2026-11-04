"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OUR_VALUES_DATA, type OurValuesData } from "@/data/about";

export interface OurValuesProps {
  data?: OurValuesData;
}

export default function OurValues({ data = OUR_VALUES_DATA }: OurValuesProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const valuesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const imageCard = imageCardRef.current;
    const textContent = textContentRef.current;
    const valuesList = valuesListRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation for the server room image
      if (imageCard) {
        gsap.from(imageCard, {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageCard,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 2. Entrance animation for the header
      if (textContent) {
        gsap.from(textContent.children, {
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContent,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 3. Staggered entrance for the 4 values items
      if (valuesList) {
        gsap.from(valuesList.children, {
          opacity: 0,
          y: 24,
          stagger: 0.12,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesList,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-values"
      aria-label="Our Values"
      className="sec_padding relative w-full bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Data Center Neon Server Room Photo */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div
              ref={imageCardRef}
              className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-w-[520px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm bg-slate-950 will-change-transform"
            >
              {data?.image?.src && (
                <Image
                  src={data.image.src}
                  alt={data?.image?.alt || ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out select-none"
                  priority
                  onLoad={() => ScrollTrigger.refresh()}
                />
              )}
            </div>
          </div>

          {/* Right Column: Heading, Subtitle & 4 Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Content */}
            <div ref={textContentRef} className="max-w-2xl">
              <h2 className="section-title-h2  text-[#061826]">
                {data.heading}
              </h2>
              <p className="mt-3 sm:mt-4 text-[16px]  text-[#71717a] leading-[1.6] font-normal">
                {data.subheading}
              </p>
            </div>

            {/* Values List (01 through 04) */}
            <div
              ref={valuesListRef}
              className="mt-8 space-y-6 sm:space-y-7 lg:space-y-8"
            >
              {data.values.map((item) => (
                <div key={item.id} className="flex flex-col group select-none">
                  <h3 className="text-lg sm:text-[19px] lg:text-[20px] font-semibold text-[#061826] tracking-[-0.01em] transition-colors duration-200">
                    <span className="text-[#061826] font-semibold">
                      {item.number} {item.title}
                    </span>
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[15px] leading-[1.6] text-[#71717a] font-normal max-w-xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
