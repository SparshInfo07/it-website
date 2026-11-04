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

export const CLEAR_APPROACH_DATA: ClearApproachData = {
  heading: "Engineering Precision. <br /> Enduring Impact.",
  description:
    "Our delivery philosophy unites business intelligence, architectural discipline, and execution excellence to create technology solutions that transcend immediate requirements and enable sustained enterprise advancement.",
  cards: [
    {
      id: "strategic-discovery-enterprise-alignment",
      title: "Strategic Discovery & Enterprise Alignment",
      subtitle: "Illuminating Opportunities. Defining Direction.",
      description:
        "Illuminating Opportunities. Defining Direction.\n\nWe undertake a comprehensive examination of enterprise objectives, technology landscapes, operational dependencies, and transformation priorities to establish a strategically aligned foundation for solution development.",
      href: "/contact-us",
      ctaText: "Explore Our Approach",
    },
    {
      id: "architecture-transformation-strategy",
      title: "Architecture & Transformation Strategy",
      subtitle: "Architecting with Purpose. Designing for Evolution.",
      description:
        "Architecting with Purpose. Designing for Evolution.\n\nWe translate strategic imperatives into cohesive technology blueprints, combining architectural foresight, platform intelligence, and modernization strategies to establish secure, adaptable, and future-ready digital foundations.",
      href: "/contact-us",
      ctaText: "Explore Our Approach",
    },
    {
      id: "integrated-engineering-execution",
      title: "Integrated Engineering & Execution",
      subtitle: "Converging Expertise. Accelerating Innovation.",
      description:
        "Converging Expertise. Accelerating Innovation.\n\nOur multidisciplinary engineering capabilities bring together advanced development methodologies, secure automation, quality disciplines, and coordinated execution frameworks to deliver technically sophisticated solutions with precision and consistency.",
      href: "/contact-us",
      ctaText: "Explore Our Approach",
    },
    {
      id: "operational-excellence-continuous-evolution",
      title: "Operational Excellence & Continuous Evolution",
      subtitle: "Sustaining Performance. Advancing Possibilities.",
      description:
        "Sustaining Performance. Advancing Possibilities.\n\nWe extend engineering excellence beyond implementation through performance optimization, operational resilience, continuous improvement, and adaptive technology practices that preserve long-term enterprise value.",
      href: "/contact-us",
      ctaText: "Explore Our Approach",
    },
  ],
};

export const SERVICES_CLEAR_APPROACH_DATA = CLEAR_APPROACH_DATA;
export const servicesClearApproachData = CLEAR_APPROACH_DATA;
