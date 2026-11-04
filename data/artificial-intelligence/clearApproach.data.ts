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
    "Transforming artificial intelligence into <br /> enterprise advantage.",
  description:
    "The true potential of artificial intelligence emerges when advanced computational capabilities are integrated with enterprise strategy, operational intelligence, and clearly defined business outcomes.Sparsh IT enables organizations to operationalize intelligent technologies across critical business functions, unlocking new dimensions of efficiency, insight, adaptability, and innovation.",
  cards: [
    {
      id: "intelligent-operational-transformation",
      title: "Intelligent Operational Transformation",
      description:
        "Redefining Efficiency Through Cognitive Automation.\n\nOrchestrate intelligent automation across knowledge-intensive workflows, reducing operational friction and enabling enterprise teams to redirect their expertise toward higher-value strategic activities.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "predictive-enterprise-intelligence",
      title: "Predictive Enterprise Intelligence",
      description:
        "Anticipating Change. Informing Strategic Decisions.\n\nHarness predictive modelling, advanced analytics, and intelligent pattern recognition to strengthen decision-making, identify emerging opportunities, and improve responsiveness to evolving business conditions.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "enterprise-knowledge-amplification",
      title: "Enterprise Knowledge Amplification",
      description:
        "Transforming Information Into Accessible Intelligence.\n\nUnify fragmented organizational knowledge through intelligent retrieval, contextual reasoning, and generative AI capabilities that enhance information accessibility and accelerate knowledge-driven operations.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "governed-intelligent-operations",
      title: "Governed Intelligent Operations",
      description:
        "Advancing Autonomy with Enterprise Control.\n\nEstablish intelligent workflows supported by transparent governance, appropriate human oversight, operational traceability, and security-conscious engineering practices.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
  ],
};

export const aiClearApproachData = AI_CLEAR_APPROACH_DATA;
