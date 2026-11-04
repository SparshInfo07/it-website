import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const HOSPITALITY_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Specialized Hospitality Domains",
  subheading:
    "Advancing digital excellence across experience-driven industries.",
  industries: [
    {
      id: "hotels-resorts",
      name: "Hotels & Resorts",
      subheading:
        "Transforming integrated guest and property experiences.",
      tagline:
        "Modernize reservations, guest engagement, and connected hospitality operations.",
      image: ASSETS.INDUSTRY_HOSPITALITY,
      alt: "Hotels and Resorts",
      href: "/industries/hospitality",
    },
    {
      id: "hospitality-management-groups",
      name: "Hospitality Management Groups",
      subheading:
        "Orchestrating intelligence across distributed properties.",
      tagline:
        "Enable centralized analytics, enterprise integration, and multi-property visibility.",
      image: ASSETS.WORK_HOSPITALITY,
      alt: "Hospitality Management Groups",
      href: "/industries/hospitality",
    },
    {
      id: "travel-leisure-enterprises",
      name: "Travel & Leisure Enterprises",
      subheading:
        "Elevating digital experiences across leisure ecosystems.",
      tagline:
        "Develop connected booking capabilities, customer platforms, and digital service experiences.",
      image: ASSETS.HOME_INDUSTRY_HOSPITALITY,
      alt: "Travel and Leisure Enterprises",
      href: "/industries/hospitality",
    },
    {
      id: "restaurants-food-services",
      name: "Restaurants & Food Services",
      subheading: "Engineering Intelligent Dining Operations.",
      tagline:
        "Integrate ordering platforms, reservations, payments, and operational workflows.",
      image: ASSETS.WORK_RETAIL,
      alt: "Restaurants and Food Services",
      href: "/industries/hospitality",
    },
    {
      id: "entertainment-experience-providers",
      name: "Entertainment & Experience Providers",
      subheading: "Advancing Connected Leisure Engagement.",
      tagline:
        "Support digital ticketing, customer engagement, and integrated experience platforms.",
      image: ASSETS.UI_UX_RETAIL,
      alt: "Entertainment and Experience Providers",
      href: "/industries/hospitality",
    },
  ],
};

export const hospitalityDifferentIndustriesData =
  HOSPITALITY_DIFFERENT_INDUSTRIES_DATA;

