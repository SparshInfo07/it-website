import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const SERVICE_APP_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading:
    "Purpose-Built Applications for Complex <br /> Industry Environments.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      subheading: "Modernizing Financial Digital Ecosystems.",
      tagline:
        "Engineer secure applications connected financial workflows, and adaptable enterprise platforms.",
      image: ASSETS.DEVSECOPS_BANKING,
      alt: "Banking and Financial Services application engineering",
      href: "/industries/fintech",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      subheading: "Accelerating Connected Commerce Innovation.",
      tagline:
        "Develop sophisticated commerce applications, customer engagement platforms, and integrated digital services.",
      image: ASSETS.DEVSECOPS_RETAIL_ECOMMERCE,
      alt: "Retail and E-Commerce application development",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      subheading: "Engineering Reliable Digital Healthcare Operations.",
      tagline:
        "Support information-driven applications, administrative workflows, and connected digital platforms with appropriate safeguards.",
      image: ASSETS.DEVSECOPS_HEALTHCARE,
      alt: "Healthcare and Life Sciences digital platforms",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      subheading: "Modern Applications for Industrial Intelligence.",
      tagline:
        "Develop connected operational applications, workflow platforms, and enterprise system integrations.",
      image: ASSETS.DEVSECOPS_MANUFACTURING,
      alt: "Manufacturing and Industrial Operations applications",
      href: "/industries/logistics",
    },
    {
      id: "education",
      name: "Education & Professional Services",
      subheading: "Advancing Digital Service Delivery.",
      tagline:
        "Create scalable learning applications, knowledge platforms, and enterprise productivity solutions.",
      image: ASSETS.DEVSECOPS_EDUCATION_PROFESSIONAL,
      alt: "Education and Professional Services application platforms",
      href: "/industries/education",
    },
  ],
};

export const serviceAppDifferentIndustriesData =
  SERVICE_APP_DIFFERENT_INDUSTRIES_DATA;
