import { ASSETS } from "@/constants/images.constants";
import type { SolutionsAccordionData } from "@/data/solutionsAccordion";

export const SERVICE_APP_ACCORDION_DATA: SolutionsAccordionData = {
  heading: "Architecting Applications For <br /> Enterprise Evolution.",
  items: [
    {
      id: "enterprise-application-architecture",
      title: "Enterprise Application Architecture",
      description:
        "Define robust solution architectures that align business functionality, security requirements, integration patterns, and long-term maintainability.",
      icon: ASSETS.SOLUTIONS_ACCORDION_ENTERPRISE_ARCH,
    },
    {
      id: "full-stack-digital-product-engineering",
      title: "Full-Stack & Digital Product Engineering",
      description:
        "Engineer sophisticated web and enterprise applications through coordinated frontend, backend, API, and database development.",
      icon: ASSETS.SOLUTIONS_ACCORDION_FULL_STACK,
    },
    {
      id: "microservices-distributed-systems",
      title: "Microservices & Distributed Systems",
      description:
        "Establish modular service architectures, resilient communication patterns, and independently evolving application components where appropriate.",
      icon: ASSETS.SOLUTIONS_ACCORDION_MICROSERVICES,
    },
    {
      id: "legacy-re-engineering-modernization",
      title: "Legacy Re-Engineering & Modernization",
      description:
        "Evaluate established applications and implement targeted refactoring, re-platforming, re-architecture, or replacement strategies.",
      icon: ASSETS.SOLUTIONS_ACCORDION_LEGACY_RE_ENGINEERING,
    },
    {
      id: "api-enterprise-integration-engineering",
      title: "API & Enterprise Integration Engineering",
      description:
        "Design secure, maintainable application interfaces and integration components that connect enterprise services and operational systems.",
      icon: ASSETS.SOLUTIONS_ACCORDION_API_INTEGRATION,
    },
    {
      id: "application-quality-performance-engineering",
      title: "Application Quality & Performance Engineering",
      description:
        "Embed performance assessment, security-conscious development, automated validation, and lifecycle optimization into application engineering.",
      icon: ASSETS.SOLUTIONS_ACCORDION_QUALITY_PERFORMANCE,
    },
  ],
};

export const serviceAppAccordionData = SERVICE_APP_ACCORDION_DATA;
