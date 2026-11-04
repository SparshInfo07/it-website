import { ASSETS } from "@/constants/images.constants";

export interface IndustryItem {
  id: string;
  name: string;
  subheading?: string;
  tagline?: string;
  description?: string;
  image?: string;
  alt?: string;
  href?: string;
}

export interface DifferentIndustriesData {
  heading: string;
  subheading?: string;
  industries: IndustryItem[];
}

export const HOMEPAGE_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Industry Knowledge <br /> Technology That Delivers",
  subheading:
    "Every industry brings different challenges. We combine technology expertise with business understanding to build solutions around the needs, processes and priorities of each sector.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      tagline:
        "Improve digital services, strengthen data security and streamline financial operations through reliable technology.",
      image: ASSETS.HOME_INDUSTRY_BANKING,
      alt: "Secure mobile banking and contactless financial interactions",
      href: "/industries/banking",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      tagline:
        "Create connected digital experiences that improve customer engagement, simplify operations and support business growth.",
      image: ASSETS.HOME_INDUSTRY_RETAIL,
      alt: "Retail modern point-of-sale customer checkout technology",
      href: "/industries/ecommerce",
    },
    {
      id: "travel",
      name: "Travel & Transportation",
      tagline:
        "Modernize booking, operational and customer-facing systems to create more connected and efficient travel experiences.",
      image: ASSETS.HOME_INDUSTRY_TRAVEL,
      alt: "Travel mobility systems and connected passenger experience",
      href: "/industries/logistics",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      tagline:
        "Improve guest experiences and day-to-day operations through integrated, reliable and easy-to-use digital solutions.",
      image: ASSETS.HOME_INDUSTRY_HOSPITALITY,
      alt: "Hospitality smart check-in and premium guest service",
      href: "/industries",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      tagline:
        "Strengthen digital processes, data management and technology-enabled service delivery across healthcare environments.",
      image: ASSETS.HOME_INDUSTRY_HEALTHCARE,
      alt: "Healthcare digital care coordination and clinical tablet interface",
      href: "/industries/healthcare",
    },
    {
      id: "education",
      name: "Education & Learning",
      tagline:
        "Build digital learning solutions that improve access, simplify administration and create more engaging learning experiences.",
      image: ASSETS.HOME_INDUSTRY_EDUCATION,
      alt: "Education interactive collaborative learning technology",
      href: "/industries",
    },
  ],
};

export const DIFFERENT_INDUSTRIES_DATA = HOMEPAGE_DIFFERENT_INDUSTRIES_DATA;
export const differentIndustriesData = HOMEPAGE_DIFFERENT_INDUSTRIES_DATA;
