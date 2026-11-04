import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const GCC_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Global Engineering Shaped Around Industry Priorities",
  subheading:
    "Sparsh IT’s global engineering model adapts to sector-specific technology needs, combining specialized expertise with coordinated offshore delivery to support complex programs across diverse operating environments.",
  industries: [
    {
      id: "banking",
      name: "Banking & Financial Services",
      tagline: `<b class="text-black">Engineering support for financial technology.</b><br /> Support application engineering, data platforms, cloud initiatives and quality assurance for financial technology programs while maintaining coordinated execution and alignment with client-defined operational, security and governance requirements.`,
      image: ASSETS.INDUSTRY_BANKING,
      alt: "Banking and Financial Services Global Capability Centers",
      href: "/industries/fintech",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      tagline: `<b class="text-black">Flexible engineering for digital commerce.</b><br /> Add engineering capacity across commerce applications, integrations, modernization and testing, helping retail teams respond efficiently to changing customer expectations, transaction demands, seasonal peaks and digital priorities.`,
      image: ASSETS.INDUSTRY_RETAIL,
      alt: "Retail and E-Commerce Global Capability Centers",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      tagline: `<b class="text-black">Coordinated delivery for sensitive environments.</b><br /> Support suitable application, data and digital engineering initiatives through offshore delivery structured around client-defined privacy, security, quality, compliance and operational requirements.`,
      image: ASSETS.INDUSTRY_HEALTHCARE,
      alt: "Healthcare and Life Sciences Global Capability Centers",
      href: "/industries/healthcare",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Operations",
      tagline: `<b class="text-black">Engineering for connected operations.</b><br /> Strengthen development, integration, data engineering and quality capabilities across connected operations, enterprise platforms and digital initiatives supporting modern manufacturing, industrial systems and evolving operational environments.`,
      image: ASSETS.INDUSTRY_TRAVEL,
      alt: "Manufacturing and Industrial Operations Global Capability Centers",
      href: "/industries/logistics",
    },
    {
      id: "technology",
      name: "Technology & Professional Services",
      tagline: `<b class="text-black">Expertise that keeps product delivery moving.</b><br /> Bring additional expertise to product development, platform modernization, cloud engineering and ongoing enhancement programs, helping internal teams sustain delivery momentum as priorities, products and workloads evolve.`,
      image: ASSETS.INDUSTRY_EDUCATION,
      alt: "Technology and Professional Services Global Capability Centers",
      href: "/industries",
    },
  ],
};
