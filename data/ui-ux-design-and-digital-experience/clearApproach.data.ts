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

export const UI_UX_CLEAR_APPROACH_DATA: ClearApproachData = {
  heading: "Transforming Digital Interaction into <br /> Experiential Value.",
  description:
    "Sparsh IT elevates digital engagement by connecting human-centered design principles with enterprise objectives, creating intuitive experiences that simplify complexity and reinforce digital consistency.",
  cards: [
    {
      id: "elevated-experience-quality",
      title: "Elevated Experience Quality",
      description:
        "Making Sophisticated Technology Effortlessly Accessible. Translate complex functionality into intuitive interfaces that improve clarity, usability, and interaction efficiency.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "cohesive-digital-identity",
      title: "Cohesive Digital Identity",
      description:
        "Establishing Consistency Across Enterprise Touchpoints. Unify visual systems, interface behaviors, and interaction standards to support coherent digital experiences.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "optimized-user-journeys",
      title: "Optimized User Journeys",
      description:
        "Eliminating Friction From Critical Interactions. Refine navigation, information architecture, and interaction workflows to support more effective user engagement.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
    {
      id: "accelerated-design-to-engineering-alignment",
      title: "Accelerated Design-to-Engineering Alignment",
      description:
        "Connecting Creative Vision With Technical Execution. Establish reusable design foundations and collaborative implementation practices that improve consistency throughout digital product development.",
      href: "/contact-us",
      ctaText: "Learn More",
    },
  ],
};

export const uiUxClearApproachData = UI_UX_CLEAR_APPROACH_DATA;
