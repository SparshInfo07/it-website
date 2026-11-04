"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import { HOME_BANNER_DATA, type HomeBannerData } from "@/data/HomePage";
import { ASSETS } from "@/constants/images.constants";
import Button from "@/components/Atoms/Button";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export interface HomeBannerProps {
  data?: HomeBannerData;
}

export default function HomeBanner({
  data = HOME_BANNER_DATA,
}: HomeBannerProps = {}) {
  return (
    <section
      aria-label="Homepage Banner"
      className="relative w-full min-h-dvh flex flex-col justify-between items-center overflow-hidden pt-28 pb-8 sm:pt-20 sm:pb-10"
    >
      {ASSETS?.HERO_BANNER_VIDEO && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <ReactPlayer
            src={ASSETS.HERO_BANNER_VIDEO}
            playing
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-52 bg-linear-to-t from-white/100 via-white/50 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="relative z-10 min-h-[90vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center my-auto pt-6 sm:pt-10 pb-8 sm:pb-12">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="tag text-sm sm:text-[16px] font-bold tracking-[0.45em] text-white uppercase mb-4 sm:mb-5">
            {data.eyebrow}
          </p>

          <h1
            className="section-h1 font-medium tracking-tight text-white mb-5 sm:mb-6 leading-[1.15]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          <p
            className="text-base sm:text-lg text-white font-normal leading-[1.6] mb-8 sm:mb-9 max-w-4xl"
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
          />

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Button
              variant="primary"
              href={data.primaryCta.href}
              className="border-0 shadow-none"
              icon={
                <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
              }
            >
              {data.primaryCta.label}
            </Button>

            <Button
              variant="secondary"
              href={data.secondaryCta.href}
              className="border shadow-none"
            >
              {data.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
