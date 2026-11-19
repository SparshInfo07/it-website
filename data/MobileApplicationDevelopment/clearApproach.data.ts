export interface ClearApproachCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaText?: string;
}

export interface ClearApproachData {
  heading:
    | string
    | {
        line1?: string;
        line2?: string;
      };
  description: string;
  cards: ClearApproachCardItem[];
}

export const AI_CLEAR_APPROACH_DATA: ClearApproachData = {
  heading:
    "Extending Enterprise Capabilities <br /> Through Intelligent Mobility.",
  description:
    "Sparsh IT transforms mobile platforms into strategic digital touchpoints that connect users, enterprise services, and business operations through sophisticated, reliable experiences.",
  cards: [
    {
      id: "elevated-digital-engagement",
      title: "Elevated Digital Engagement",
      description:
        "Creating Meaningful Interactions Across Mobile Touchpoints.\n\nDeliver intuitive mobile experiences that strengthen accessibility, simplify digital interactions, and support consistent engagement.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "enterprise-workforce-enablement",
      title: "Enterprise Workforce Enablement",
      description:
        "Extending Operational Capabilities Beyond Traditional Boundaries.\n\nConnect authorized employees with enterprise applications, relevant information, and business workflows across mobile environments.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "unified-cross-platform-experiences",
      title: "Unified Cross-Platform Experiences",
      description:
        "Engineering Consistency Across Digital Devices.\n\nEstablish cohesive application experiences through appropriate native and cross-platform engineering approaches.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "sustainable-mobile-innovation",
      title: "Sustainable Mobile Innovation",
      description:
        "Creating Applications Designed for Continued Evolution.\n\nBuild maintainable mobile foundations that accommodate feature enhancements, platform changes, and evolving enterprise requirements.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
  ],
};

export const aiClearApproachData = AI_CLEAR_APPROACH_DATA;
export const MOBILE_CLEAR_APPROACH_DATA = AI_CLEAR_APPROACH_DATA;
