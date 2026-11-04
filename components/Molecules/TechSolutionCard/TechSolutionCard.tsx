"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TechSolutionCardItem } from "@/data/techSolutions";

export interface TechSolutionCardProps {
  card: TechSolutionCardItem;
  className?: string;
}

export default function TechSolutionCard({
  card,
  className = "",
}: TechSolutionCardProps) {
  const safeImageSrc = card?.image
    ? card.image
      .split("/")
      .map((segment) => (segment ? encodeURIComponent(segment) : ""))
      .join("/")
    : "";

  const content = (
    <>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-[inherit]"
        style={{
          background:
            "linear-gradient(180deg, #061826 0%, #0D9488 55%, #06B6D4 100%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 pr-10">
            {card?.title && (
              <h3
                className="title-h3 text-[18px] sm:text-[20px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#061826] group-hover:text-white! transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
            )}

            {card?.description && (
              <p className="card-desc section-p text-[14px] sm:text-[15px] leading-relaxed mt-2.5 text-[#7b7b7b] group-hover:text-white! transition-colors duration-300">
                {card.description}
              </p>
            )}
          </div>
          <div className="shrink-0 flex absolute top-0 right-0 items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-50 border border-slate-200 text-[#061826] group-hover:bg-white group-hover:border-transparent group-hover:text-[#061826] group-hover:shadow-md transition-all duration-300">
            <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out transform group-hover:-rotate-45" />
          </div>
        </div>
      </div>

      {safeImageSrc && (
        <div className="relative z-10 w-full h-64 sm:h-70 rounded-t-[20px] sm:rounded-t-[22px] overflow-hidden mt-6">
          <Image
            src={safeImageSrc}
            alt={card?.title || ""}
            width={480}
            height={400}
            className="object-cover object-center h-full w-full transform transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-500 pointer-events-none" />
        </div>
      )}
    </>
  );

  const containerClassName = `tech-card group relative flex flex-col justify-between w-full h-full min-h-[420px] px-5 sm:px-6 pt-6 rounded-[24px] bg-white text-slate-900 border border-slate-200/90 hover:-translate-y-2 hover:border-transparent transition-all duration-500 ease-out select-none cursor-pointer overflow-hidden ${className}`;

  if (card?.href) {
    return (
      <Link href={card.href} className={containerClassName}>
        {content}
      </Link>
    );
  }

  return <div className={containerClassName}>{content}</div>;
}
