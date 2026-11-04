import React from "react";
import Image from "next/image";
import Link from "next/link";
import RollingText from "@/components/Atoms/RollingText";
import { ASSETS } from "@/constants/images.constants";
import { SERVICE_INTRO_DATA } from "@/data/serviceIntro";
import type { ServiceIntroData } from "@/data/serviceIntro";


export interface IntroContentSectionProps {
  data?: ServiceIntroData;
}

export default function IntroContentSection({
  data = SERVICE_INTRO_DATA,
}: IntroContentSectionProps) {
  return (
    <section
      aria-label="Technology That Solves Real Business Challenges"
      className="sec_padding relative bg-white overflow-hidden"
    >
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Heading, Paragraphs, and CTA */}
          <div className="flex flex-col items-start justify-center">
            {/* Section Heading */}

            {typeof data.heading === "string" ? (
              <h2
                className="section-title-h2 font-normal leading-[1.18] tracking-[-0.02em] text-[#061826] mb-6 sm:mb-8"
                dangerouslySetInnerHTML={{ __html: data.heading }}
              />
            ) : data.heading?.line1 ? (
              <h2 className="section-title-h2 font-normal leading-[1.18] tracking-[-0.02em] text-[#061826] mb-6 sm:mb-8">
                {data.heading.line1}
                <span className="block mt-1 sm:mt-1.5 text-[#061826]">
                  {data?.heading?.line2}
                </span>
              </h2>
            ) : null}

            {/* Paragraphs */}
            <div className="space-y-5 sm:space-y-6 text-[#555] text-base sm:text-[17px] leading-[1.68] font-normal">
              {data.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Explore Our Services CTA Button */}
            {data?.cta?.href && data?.cta?.label && (
              <div className="mt-8 sm:mt-10 lg:mt-8">
                <Link
                  href={data.cta.href}
                  className="group inline-flex items-center justify-center rounded-full border border-[#061826]/30 px-6 py-3 text-[15px] font-medium text-[#061826] transition-all duration-300 hover:border-[#061826] hover:bg-[#061826] hover:text-white active:scale-95 select-none"
                >
                  <RollingText text={data.cta.label} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Editorial Service Image */}
          {ASSETS?.SERVICE_IMAGE && (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.38/1] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm bg-slate-100">
              <Image
                src={data.image || ASSETS.SERVICE_IMAGE}
                alt={
                  typeof data?.heading === "string"
                    ? data.heading.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
                    : `${data?.heading?.line1 || ""} ${data?.heading?.line2 || ""}`.trim()
                }
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
