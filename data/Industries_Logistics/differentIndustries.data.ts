import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const LOGISTICS_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Specialized Transportation Domains",
  subheading: "Enabling Innovation Across Connected Mobility Networks.",
  industries: [
    {
      id: "aviation-air-travel",
      name: "Aviation & Air Travel",
      subheading: "Engineering Connected Aviation Experiences.",
      tagline:
        "Support digital booking, passenger engagement, and integrated airline applications.",
      image: ASSETS.INDUSTRY_TRAVEL,
      alt: "Aviation and Air Travel",
      href: "/industries/logistics",
    },
    {
      id: "logistics-freight",
      name: "Logistics & Freight",
      subheading: "Advancing Visibility Across Global Supply Networks.",
      tagline:
        "Connect freight operations, carrier ecosystems, and logistics intelligence platforms.",
      image: ASSETS.WORK_TRAVEL,
      alt: "Logistics and Freight",
      href: "/industries/logistics",
    },
    {
      id: "public-transportation",
      name: "Public Transportation",
      subheading: "Modernizing Connected Urban Mobility.",
      tagline:
        "Enable passenger information, transit operations, and integrated transportation platforms.",
      image: ASSETS.HOME_INDUSTRY_TRAVEL,
      alt: "Public Transportation",
      href: "/industries/logistics",
    },
    {
      id: "commercial-fleet-operations",
      name: "Commercial Fleet Operations",
      subheading: "Optimizing Distributed Transportation Assets.",
      tagline:
        "Support fleet management, vehicle intelligence, and operational coordination.",
      image: ASSETS.DEVSECOPS_RETAIL_ECOMMERCE,
      alt: "Commercial Fleet Operations",
      href: "/industries/logistics",
    },
    {
      id: "travel-technology-enterprises",
      name: "Travel Technology Enterprises",
      subheading: "Accelerating Innovation Across Digital Travel Platforms.",
      tagline:
        "Develop scalable travel applications, reservation ecosystems, and connected service experiences.",
      image: ASSETS.UI_UX_RETAIL,
      alt: "Travel Technology Enterprises",
      href: "/industries/logistics",
    },
  ],
};

export const logisticsDifferentIndustriesData =
  LOGISTICS_DIFFERENT_INDUSTRIES_DATA;

