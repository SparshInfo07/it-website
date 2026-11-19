import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const QUALITY_ENGINEERING_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Intelligent Quality Engineering for <br /> Complex Enterprise Ecosystems.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      subheading: "Engineering Precision Across Financial Ecosystems.",
      tagline:
        "Strengthen transaction integrity, financial application reliability, regulatory-aligned assurance, and data consistency through intelligent quality engineering practices.",
      image: ASSETS.INDUSTRY_RETAIL,
      alt: "Banking & Financial Services Quality Engineering",
      href: "/industries/banking",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      subheading: "Elevating Digital Commerce Through Intelligent Assurance.",
      tagline:
        "Optimize customer journeys, transaction reliability, omnichannel integrations, and digital experience quality through AI-assisted automation and continuous assurance.",
      image: ASSETS.INDUSTRY_BANKING,
      alt: "Retail & E-Commerce Quality Assurance",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      subheading: "Advancing Reliability Across Sensitive Digital Environments.",
      tagline:
        "Reinforce clinical application integrity, interoperability, data accuracy, and quality governance while supporting applicable privacy and regulatory requirements.",
      image: ASSETS.INDUSTRY_HEALTHCARE,
      alt: "Healthcare & Life Sciences Quality Assurance",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      subheading: "Engineering Resilience Across Connected Industrial Ecosystems.",
      tagline:
        "Strengthen operational application reliability, enterprise integrations, industrial data integrity, and business continuity through advanced quality engineering methodologies.",
      image: ASSETS.INDUSTRY_TRAVEL,
      alt: "Manufacturing & Industrial Operations Quality Engineering",
      href: "/industries/logistics",
    },
    {
      id: "education",
      name: "Education & Professional Services",
      subheading: "Enabling Dependable, Intelligence-Driven Digital Experiences.",
      tagline:
        "Elevate platform reliability, information integrity, enterprise workflow consistency, and user experience through continuous quality assurance and intelligent validation.",
      image: ASSETS.INDUSTRY_EDUCATION,
      alt: "Education & Professional Services Quality Assurance",
      href: "/industries/education",
    },
  ],
};

export const qualityEngineeringDifferentIndustriesData =
  QUALITY_ENGINEERING_DIFFERENT_INDUSTRIES_DATA;
