"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HOMEPAGE_ENGINEERING_PARTNER_DATA,
  type EngineeringPartnerData,
} from "@/data/HomePage";
import { ASSETS } from "@/constants/images.constants";
import RollingText from "@/components/Atoms/RollingText";

export interface EngineeringPartnerProps {
  data?: EngineeringPartnerData;
}

export default function EngineeringPartner({
  data = HOMEPAGE_ENGINEERING_PARTNER_DATA,
}: EngineeringPartnerProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const container = textContainerRef.current;
    if (!container || !sectionRef.current) return;

    const words = container.querySelectorAll<HTMLSpanElement>(".scroll-word");
    if (!words || words.length === 0) return;

    const ctx = gsap.context(() => {
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
            trigger: container,
            start: "top 68%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Engineering Partner"
      className="sec_padding relative w-full bg-white text-slate-900 overflow-hidden"
    >
      <div className="container">
        <h2
          className="section-title-h2 mb-8 sm:mb-10 lg:mb-12"
          dangerouslySetInnerHTML={{
            __html: data.heading,
          }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="flex flex-col">
            {ASSETS?.PARTNER_ENGINEER && (
              <div className="relative w-full h-[300px] sm:h-[450px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm bg-slate-100">
                {" "}
                <Image
                  src={ASSETS.PARTNER_ENGINEER}
                  alt="Not another vendor. An engineering partner."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-end">
            <div ref={textContainerRef} className="space-y-6 sm:space-y-5">
              {data.paragraphs.map((paragraph, pIdx) => {
                const words = paragraph.split(" ");
                return (
                  <p
                    key={pIdx}
                    className="section-p-lg text-[17px]! leading-[1.6] font-normal tracking-[-0.01em]"
                  >
                    {words.map((word, wIdx) => (
                      <span
                        key={`${pIdx}-${wIdx}`}
                        className="scroll-word inline-block mr-[0.28em] text-[#cbd5e1] opacity-35 will-change-[color,opacity]"
                      >
                        {word}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>

            {data?.cta?.href && data?.cta?.label && (
              <div className="mt-8 sm:mt-10 lg:mt-6">
                <Link
                  href={data.cta.href}
                  className="group inline-flex items-center justify-center rounded-full border border-[#061826]/30 px-6 py-3 text-[15px] font-medium text-[#061826] transition-all duration-300 hover:border-[#061826] hover:bg-[#061826] hover:text-white active:scale-95 select-none"
                >
                  <RollingText text={data.cta.label} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
