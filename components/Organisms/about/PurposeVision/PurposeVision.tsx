"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PURPOSE_VISION_DATA, type PurposeVisionData } from "@/data/about";

const AUTO_TIMER_DURATION = 6000; // 6 seconds per tab

export interface PurposeVisionProps {
  data?: PurposeVisionData;
}

export default function PurposeVision({ data = PURPOSE_VISION_DATA }: PurposeVisionProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedProgressRef = useRef<number>(0);

  const items = data.items;

  // Handle switching to next slide
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setProgress(0);
    pausedProgressRef.current = 0;
    startTimeRef.current = null;
  }, [items.length]);

  // Click on a specific item
  const handleItemClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgress(0);
    pausedProgressRef.current = 0;
    startTimeRef.current = null;
  };

  // Auto-timer loop with requestAnimationFrame for 60/120fps fluid progress bar
  useEffect(() => {
    if (isPaused) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const step = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - (pausedProgressRef.current / 100) * AUTO_TIMER_DURATION;
      }

      const elapsed = timestamp - startTimeRef.current;
      const currentProgress = Math.min((elapsed / AUTO_TIMER_DURATION) * 100, 100);

      setProgress(currentProgress);
      pausedProgressRef.current = currentProgress;

      if (currentProgress >= 100) {
        handleNext();
      } else {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeIndex, isPaused, handleNext]);

  // Entrance scroll animations via GSAP ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const header = headerRef.current;
    const content = contentRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (header) {
        gsap.from(header.children, {
          opacity: 0,
          y: 25,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (content) {
        gsap.from(content, {
          opacity: 0,
          y: 35,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content,
            start: "top 82%",
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
      id="purpose-vision"
      aria-label="Built With Purpose. Guided by Vision."
      className="sec_padding relative w-full bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div ref={headerRef} className="max-w-3xl mb-15 text-left">
          <h2 className="section-title-h2 text-[#061826]">
            {data.heading}
          </h2>
          <p className="mt-3 sm:mt-4 text-[16px]  text-[#71717a] leading-[1.6] font-normal max-w-2xl">
            {data.subheading}
          </p>
        </div>

        {/* 2-Column Main Content: Left Accordion with Timer, Right Transitioning Image */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            startTimeRef.current = null;
            setIsPaused(false);
          }}
        >
          {/* Left Column: Expanding & Collapsing Accordion Tabs */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="flex flex-col group cursor-pointer select-none"
                  onClick={() => handleItemClick(index)}
                >
                  {/* Tab Title Button */}
                  <button
                    type="button"
                    aria-expanded={isActive}
                    className="flex items-center justify-between w-full py-4 sm:py-5 text-left focus:outline-none transition-colors duration-300"
                  >
                    <span
                      className={`text-xl sm:text-2xl md:text-[24px] tracking-[-0.01em] transition-colors duration-300 ${
                        isActive
                          ? "font-medium text-[#061826]"
                          : "font-normal text-[#94A3B8] group-hover:text-[#64748B]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {/* Expanding & Collapsing Content via CSS Grid Row Animation */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Description Paragraph */}
                      <p className="text-[16px]  leading-[1.65] font-normal text-[#5A556B] pb-5 sm:pb-6 pr-2 sm:pr-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider Line & Animated Progress Bar */}
                  <div className="relative w-full h-[2px] bg-[#E2E8F0] overflow-hidden rounded-full mb-2">
                    {/* Active Auto Timer Progress Fill */}
                    {isActive ? (
                      <div
                        className="h-full bg-[#1E70BF] rounded-full will-change-[width]"
                        style={{
                          width: `${progress}%`,
                          transition: isPaused ? "none" : "width 0.05s linear",
                        }}
                      />
                    ) : (
                      <div className="h-full w-0 bg-[#1E70BF]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Respective Image Display with Smooth Cross-Fade */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[16/9] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm bg-slate-900/5">
              {items.map((item, index) => {
                const isSelected = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isSelected
                        ? "opacity-100 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 scale-98 z-0 pointer-events-none"
                    }`}
                  >
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt={item?.imageAlt || item?.title || ""}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out select-none"
                        priority={index === 0}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
