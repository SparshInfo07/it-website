import { ASSETS } from "@/constants/images.constants";

export interface ServiceIntroData {
  heading:
    | string
    | {
        line1?: string;
        line2?: string;
      };
  paragraphs: string[];
  image?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export const SERVICE_INTRO_DATA: ServiceIntroData = {
  heading: "Transforming Technological Complexity Into Strategic Advantage.",
  paragraphs: [
    "In an era defined by accelerating technological disruption, enterprise success demands more than isolated digital solutions. It requires architectural foresight, engineering precision, and the ability to orchestrate interconnected technologies into cohesive business capabilities.",
    "Sparsh IT operates at the intersection of enterprise strategy and advanced engineering, helping organizations modernize critical technology landscapes, strengthen digital resilience, and unlock new dimensions of operational performance.",
    "Through an integrated portfolio of consulting, engineering, and transformation capabilities, we translate ambitious business priorities into scalable technology ecosystems designed for sustained innovation and enterprise evolution.",
  ],
  image: ASSETS.SERVICE_LISTING_TRANSFORMING_TECHNOLOGICAL,
};

export const SERVICES_INTRO_DATA = SERVICE_INTRO_DATA;
export const servicesIntroData = SERVICE_INTRO_DATA;
