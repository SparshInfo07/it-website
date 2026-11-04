"use client";

import Image from "next/image";
import { GoodSoftwareCardItem } from "@/data/goodSoftware";

interface GoodSoftwareCardProps {
  card: GoodSoftwareCardItem;
  className?: string;
  invertOnHover?: boolean;
}

export default function GoodSoftwareCard({
  card,
  className = "",
  invertOnHover = true,
}: GoodSoftwareCardProps) {
  return (
    <div
      className={`good-software-card group relative flex flex-col justify-between h-full rounded-[16px] sm:rounded-[20px] bg-white p-4 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:border-transparent transition-all duration-500 ease-out select-none cursor-pointer overflow-hidden ${className}`}
    >
      {/* Signature Hover Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-[inherit]"
        style={{
          background:
            "linear-gradient(180deg, #061826 0%, #0D9488 55%, #06B6D4 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Top Icon */}
        <div className="w-12 h-12 flex items-center justify-start mb-4 sm:mb-6">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {card?.icon && (
              <div className="relative w-14 h-14 flex items-center justify-start select-none">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="w-14 h-14 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {card.category && (
          <span className="block text-[13px] font-bold text-[#061826]/70 group-hover:text-white/85 transition-colors duration-300 mb-3 sm:mb-4">
            {card.category || ""}
          </span>
        )}

        <div className="min-h-[52px] sm:min-h-[56px] flex items-start">
          <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#061826] group-hover:text-white transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: card.title }}>
          </h3>
        </div>

        <div className="my-4 sm:my-5 h-px w-full bg-slate-200/90 group-hover:bg-white/20 transition-colors duration-300" />

        {/* Card Description */}
        {Boolean(card.description && /\r?\n\r?\n/.test(card.description)) ? (
          (() => {
            const [subheading, ...rest] = card.description.split(/\r?\n\r?\n/);
            const body = rest.join("\n\n");
            return (
              <div className="flex flex-col gap-2">
                <h4 className="text-[14.5px] sm:text-[15.5px] font-bold leading-snug tracking-[-0.01em] text-[#061826] group-hover:text-white transition-colors duration-300">
                  {subheading}
                </h4>
                {body && (
                  <p className="text-[14px] sm:text-sm leading-[1.62] text-slate-600 group-hover:text-white/95 transition-colors duration-300 whitespace-pre-line">
                    {body}
                  </p>
                )}
              </div>
            );
          })()
        ) : (
          <p className="text-base leading-[1.62] text-black/80 group-hover:text-white/95 transition-colors duration-300">
            {card.description}
          </p>
        )}
      </div>
    </div>
  );
}
