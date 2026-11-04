"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import AccordionIcon from "@/components/Atoms/AccordionIcon";
import type { SolutionsAccordionItemData } from "@/data/solutionsAccordion";

export interface SolutionsAccordionItemProps {
  item: SolutionsAccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function SolutionsAccordionItem({
  item,
  isOpen,
  onToggle,
  className = "",
}: SolutionsAccordionItemProps) {
  const contentId = `solutions-accordion-content-${item.id}`;
  const headerId = `solutions-accordion-header-${item.id}`;
  const hasDescription = Boolean(item.description && item.description.trim());
  const effectiveOpen = hasDescription && isOpen;

  return (
    <div
      className={`rounded-[14px] sm:rounded-[16px] transition-all duration-300 ease-out select-none p-3.5 sm:p-4.5 ${
        effectiveOpen
          ? "bg-white border border-slate-200/90 shadow-[0_10px_28px_-8px_rgba(15,35,80,0.08)]"
          : "bg-[#F4F6F9] hover:bg-[#EAEFF7] border border-transparent"
      } ${className}`}
    >
      {/* Header Button */}
      <button
        id={headerId}
        type="button"
        onClick={hasDescription ? onToggle : undefined}
        aria-expanded={hasDescription ? isOpen : undefined}
        aria-controls={hasDescription ? contentId : undefined}
        disabled={!hasDescription}
        className={`w-full flex items-center justify-between text-left gap-3 focus:outline-none rounded-[10px] ${
          hasDescription
            ? "focus-visible:ring-2 focus-visible:ring-[#1E70BF] cursor-pointer"
            : "cursor-default"
        }`}
      >
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <AccordionIcon name={item.icon || item.id} />
          <span
            className={`text-[15.5px] sm:text-[17px] md:text-[17.5px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-200 truncate sm:whitespace-normal ${
              effectiveOpen ? "text-[#061826] font-semibold" : "text-[#1A1829]"
            }`}
          >
            {item.title}
          </span>
        </div>

        {hasDescription && (
          <div className="shrink-0 pl-2">
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ease-out ${
                effectiveOpen ? "rotate-180 text-[#061826]" : "text-[#94A3B8]"
              }`}
            />
          </div>
        )}
      </button>

      {/* Expandable Gradient Content Box */}
      {hasDescription && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            effectiveOpen
              ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 text-white text-[14px] sm:text-[15px] leading-[1.65] font-normal"
              style={{
                background:
                  "linear-gradient(135deg, #153874 0%, #1A4D94 50%, #0D5EA6 100%)",
              }}
              dangerouslySetInnerHTML={{ __html: item.description || "" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
