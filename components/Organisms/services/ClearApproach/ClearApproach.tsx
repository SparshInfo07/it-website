"use client";

import React, { useState } from "react";
import {
    CLEAR_APPROACH_DATA,
    type ClearApproachData,
} from "@/data/clearApproach";
import { ASSETS } from "@/constants/images.constants";
import ClearApproachCard from "@/components/Molecules/ClearApproachCard";

export interface ClearApproachProps {
    data?: ClearApproachData;
    backgroundImage?: string;
    defaultActiveId?: string | null;
    id?: string;
    ariaLabel?: string;
    className?: string;
    columns?: 2 | 3 | "auto";
    showCta?: boolean;
}

export default function ClearApproach({
    data = CLEAR_APPROACH_DATA,
    backgroundImage = ASSETS.SERVICE_CLEAR_APPROACH_BG,
    defaultActiveId = null,
    id = "clear-approach",
    ariaLabel,
    className = "",
    columns = "auto",
    showCta,
}: ClearApproachProps) {
    // Mobile / touch interactive state & keyboard focus tracking
    const [activeCardId, setActiveCardId] = useState<string | null>(
        defaultActiveId
    );

    const resolvedAriaLabel =
        ariaLabel ||
        (typeof data?.heading === "string"
            ? data.heading.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
            : data?.heading?.line2
                ? `${data.heading.line1 || ""} ${data.heading.line2}`.trim()
                : data?.heading?.line1 || "Clear Approach");

    const cardCount = data?.cards?.length ?? 0;
    const isThreeColumn =
        columns === 3 || (columns === "auto" && cardCount >= 6);

    const gridClasses = isThreeColumn
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto w-full"
        : "grid grid-cols-1 lg:grid-cols-2 gap-[30px] max-w-[1360px] mx-auto w-full justify-items-center";

    return (
        <section
            id={id}
            aria-label={resolvedAriaLabel}
            className={`relative sec_padding overflow-hidden bg-cover bg-center bg-no-repeat ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="relative z-10 container">

                <div className="text-center mb-10 sm:mb-12 lg:mb-14 mx-auto">
                    {data?.eyebrow && (
                        <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-3">
                            {data.eyebrow}
                        </p>
                    )}

                    {typeof data?.heading === "string" ? (
                        <h2
                            className="section-title-h2 text-white"
                            dangerouslySetInnerHTML={{ __html: data.heading }}
                        />
                    ) : data?.heading?.line1 ? (
                        <h2 className="section-title-h2 text-white">
                            {data.heading.line1}
                            {data.heading.line2 && (
                                <span className="block mt-1 sm:mt-1.5 text-white">
                                    {data.heading.line2}
                                </span>
                            )}
                        </h2>
                    ) : null}

                    {data?.description && (
                        <p className="text-[16px] font-normal mt-6 max-w-5xl mx-auto text-white">
                            {data.description}
                        </p>
                    )}

                </div>

                <div className={gridClasses}>
                    {data.cards.map((card) => (
                        <ClearApproachCard
                            key={card.id}
                            card={card}
                            showCta={showCta}
                            isActive={activeCardId === card.id}
                            onMouseEnter={() => setActiveCardId(card.id)}
                            onMouseLeave={() => setActiveCardId(null)}
                            onClick={() =>
                                setActiveCardId((prev) => (prev === card.id ? null : card.id))
                            }
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}
