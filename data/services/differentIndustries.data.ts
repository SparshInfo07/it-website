import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/HomePage/differentIndustries.data";

export const SERVICES_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading:
    "Engineering excellence. <br /> Strategic intelligence. <br /> Enterprise confidence.",
  subheading:
    "Our value extends beyond individual technologies. We combine architectural intelligence, integrated engineering capabilities, and disciplined execution to establish digital solutions that are strategically relevant, technically resilient, and designed for continued evolution.",
  industries: [
    {
      id: "enterprise-aligned-architecture",
      name: "Enterprise-Aligned Architecture",
      tagline:
        '<strong class="block text-[#061826] mb-1">Where business strategy informs engineering design.</strong>We architect solutions through a comprehensive understanding of enterprise objectives, existing technology ecosystems, integration dependencies, and scalability requirements—ensuring that every engineering decision contributes to a cohesive digital foundation.',
      image: ASSETS.SERVICE_ENTERPRISE_ALIGNED_ARCHITECTURE,
      alt: "Enterprise-Aligned Architecture",
      href: "#",
    },
    {
      id: "multidisciplinary-engineering-convergence",
      name: "Multidisciplinary Engineering Convergence",
      tagline:
        '<strong class="block text-[#061826] mb-1">Specialized capabilities. Unified execution.</strong>Our integrated expertise across artificial intelligence, applications, cloud, data, DevSecOps, and quality engineering enables coordinated technology execution across complex enterprise environments.',
      image: ASSETS.SERVICE_MULTIDISCIPLINARY_ENGINEERING_CONVERGENCE,
      alt: "Multidisciplinary Engineering Convergence",
      href: "#",
    },
    {
      id: "quality-as-an-engineering-imperative",
      name: "Quality as an Engineering Imperative",
      tagline:
        '<strong class="block text-[#061826] mb-1">Precision embedded throughout the lifecycle.</strong>We institutionalize quality through disciplined engineering methodologies, comprehensive validation practices, security-conscious architecture, and continuous performance considerations.',
      image: ASSETS.SERVICE_QUALITY_AS_AN_ENGINEERING_IMPERATIVE,
      alt: "Quality as an Engineering Imperative",
      href: "#",
    },
    {
      id: "collaborative-technology-governance",
      name: "Collaborative Technology Governance",
      tagline:
        '<strong class="block text-[#061826] mb-1">Strategic alignment through transparent execution.</strong>We establish collaborative engagement practices that connect business stakeholders, technology leadership, and engineering teams—enabling informed decisions, architectural consistency, and accountability throughout delivery.',
      image: ASSETS.SERVICE_COLLABORATIVE_TECHNOLOGY_GOVERNANCE,
      alt: "Collaborative Technology Governance",
      href: "#",
    },
  ],
};

export const servicesDifferentIndustriesData =
  SERVICES_DIFFERENT_INDUSTRIES_DATA;
