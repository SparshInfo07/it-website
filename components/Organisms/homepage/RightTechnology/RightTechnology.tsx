"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HOMEPAGE_RIGHT_TECHNOLOGY_DATA,
  type RightTechnologyData,
} from "@/data/HomePage";
import { ASSETS } from "@/constants/images.constants";
import RollingText from "@/components/Atoms/RollingText";
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export interface RightTechnologyProps {
  data?: RightTechnologyData;
  className?: string;
}

export default function RightTechnology({
  data = HOMEPAGE_RIGHT_TECHNOLOGY_DATA,
  className = "",
}: RightTechnologyProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const graphicContainerRef = useRef<HTMLDivElement>(null);
  const graphicCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const textContent = textContentRef.current;
    const graphicCard = graphicCardRef.current;

    if (!section || !textContent || !graphicCard) return;

    const ctx = gsap.context(() => {
      // 1. Entrance scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(textContent.children, {
        opacity: 0,
        y: 28,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        graphicCard,
        {
          opacity: 0,
          scale: 0.92,
          y: 30,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // 2. Subtle ambient floating animation
      gsap.to(graphicCard, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle interactive 3D tilt on mouse hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = graphicCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (-y / (rect.height / 2)) * 6;
    const rotY = (x / (rect.width / 2)) * 6;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    const card = graphicCardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const videoSrc = data?.video?.src;

  return (
    <section
      id="right-technology-section"
      ref={sectionRef}
      aria-label="Right technology. Right where it matters."
      className={cn(
        "relative sec_padding pb-0! w-full bg-white overflow-hidden",
        className
      )}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Heading, Description, CTA */}
          <div ref={textContentRef} className="flex flex-col items-start max-w-xl">
            <h2 className="section-title-h2 text-3xl sm:text-4xl md:text-[46px] lg:text-[48px] font-medium leading-[1.16] tracking-[-0.02em] text-[#061826]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            ></h2>

            <p className="mt-6 sm:mt-7 text-base sm:text-[17px] lg:text-[18px] text-[#555068] leading-[1.65] font-normal tracking-[-0.01em] max-w-[495px]">
              {data.description}
            </p>

            {data?.cta?.href && data?.cta?.label && (
              <div className="mt-8 sm:mt-10">
                <Link
                  href={data.cta.href}
                  className="group inline-flex items-center justify-center rounded-full border border-[#443385]/55 px-7 py-3 text-[15px] font-medium text-[#2E2068] transition-all duration-300 hover:border-[#061826] hover:bg-[#061826] hover:text-white active:scale-95 select-none"
                >
                  <RollingText text={data.cta.label} />
                </Link>
              </div>
            )}
          </div>

          <div
            ref={graphicContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full flex items-center justify-center lg:justify-end py-4"
          >
            <div
              ref={graphicCardRef}
              className="relative w-full max-w-[560px] lg:max-w-[620px] aspect-square flex items-center justify-center will-change-transform"
            >
              {videoSrc ? (
                <ReactPlayer
                  src={videoSrc}
                  playing
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_16px_40px_rgba(30,16,60,0.08)]"
                />
              ) : data?.image?.src ? (
                <Image
                  src={data.image.src}
                  alt={data?.image?.alt || ""}
                  width={942}
                  height={942}
                  className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_16px_40px_rgba(30,16,60,0.08)]"
                  priority
                />
              ) : null}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
