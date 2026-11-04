export interface ClearApproachCardItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
  ctaText?: string;
}

export interface ClearApproachData {
  eyebrow?: string;
  heading:
    | string
    | {
        line1?: string;
        line2?: string;
      };
  description?: string;
  subheading?: string;
  cards: ClearApproachCardItem[];
}

export const INDUSTRY_CLEAR_APPROACH_DATA: ClearApproachData = {
  heading: "Engineering for Impact. <br /> Industry-Aligned Thinking. Enterprise-Grade Execution.",
  description:
    "We combine strategic domain understanding with advanced technology disciplines to engineer solutions that address industry complexity while strengthening enterprise adaptability.",
  cards: [
    {
      id: "strategic-domain-intelligence",
      title: "01. Strategic Domain Intelligence",
      subtitle: "Understanding the Industry. Anticipating the Opportunity.",
      description:
        "Understanding the Industry. Anticipating the Opportunity.\n\nWe examine sector-specific business models, operational dependencies, technology constraints, and regulatory considerations to establish informed transformation strategies aligned with enterprise priorities.",
    },
    {
      id: "intelligent-enterprise-architecture",
      title: "02. Intelligent Enterprise Architecture",
      subtitle: "Architecting Digital Foundations for Evolving Industries.",
      description:
        "Architecting Digital Foundations for Evolving Industries.\n\nWe design sophisticated, interoperable technology ecosystems that integrate modern application architectures, cloud-native capabilities, and intelligent enterprise platforms.",
    },
    {
      id: "security-governance-digital-trust",
      title: "03. Security, Governance & Digital Trust",
      subtitle: "Embedding Enterprise Confidence Into Every Architecture.",
      description:
        "Embedding Enterprise Confidence Into Every Architecture.\n\nWe incorporate security-first engineering, responsible data governance, and compliance-conscious design principles to strengthen resilience across business-critical technology environments.",
    },
    {
      id: "transformation-operational-continuity",
      title: "04. Transformation & Operational Continuity",
      subtitle: "Accelerating Digital Evolution Without Compromising Stability.",
      description:
        "Accelerating Digital Evolution Without Compromising Stability.\n\nWe orchestrate modernization through disciplined engineering, strategic integration, and scalable implementation approaches that preserve operational integrity while enabling future innovation.",
    },
  ],
};

export const clearApproachData = INDUSTRY_CLEAR_APPROACH_DATA;
