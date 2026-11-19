export interface IndustryIntroData {
  heading:
    | string
    | {
        line1?: string;
        line2?: string;
      };
  paragraphs: string[];
  image?: string;
  cta: {
    label: string;
    href: string;
  };
}

export type ServiceIntroData = IndustryIntroData;

export const INDUSTRY_INTRO_DATA: IndustryIntroData = {
  heading:
    "Industry-Specific Solutions <br /> Where Industry Expertise Converges with Engineering Excellence.",
  paragraphs: [
    "Every industry confronts a distinctive convergence of technological disruption, evolving regulatory expectations, competitive pressures, and operational complexity. Addressing these challenges requires an engineering philosophy informed by deep industry understanding and guided by strategic business priorities.",
    "At Sparsh IT, we translate intricate industry requirements into intelligently architected digital ecosystems. Through advanced engineering, AI-enabled innovation, and integrated technology capabilities, we help enterprises modernize foundational systems, optimize critical operations, and establish the architectural agility required for sustained transformation.",
    "Our approach extends beyond conventional technology delivery to create meaningful alignment between enterprise ambitions, industry realities, and long-term digital advancement.",
  ],
  cta: {
    label: "Discover Our Industry Capabilities",
    href: "#industries",
  },
};

export const SERVICE_INTRO_DATA = INDUSTRY_INTRO_DATA;
export const SERVICES_INTRO_DATA = INDUSTRY_INTRO_DATA;
export const servicesIntroData = INDUSTRY_INTRO_DATA;
export const industryIntroData = INDUSTRY_INTRO_DATA;
