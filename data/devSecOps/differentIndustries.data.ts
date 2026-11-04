import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const DEVSECOPS_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Secure Engineering Across Industry <br /> Landscapes.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      subheading: "Governed Engineering for Financial Platforms.",
      tagline:
        "Support controlled software delivery, security integration, auditable deployment practices, and resilient financial application operations.",
      image: ASSETS.DEVSECOPS_BANKING,
      alt: "Banking and Financial Services DevSecOps engineering",
      href: "/industries/fintech",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      subheading: "Engineering Resilience for Digital Commerce.",
      tagline:
        "Enable automated releases, scalable infrastructure operations, and performance-aware engineering for commerce platforms.",
      image: ASSETS.DEVSECOPS_RETAIL_ECOMMERCE,
      alt: "Retail and E-Commerce DevSecOps solutions",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      subheading: "Secure Delivery for Sensitive Digital Ecosystems.",
      tagline:
        "Integrate appropriate security safeguards, deployment controls, and operational reliability practices into healthcare technology environments.",
      image: ASSETS.DEVSECOPS_HEALTHCARE,
      alt: "Healthcare and Life Sciences DevSecOps workflows",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      subheading: "Reliable Engineering for Connected Operations.",
      tagline:
        "Support standardized deployments, infrastructure automation, and operational monitoring across relevant industrial technology platforms.",
      image: ASSETS.DEVSECOPS_MANUFACTURING,
      alt: "Manufacturing and Industrial Operations engineering automation",
      href: "/industries/logistics",
    },
    {
      id: "technology",
      name: "Technology & Professional Services",
      subheading: "Developer Productivity at Enterprise Scale.",
      tagline:
        "Establish coordinated engineering platforms and secure delivery practices across multiple products, teams, and application environments.",
      image: ASSETS.DEVSECOPS_EDUCATION_PROFESSIONAL,
      alt: "Technology and Professional Services engineering platforms",
      href: "/industries",
    },
  ],
};

export const devSecOpsDifferentIndustriesData =
  DEVSECOPS_DIFFERENT_INDUSTRIES_DATA;
