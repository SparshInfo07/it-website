import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const AI_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Engineering Enterprise Mobility with Precision.",
  subheading: "",
  cards: [
    {
      id: "ai-enterprise-security",
      number: "01",
      title: "Mobile Architecture & Platform Strategy",
      description:
        "Define suitable native or cross-platform engineering approaches aligned with business functionality, performance expectations, and platform requirements.",
      icon: ASSETS.MOBILE_APP_WHY_ARCHITECTURE,
    },
    {
      id: "ai-production-architecture",
      number: "02",
      title: "Native iOS & Android Engineering",
      description:
        "Develop platform-specific applications that integrate modern interface patterns, appropriate device capabilities, and maintainable engineering practices.",
      icon: ASSETS.MOBILE_APP_WHY_NATIVE,
    },
    {
      id: "ai-domain-customization",
      number: "03",
      title: "Cross-Platform Application Engineering",
      description:
        "Establish shared engineering foundations that support consistent functionality and efficient evolution across supported mobile platforms.",
      icon: ASSETS.MOBILE_APP_WHY_CROSS_PLATFORM,
    },
    {
      id: "ai-mlops-lifecycle",
      number: "04",
      title: "Enterprise API & Backend Integration",
      description:
        "Connect mobile applications with secure enterprise APIs, authentication services, data platforms, and operational systems.",
      icon: ASSETS.MOBILE_APP_WHY_API_BACKEND,
    },
    {
      id: "ai-model-Evaluation",
      number: "05",
      title: "Mobile Security & Performance Engineering",
      description:
        "Embed appropriate data protection, access controls, application performance optimization, and device compatibility considerations.",
      icon: ASSETS.MOBILE_APP_WHY_SECURITY_PERFORMANCE,
    },
    {
      id: "ai-security-governance",
      number: "06",
      title: "Mobile Quality & Lifecycle Management",
      description:
        "Integrate functional validation, release coordination, regression testing, and continuous application enhancement.",
      icon: ASSETS.MOBILE_APP_WHY_QUALITY_LIFECYCLE,
    },
  ],
};

export const aiWhyChooseData = AI_WHY_CHOOSE_DATA;
