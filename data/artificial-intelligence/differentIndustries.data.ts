import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const AI_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Intelligent Innovation Across Industry <br /> Landscapes.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      subheading: "Intelligence for Complex Financial Ecosystems.",
      tagline:
        "Advance analytical intelligence, intelligent document processing, knowledge automation, and risk-oriented insights within appropriately governed financial environments.",
      image: ASSETS.DEVSECOPS_BANKING,
      alt: "Banking and Financial Services AI applications",
      href: "#",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      subheading: "Predictive Commerce. Intelligent Engagement.",
      tagline:
        "Enable demand intelligence, personalized digital interactions, customer behavior analytics, and intelligent commercial workflows.",
      image: ASSETS.DEVSECOPS_RETAIL_ECOMMERCE,
      alt: "Retail and E-commerce AI solutions",
      href: "#",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      subheading:
        "Responsible intelligence for information-intensive environments.",
      tagline:
        "Support clinical-adjacent administrative workflows, research-oriented knowledge discovery, and information processing through appropriately governed AI capabilities.",
      image: ASSETS.DEVSECOPS_HEALTHCARE,
      alt: "Healthcare and Life Sciences AI workflows",
      href: "#",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      subheading: "Intelligent Operations. Predictive Performance.",
      tagline:
        "Apply machine learning, operational analytics, anomaly detection, and intelligent automation to strengthen industrial visibility and decision support.",
      image: ASSETS.DEVSECOPS_MANUFACTURING,
      alt: "Manufacturing and Industrial Operations AI automation",
      href: "#",
    },
    {
      id: "education",
      name: "Education & Professional Services",
      subheading: "Amplifying Knowledge and Institutional Productivity.",
      tagline:
        "Enable intelligent knowledge discovery, document intelligence, contextual information access, and sophisticated workflow augmentation.",
      image: ASSETS.DEVSECOPS_EDUCATION_PROFESSIONAL,
      alt: "Education and Professional Services generative AI",
      href: "#",
    },
  ],
};

export const aiDifferentIndustriesData = AI_DIFFERENT_INDUSTRIES_DATA;
