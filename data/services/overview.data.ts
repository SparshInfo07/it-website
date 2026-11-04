import { ASSETS } from "@/constants/images.constants";

export interface ServiceCardItem {
  id: string;
  number?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
}

export interface ServiceOverviewData {
  title: string;
  subtitle?: string;
  description?: string;
  services: ServiceCardItem[];
}

export const SERVICE_OVERVIEW_DATA: ServiceOverviewData = {
  title: "An Integrated Spectrum of Enterprise Technology Capabilities.",
  subtitle:
    "Our multidisciplinary expertise brings together strategic advisory, advanced engineering, and emerging technologies to address the evolving demands of the digital enterprise.",
  services: [
    {
      id: "ai-intelligent-engineering",
      number: "01",
      title: "AI & Intelligent Engineering",
      subtitle: "Advancing Intelligence. Redefining Enterprise Possibilities.",
      description:
        "Architecting enterprise-grade AI ecosystems that integrate generative intelligence, autonomous agents, predictive capabilities, and intelligent automation into mission-critical business operations.",
      image: ASSETS.SERVICE_LISTING_AI_INTELLIGENT_ENGINEERING,
      href: "/services/artificial-intelligence",
    },
    {
      id: "devsecops-platform-engineering",
      number: "02",
      title: "DevSecOps & Platform Engineering",
      subtitle:
        "Embedding security. Engineering velocity. Enabling resilience.",
      description:
        "Establishing secure, automated engineering ecosystems that unify development, infrastructure, and operations to accelerate software delivery and strengthen enterprise reliability.",
      image: ASSETS.SERVICE_LISTING_DEVSECOPS_PLATFORM_ENGINEERING,
      href: "/services/devsecops",
    },
    {
      id: "application-development-modernization",
      number: "03",
      title: "Application Development & Modernization",
      subtitle:
        "Architecting digital products. Engineering enterprise evolution.",
      description:
        "Engineering sophisticated digital applications and modernizing complex software landscapes through contemporary architectures, precision-led development, and scalable engineering practices.",
      image: ASSETS.SERVICE_LISTING_APPLICATION_DEVELOPMENT_MODERNIZATION,
      href: "/services/application-development",
    },
    {
      id: "data-engineering-analytics",
      number: "04",
      title: "Data Engineering & Analytics",
      subtitle: "Transforming Data Complexity Into Enterprise Intelligence.",
      description:
        "Orchestrating modern data architectures, intelligent pipelines, and advanced analytics ecosystems that transform enterprise information into actionable strategic intelligence.",
      image: ASSETS.SERVICE_LISTING_DATA_ENGINEERING_ANALYTICS,
      href: "/services/data-engineering-analytics",
    },
    {
      id: "mobile-application-development",
      number: "05",
      title: "Mobile Application Development",
      subtitle: "Engineering Mobility. Elevating Digital Experiences.",
      description:
        "Creating sophisticated mobile ecosystems that converge intuitive user experiences, enterprise integration, and platform-native engineering.",
      image: ASSETS.SERVICE_LISTING_MOBILE_APPLICATION_DEVELOPMENT,
      href: "/services/mobile-application-development",
    },
    {
      id: "ui-ux-design-digital-experience",
      number: "06",
      title: "UI/UX Design & Digital Experience",
      subtitle:
        "Orchestrating human-centered design. Elevating digital interaction.",
      description:
        "Transforming complex digital interactions into cohesive, intuitive experiences through strategic design thinking, experience architecture, and human-centered innovation.",
      image: ASSETS.SERVICE_LISTING_UX_DESIGN_DIGITAL_EXPERIENCE,
      href: "/services/ui-ux-design-and-digital-experience",
    },
    {
      id: "quality-engineering-software-testing",
      number: "07",
      title: "Quality Engineering & Software Testing",
      subtitle: "Engineering Confidence. Institutionalizing Quality.",
      description:
        "Embedding comprehensive quality engineering practices across the software lifecycle to strengthen reliability, accelerate validation, and elevate release confidence.",
      image: ASSETS.SERVICE_LISTING_QUALITY_ENGINEERING_SOFTWARE_TESTING,
      href: "/services/quality-engineering-and-software-testing",
    },
    {
      id: "global-capability-centers",
      number: "08",
      title: "Global Capability Centers (GCC)",
      subtitle: "Global Engineering & Offshore Delivery for Scalable Growth.",
      description:
        "Extending enterprise engineering capabilities through Sparsh IT's established offshore delivery operations, specialized technology expertise, and integrated global execution models.",
      image: ASSETS.SERVICE_LISTING_GLOBAL_CAPABILITY_CENTERS,
      href: "/services/global-capability-centers",
    },
  ],
};

export const SERVICES_OVERVIEW_DATA = SERVICE_OVERVIEW_DATA;
export const servicesOverviewData = SERVICE_OVERVIEW_DATA;
