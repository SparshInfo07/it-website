import { ASSETS } from "@/constants/images.constants";

export interface AISolutionItem {
  id: string;
  title: string;
  description: string;
  iconType: string;
}

export interface EnterpriseAISolutionsData {
  badge: string;
  heading: string;
  description: string;
  items: AISolutionItem[];
}

export const ENTERPRISE_AI_SOLUTIONS_DATA: EnterpriseAISolutionsData = {
  badge: "",
  heading: "Engineering Mobility. <br /> Elevating Digital Experiences.",
  description:
    "Mobile applications connect users, enterprise services, and business processes through accessible digital experiences. Sparsh IT engineers mobile solutions that combine platform expertise, scalable integration, and disciplined development to support secure, dependable, and engaging applications.",
  items: [
    {
      id: "native-ios-engineering",
      title: "Native iOS Application Engineering",
      description:
        "Creating Purposeful Experiences Across Apple Devices.\n\nWe develop iOS applications aligned with business requirements, platform standards, and user expectations. Our approach emphasizes intuitive interactions, maintainable architecture, secure data handling, and dependable performance.",
      iconType: ASSETS.MOBILE_APP_NATIVE_IOS,
    },
    {
      id: "native-android-engineering",
      title: "Native Android Application Engineering",
      description:
        "Building Reliable Applications for Diverse User Environments.\n\nWe engineer Android applications designed around business workflows, device requirements, and user needs. Our focus includes usability, performance, security, integration, and long-term maintainability.",
      iconType: ASSETS.MOBILE_APP_NATIVE_ANDROID,
    },
    {
      id: "cross-platform-development",
      title: "Cross-Platform Mobile Development",
      description:
        "Extending Digital Reach Through Unified Engineering.\n\nWe develop cross-platform applications using suitable frameworks and architectural approaches. Technology selection considers feature complexity, performance requirements, platform integration, and ongoing maintenance.",
      iconType: ASSETS.MOBILE_APP_CROSS_PLATFORM,
    },
    {
      id: "enterprise-mobility-solutions",
      title: "Enterprise Mobility Solutions",
      description:
        "Connecting Mobile Experiences with Business Operations.\n\nWe develop mobile capabilities that support workforce productivity, field operations, customer engagement, and enterprise workflows. Solutions are designed to integrate with business systems while addressing appropriate access and security requirements.",
      iconType: ASSETS.MOBILE_APP_ENTERPRISE_MOBILITY,
    },
    {
      id: "mobile-application-architecture",
      title: "Mobile Application Architecture",
      description:
        "Establishing a Strong Foundation for Mobile Products.\n\nWe define mobile application structures, technology choices, integration patterns, and performance considerations. Our architectural approach supports maintainability, scalability, and consistent application behavior.",
      iconType: ASSETS.MOBILE_APP_ARCHITECTURE,
    },
    {
      id: "api-backend-integration",
      title: "API & Backend Integration",
      description:
        "Connecting Mobile Applications with Enterprise Services.\n\nWe integrate mobile applications with APIs, backend services, databases, and authentication systems. Our approach supports secure communication, efficient data exchange, and consistent functionality.",
      iconType: ASSETS.MOBILE_APP_API_BACKEND,
    },
    {
      id: "mobile-application-modernization",
      title: "Mobile Application Modernization",
      description:
        "Evolving Existing Applications for New Expectations.\n\nWe assess existing mobile applications and identify opportunities to improve architecture, usability, performance, and security. Modernization initiatives align technical improvements with business priorities and application lifecycle needs.",
      iconType: ASSETS.MOBILE_APP_MODERNIZATION,
    },
    {
      id: "performance-compatibility-engineering",
      title: "Performance & Compatibility Engineering",
      description:
        "Delivering Dependable Experiences Across Devices.\n\nWe evaluate application responsiveness, device compatibility, resource utilization, and user interactions. Targeted optimization helps strengthen reliability and provide a consistent experience across supported environments.",
      iconType: ASSETS.MOBILE_APP_PERFORMANCE,
    },
    {
      id: "mobile-security-integration",
      title: "Mobile Security Integration",
      description:
        "Protecting Data and Application Interactions.\n\nWe incorporate appropriate authentication, authorization, secure communication, and data protection practices into mobile applications. These measures help address security requirements throughout the application lifecycle.",
      iconType: ASSETS.MOBILE_APP_SECURITY,
    },
  ],
};

export const enterpriseAISolutionsData = ENTERPRISE_AI_SOLUTIONS_DATA;
