import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const AI_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Mobility Engineered <br /> Around Industry Needs.",
  subheading: "",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      image: ASSETS.BANKING,
      tagline: `<b class="text-black">Secure and accessible financial experiences.</b><br /> Support sophisticated mobile financial interactions and connected enterprise workflows.`,
      alt: "Banking and Financial Services Mobile applications",
      href: "/industries/fintech",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      image: ASSETS.RETAIL,
      tagline: `<b class="text-black">Commerce experiences without boundaries.</b><br /> Enable mobile shopping, customer engagement, order visibility, and integrated commerce services.`,
      alt: "Retail and E-commerce Mobile solutions",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      image: ASSETS.HEALTHCARE,
      tagline: `<b class="text-black">Accessible digital services with appropriate safeguards.</b><br /> Support suitable mobile information access and operational applications within relevant privacy requirements.`,
      alt: "Healthcare and Life Sciences Mobile workflows",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      image: ASSETS.MANUFACTURING,
      tagline: `<b class="text-black">Connected mobility for operational workforces.</b><br /> Extend appropriate operational workflows, field information, and enterprise services to mobile devices.`,
      alt: "Manufacturing and Industrial Operations Mobile automation",
      href: "/industries/logistics",
    },
    {
      id: "education",
      name: "Education & Professional Services",
      image: ASSETS.EDUCATION,
      tagline: `<b class="text-black">Digital access across learning and service environments.</b><br /> Enable mobile knowledge access, communication, scheduling, and connected service experiences.`,
      alt: "Education and Professional Services Mobile platform",
      href: "/industries",
    },
  ],
};

export const aiDifferentIndustriesData = AI_DIFFERENT_INDUSTRIES_DATA;
export const MOBILE_DIFFERENT_INDUSTRIES_DATA = AI_DIFFERENT_INDUSTRIES_DATA;
