import { ASSETS } from "@/constants/images.constants";

export interface CustomAppServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CustomAppServicesData {
  tag?: string;
  heading: string;
  subheading?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  cards: CustomAppServiceItem[];
}

export const CUSTOM_APP_SERVICES_DATA: CustomAppServicesData = {
  heading: "Application Development & Modernization",
  subheading:
    "Architecting digital products. Engineering enterprise evolution.",
  description:
    "Enterprise applications must evolve alongside business strategy, customer expectations, and technological advancement. Sparsh IT engineers new applications and modernizes existing systems to establish adaptable, secure, and scalable digital foundations.",
  cta: {
    label: "Explore Application Development Services",
    href: "/contact-us",
  },
  cards: [
    {
      id: "custom-software-enterprise-engineering",
      title: "Custom Software & Enterprise Application Engineering",
      description:
        "Translating Business Requirements Into Purpose-Built Solutions.\n\nWe design and develop software applications aligned with business workflows, operational requirements, and strategic objectives. Our approach connects requirements, architecture, development, and validation to deliver solutions tailored to enterprise needs.",
      icon: ASSETS.CUSTOM_APP_CUSTOM_SOFTWARE,
    },
    {
      id: "full-stack-application-development",
      title: "Full-Stack Application Development",
      description:
        "Connecting Digital Experiences with Robust Engineering.\n\nWe engineer applications across frontend interfaces, backend services, databases, and integration layers. This integrated approach supports consistency between user experience, application functionality, and underlying technical architecture.",
      icon: ASSETS.CUSTOM_APP_FULL_STACK,
    },
    {
      id: "web-application-architecture-development",
      title: "Web Application Architecture & Development",
      description:
        "Engineering Digital Platforms for Evolving Requirements.\n\nWe develop web applications designed around functionality, usability, performance, and maintainability. Our approach considers application architecture, integration requirements, security, and the demands of changing business environments.",
      icon: ASSETS.CUSTOM_APP_WEB_ARCHITECTURE,
    },
    {
      id: "api-engineering-enterprise-integration",
      title: "API Engineering & Enterprise Integration",
      description:
        "Connecting Applications Through Reliable Interfaces.\n\nWe design APIs and integration components that enable secure communication between applications and enterprise services. Our engineering practices address interface consistency, data exchange, access controls, and long-term maintainability.",
      icon: ASSETS.CUSTOM_APP_API_INTEGRATION,
    },
    {
      id: "microservices-distributed-systems-architecture",
      title: "Microservices & Distributed Systems Architecture",
      description:
        "Designing Modular and Adaptable Application Ecosystems.\n\nWe engineer distributed application architectures that support modularity, scalability, and independent service evolution. Our approach considers service boundaries, communication patterns, operational complexity, and system reliability.",
      icon: ASSETS.CUSTOM_APP_MICROSERVICES,
    },
    {
      id: "legacy-application-modernization",
      title: "Legacy Application Modernization",
      description:
        "Evolving Established Systems for Future Demands.\n\nWe assess existing applications and define modernization approaches based on business priorities, technical constraints, and operational requirements. Through refactoring, re-platforming, re-architecture, or selective replacement, we help organizations evolve their technology landscape.",
      icon: ASSETS.CUSTOM_APP_LEGACY_MODERNIZATION,
    },
    {
      id: "application-re-engineering-refactoring",
      title: "Application Re-Engineering & Refactoring",
      description:
        "Reducing Technical Complexity While Preserving Business Value.\n\nWe identify opportunities to improve code structure, application maintainability, performance, and architectural consistency. Targeted re-engineering helps reduce technical debt and create a stronger foundation for future enhancements.",
      icon: ASSETS.CUSTOM_APP_RE_ENGINEERING,
    },
    {
      id: "enterprise-platform-development",
      title: "Enterprise Platform Development",
      description:
        "Building Digital Foundations for Complex Business Operations.\n\nWe develop enterprise platforms that support business workflows, system integration, and evolving operational requirements. Our focus is on creating maintainable solutions aligned with enterprise architecture and long-term objectives.",
      icon: ASSETS.CUSTOM_APP_ENTERPRISE_PLATFORM,
    },
    {
      id: "application-performance-engineering",
      title: "Application Performance Engineering",
      description:
        "Improving Responsiveness, Stability, and Efficiency.\n\nWe assess application behavior, identify performance bottlenecks, and implement targeted improvements. These activities help strengthen responsiveness, optimize resource utilization, and improve the overall application experience.",
      icon: ASSETS.CUSTOM_APP_PERFORMANCE,
    },
  ],
};

export const customAppServicesData = CUSTOM_APP_SERVICES_DATA;
