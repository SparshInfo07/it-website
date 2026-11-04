"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ClearApproachCardItem } from "@/data/clearApproach";

export interface ClearApproachCardProps {
  card: ClearApproachCardItem;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  className?: string;
  showCta?: boolean;
}

export default function ClearApproachCard({
  card,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  className = "",
  showCta = true,
}: ClearApproachCardProps) {
  const hasSubheading = Boolean(
    card?.subtitle || card?.description?.includes("\n\n")
  );
  const subheading =
    card?.subtitle ||
    (card?.description?.includes("\n\n")
      ? card.description.split("\n\n")[0]
      : "");
  const body = card?.description?.includes("\n\n")
    ? card.description.split("\n\n").slice(1).join("\n\n")
    : card?.subtitle
      ? card.description
      : card?.description;

  const content = (
    <>
      {/* Top Section: Title & Description */}
      <div>
        {card?.title && (
          <h3
            className={`text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300 ${isActive ? "text-[#061826]" : "text-white group-hover:text-[#061826]"
              }`}
          >
            {card.title}
          </h3>
        )}

        {card?.description && (
          hasSubheading ? (
            <div className="mt-3 sm:mt-3.5 space-y-2">
              <h4
                className={`text-[14.5px] sm:text-[15.5px] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 ${isActive
                  ? "text-[#061826]"
                  : "text-white group-hover:text-[#061826]"
                  }`}
              >
                {subheading}
              </h4>
              {body && (
                <p
                  className={`text-[14px] sm:text-[16px] leading-[1.6] font-normal transition-colors duration-300 ${isActive
                    ? "text-[#555068]"
                    : "text-white/80 group-hover:text-[#555068]"
                    }`}
                >
                  {body}
                </p>
              )}
            </div>
          ) : (
            <p
              className={`mt-3 sm:mt-3.5 text-[14px] sm:text-[16px] leading-[1.6] font-normal transition-colors duration-300 ${isActive
                ? "text-[#2e2d35]"
                : "text-white/80 group-hover:text-[#555068]"
                }`}
            >
              {card.description}
            </p>
          )
        )}
      </div>

     
    </>
  );

  const containerClassName = `group relative flex flex-col justify-between w-full h-full p-6 sm:p-7 lg:p-8 rounded-[14px] border transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white select-none ${isActive
    ? "bg-white border-white shadow-[0_16px_36px_rgba(0,0,0,0.14)] -translate-y-1"
    : "bg-white/[0.04] border-white/40 backdrop-blur-[2px] hover:bg-white hover:border-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1"
    } ${className}`;

  if (card?.href) {
    return (
      <Link
        href={card.href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={containerClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={containerClassName}
    >
      {content}
    </div>
  );
}
