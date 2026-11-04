import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const UI_UX_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Digital Experiences Shaped by Industry Expectations.",
  subheading: "",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      tagline:
        "Clarity Across Complex Financial Interactions. Design intuitive digital experiences for appropriate financial services and information workflows.",
      image: ASSETS.UI_UX_BANKING,
      alt: "Banking & Financial Services",
      href: "/industries/fintech",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      tagline:
        "Elevating Connected Commerce Experiences. Refine customer journeys, product discovery, and digital purchasing interactions.",
      image: ASSETS.UI_UX_RETAIL,
      alt: "Retail & E-Commerce",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      tagline:
        "Accessible Experiences for Information-Intensive Services. Support clear, inclusive interfaces for suitable digital healthcare and administrative applications.",
      image: ASSETS.UI_UX_HEALTHCARE,
      alt: "Healthcare & Life Sciences",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      tagline:
        "Intuitive Interfaces for Operational Intelligence. Simplify interactions with enterprise applications, operational dashboards, and relevant workflow systems.",
      image: ASSETS.UI_UX_MANUFACTURING,
      alt: "Manufacturing & Industrial Operations",
      href: "/industries/logistics",
    },
    {
      id: "education",
      name: "Education & Professional Services",
      tagline:
        "Purposeful Experiences for Knowledge and Service Delivery. Create accessible, engaging interfaces for learning platforms and professional digital services.",
      image: ASSETS.UI_UX_EDUCATION,
      alt: "Education & Professional Services",
      href: "/industries",
    },
  ],
};

export const uiUxDifferentIndustriesData = UI_UX_DIFFERENT_INDUSTRIES_DATA;
