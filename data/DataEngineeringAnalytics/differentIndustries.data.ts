import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const AI_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Data Intelligence <br /> Across Enterprise Sectors",
  subheading:
    "AI applications differ according to each industry's data, operational processes and regulatory environment. Solutions should be shaped around the business context, available data and intended outcomes.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      tagline: `<b class="text-black">Governed data for financial intelligence.</b><br /> Enable integrated financial data, analytical processing, reconciliation, and reliable information foundations.`,
      image: ASSETS.INDUSTRY_RETAIL,
      alt: "Banking and Financial Services AI applications",
      href: "/industries/fintech",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      image: ASSETS.DATA_ENG_RETAIL,
      tagline: `<b class="text-black">Commercial intelligence through connected data.</b><br /> Unify customer, transaction, inventory, and product information to support analytical decision-making.`,
      alt: "Retail and E-commerce AI solutions",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      image: ASSETS.DATA_ENG_HEALTHCARE,
      tagline: `<b class="text-black">Reliable data foundations for complex information environments.</b><br /> Support appropriately governed data integration, quality validation, and analytical processing.`,
      alt: "Healthcare and Life Sciences AI workflows",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      image: ASSETS.DATA_ENG_MANUFACTURING,
      tagline: `<b class="text-black">Operational intelligence through industrial data.</b><br /> Connect production, quality, equipment, and supply-chain information into cohesive analytical environments.`,
      alt: "Manufacturing and Industrial Operations AI automation",
      href: "/industries/logistics",
    },
    {
      id: "education",
      name: "Education & Professional Services",
      image: ASSETS.DATA_ENG_EDUCATION,
      tagline: `<b class="text-black">Institutional intelligence through connected information.</b><br /> Enable integrated reporting, performance analytics, and improved access to organizational information.`,
      alt: "Education and Professional Services generative AI",
      href: "/industries",
    },
  ],
};

export const aiDifferentIndustriesData = AI_DIFFERENT_INDUSTRIES_DATA;
