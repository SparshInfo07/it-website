"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LEADERSHIP_TEAM_DATA, type LeadershipTeamData } from "@/data/about";

export interface LeadershipTeamProps {
  data?: LeadershipTeamData;
}

export default function LeadershipTeam({ data = LEADERSHIP_TEAM_DATA }: LeadershipTeamProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation for the header
      if (header) {
        gsap.from(header.children, {
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 2. Staggered entrance for the 3 team member cards
      if (grid) {
        gsap.from(grid.children, {
          opacity: 0,
          y: 35,
          stagger: 0.15,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
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
      id="leadership-team"
      aria-label="Experts Who Move Ideas Forward"
      className="sec_padding relative w-full bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered Heading & Subtitle */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-15">
          <h2 className="section-title-h2  text-[#061826]">
            {data.heading}
          </h2>
          <p className="mt-3 sm:mt-4 text-[16px] text-[#71717a] leading-[1.6] font-normal max-w-3xl mx-auto">
            {data.subheading}
          </p>
        </div>

        {/* 3-Column Leadership Team Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center"
        >
          {data.members.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col items-center w-full max-w-[380px] transition-transform duration-500 hover:-translate-y-1.5 select-none"
            >
              {/* Member Photo Card with Rounded Corners & Hover Scale */}
              {member?.image && (
                <div className="relative w-full aspect-[1/1] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm bg-slate-100 will-change-transform">
                  <Image
                    src={member.image}
                    alt={member?.imageAlt || member?.name || ""}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    onLoad={() => ScrollTrigger.refresh()}
                  />
                </div>
              )}

              {/* Member Details Centered Below Photo */}
              <div className="text-center mt-5 sm:mt-6">
                <h3 className="text-xl sm:text-[22px] font-semibold text-[#061826] tracking-[-0.01em] transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="mt-1 sm:mt-1.5 sm:text-[16px] text-[#71717a] font-normal">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
