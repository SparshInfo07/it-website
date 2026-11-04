import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const ECOMMERCE_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Specialized Retail Domains",
  subheading: "Enabling Intelligent Commerce Across Diverse Business Models.",
  industries: [
    {
      id: "enterprise-retail",
      name: "Enterprise Retail",
      subheading: "Modernizing Complex Commercial Ecosystems.",
      tagline:
        "Connect large-scale retail operations through integrated commerce platforms and intelligent operational capabilities.",
      image: ASSETS.INDUSTRY_RETAIL,
      alt: "Enterprise Retail",
      href: "/industries/ecommerce",
    },
    {
      id: "direct-to-consumer-commerce",
      name: "Direct-To-Consumer Commerce",
      subheading: "Engineering Distinctive Digital Brand Experiences.",
      tagline:
        "Develop personalized digital storefronts, connected customer journeys, and scalable commerce capabilities.",
      image: ASSETS.WORK_RETAIL,
      alt: "Direct-to-Consumer Commerce",
      href: "/industries/ecommerce",
    },
    {
      id: "grocery-consumer-goods",
      name: "Grocery & Consumer Goods",
      subheading: "Advancing Operational Precision Across Retail Networks.",
      tagline:
        "Enable inventory intelligence, connected fulfillment, and responsive commerce operations.",
      image: ASSETS.DEVSECOPS_RETAIL_ECOMMERCE,
      alt: "Grocery and Consumer Goods",
      href: "/industries/ecommerce",
    },
    {
      id: "fashion-lifestyle-commerce",
      name: "Fashion & Lifestyle Commerce",
      subheading: "Elevating Product Discovery Through Digital Intelligence.",
      tagline:
        "Support sophisticated merchandising, personalized customer engagement, and integrated shopping experiences.",
      image: ASSETS.UI_UX_RETAIL,
      alt: "Fashion and Lifestyle Commerce",
      href: "/industries/ecommerce",
    },
    {
      id: "b2b-wholesale-commerce",
      name: "B2B & Wholesale Commerce",
      subheading: "Engineering Complex Enterprise Commerce Interactions.",
      tagline:
        "Modernize procurement workflows, account-based transactions, commercial pricing, and integrated business purchasing.",
      image: ASSETS.DATA_ENG_RETAIL,
      alt: "B2B and Wholesale Commerce",
      href: "/industries/ecommerce",
    },
  ],
};

export const ecommerceDifferentIndustriesData =
  ECOMMERCE_DIFFERENT_INDUSTRIES_DATA;

