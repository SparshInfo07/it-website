import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const BANKING_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Specialized Financial Domains",
  subheading: "Enabling Innovation Across Diverse Financial Institutions.",
  industries: [
    {
      id: "retail-consumer-banking",
      name: "Retail & Consumer Banking",
      subheading: "Reimagining Digital Relationships Across Everyday Finance.",
      tagline:
        "Modernize consumer banking experiences through intelligent account services, integrated payments, and connected financial engagement.",
      image: ASSETS.INDUSTRY_RETAIL,
      alt: "Retail and Consumer Banking",
      href: "/industries/banking",
    },
    {
      id: "corporate-commercial-banking",
      name: "Corporate & Commercial Banking",
      subheading: "Advancing Sophisticated Enterprise Financial Operations.",
      tagline:
        "Enable integrated treasury capabilities, commercial lending workflows, liquidity intelligence, and connected institutional banking platforms.",
      image: ASSETS.INDUSTRY_BANKING,
      alt: "Corporate and Commercial Banking",
      href: "/industries/banking",
    },
    {
      id: "investment-capital-markets",
      name: "Investment & Capital Markets",
      subheading: "Engineering Intelligence Across Dynamic Financial Markets.",
      tagline:
        "Support investment operations through advanced market data integration, analytical platforms, and sophisticated transaction workflows.",
      image: ASSETS.INDUSTRY_HEALTHCARE,
      alt: "Investment and Capital Markets",
      href: "/industries/banking",
    },
    {
      id: "fintech-digital-payments",
      name: "FinTech & Digital Payments",
      subheading: "Accelerating Innovation Across Emerging Financial Ecosystems.",
      tagline:
        "Develop scalable fintech infrastructure, embedded finance capabilities, digital payment platforms, and interoperable financial services.",
      image: ASSETS.INDUSTRY_TRAVEL,
      alt: "FinTech and Digital Payments",
      href: "/industries/banking",
    },
    {
      id: "wealth-private-banking",
      name: "Wealth & Private Banking",
      subheading: "Elevating Advisory Excellence Through Digital Intelligence.",
      tagline:
        "Enable personalized wealth experiences, portfolio analytics, and sophisticated investment management capabilities.",
      image: ASSETS.INDUSTRY_EDUCATION,
      alt: "Wealth and Private Banking",
      href: "/industries/banking",
    },
  ],
};

export const bankingDifferentIndustriesData = BANKING_DIFFERENT_INDUSTRIES_DATA;
