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
  heading: "Elevating Enterprise Data into Strategic Intelligence.",
  description:
    "Sparsh IT transforms fragmented information landscapes into governed, scalable, and analytics-ready ecosystems that enable informed decisions and accelerate data-driven innovation.",
  cards: [
    {
      id: "intelligent-operational-transformation",
      title: "Trusted Enterprise Information",
      description:
        "Establishing Confidence Across the Data Continuum.\n\nStrengthen data integrity through systematic validation, reconciliation, observability, and consistent information management practices.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "predictive-enterprise-intelligence",
      title: "Accelerated Analytical Intelligence",
      description:
        "Connecting Enterprise Information with Strategic Decisions.\n\nEstablish integrated analytical foundations that improve access to relevant data and support sophisticated business intelligence capabilities.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "enterprise-knowledge-amplification",
      title: "Real-Time Operational Awareness",
      description:
        "Transforming Continuous Data Into Timely Insights.\n\nEnable streaming analytics and event-driven processing to support responsive operational intelligence and time-sensitive decision-making.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "governed-intelligent-operations",
      title: "AI-Ready Data Ecosystems",
      description:
        "Establishing the Foundation for Intelligent Transformation.\n\nPrepare enterprise data environments for advanced machine learning, generative AI, and emerging analytical applications.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
  ],
};

export const aiClearApproachData = AI_CLEAR_APPROACH_DATA;
