"use client";

import React, { useState } from "react";
import SolutionsAccordionItem from "@/components/Molecules/SolutionsAccordionItem";
import {
  type SolutionsAccordionData,
  SOLUTIONS_ACCORDION_DEFAULT_DATA,
} from "@/data/solutionsAccordion";

export interface SolutionsAccordionProps {
  data?: SolutionsAccordionData;
  defaultOpenId?: string | null;
  allowMultiple?: boolean;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

export default function SolutionsAccordion({
  data = SOLUTIONS_ACCORDION_DEFAULT_DATA,
  defaultOpenId,
  allowMultiple = false,
  className = "",
  id = "solutions-accordion",
  ariaLabel,
}: SolutionsAccordionProps) {
    // Default to null (collapsed) unless explicitly provided via defaultOpenId
  const initialOpenId = defaultOpenId !== undefined ? defaultOpenId : null;

  // Active open state
  const [openId, setOpenId] = useState<string | null>(initialOpenId);
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(initialOpenId ? [initialOpenId] : [])
  );

  const handleToggle = (itemId: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (next.has(itemId)) {
          next.delete(itemId);
        } else {
          next.add(itemId);
        }
        return next;
      });
    } else {
      setOpenId((prev) => (prev === itemId ? null : itemId));
    }
  };

  const isItemOpen = (itemId: string) => {
    return allowMultiple ? openIds.has(itemId) : openId === itemId;
  };

  const resolvedAriaLabel =
    ariaLabel ||
    (typeof data?.heading === "string"
      ? data.heading.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
      : "Solutions Accordion");

  return (
    <section
      id={id}
      aria-label={resolvedAriaLabel}
      className={`sec_padding relative w-full bg-white text-slate-900 overflow-hidden ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Sticky Title & Description */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky top-28">
            {data?.heading && (
              <h2
                className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-medium leading-[1.18] tracking-[-0.02em] text-[#061826]"
                dangerouslySetInnerHTML={{ __html: data.heading }}
              />
            )}

            {data?.description && (
              <p
                className="mt-4 sm:mt-6 text-sm sm:text-base md:text-[16px] text-[#6B7280] leading-relaxed max-w-lg"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            )}
          </div>

          {/* Right Column: Dynamic Expandable Accordion Items */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col space-y-3 sm:space-y-3.5 w-full">
            {data?.items?.map((item) => (
              <SolutionsAccordionItem
                key={item.id}
                item={item}
                isOpen={isItemOpen(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
