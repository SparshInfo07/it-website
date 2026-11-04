"use client";

import React, { forwardRef } from "react";
import Image from "next/image";

export interface TechBadgeProps {
  name: string;
  icon: string;
  size?: number; // Size in px
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const TechBadge = forwardRef<HTMLDivElement, TechBadgeProps>(
  ({ name, icon, size = 68, className = "", onHoverStart, onHoverEnd }, ref) => {
    return (
      <div
        ref={ref}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className={`group relative flex items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_28px_rgba(20,15,45,0.14)] cursor-pointer select-none ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow:
            "0 10px 25px -4px rgba(16, 12, 38, 0.08), 0 4px 10px -2px rgba(16, 12, 38, 0.04)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
        }}
        title={name}
        aria-label={name}
      >
        <div className="relative w-full h-full p-2.5 sm:p-3 flex items-center justify-center">
          <Image
            src={icon}
            alt={name}
            width={size}
            height={size}
            className="w-full h-full object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Clean floating tooltip on hover */}
        <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-30 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#061826] text-white text-[11px] font-medium tracking-wide shadow-lg">
          {name}
        </div>
      </div>
    );
  }
);

TechBadge.displayName = "TechBadge";

export default TechBadge;
