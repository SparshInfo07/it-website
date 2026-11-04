import React from "react";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import { BETTER_DECISIONS_DATA } from "@/data/serviceApplication";
import { ClearApproachData } from "@/data/clearApproach";
import { ASSETS } from "@/constants/images.constants";

export interface BetterDecisionsProps {
  data?: ClearApproachData;
  backgroundImage?: string;
  defaultActiveId?: string | null;
  className?: string;
}

export default function BetterDecisions({
  data = BETTER_DECISIONS_DATA,
  backgroundImage = ASSETS.SERVICE_CLEAR_APPROACH_BG,
  defaultActiveId = "accelerated-digital-innovation",
  className = "",
}: BetterDecisionsProps) {
  return (
    <ClearApproach
      id="better-decisions"
      ariaLabel="Better decisions start before development."
      data={data}
      backgroundImage={backgroundImage}
      defaultActiveId={defaultActiveId}
      className={className}
    />
  );
}
