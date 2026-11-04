import { ASSETS } from "@/constants/images.constants";
import type { CustomAppServicesData } from "@/data/application-development/customAppServices.data";

export const EDUCATION_SERVICES_DATA: CustomAppServicesData = {
  heading: "Comprehensive Education & Learning Engineering Services",
  subheading:
    "Engineering intelligent foundations for modern learning ecosystems.",
  description:
    "We integrate education domain understanding, advanced platform engineering, and intelligent digital capabilities to transform learning experiences and institutional operations.",
  cards: [
    {
      id: "learning-platform-modernization",
      title: "01. Learning Platform Modernization",
      description:
        "Rearchitecting Digital Education for Evolving Expectations.\n\nWe modernize learning management environments through scalable platforms, interoperable applications, and accessible digital experiences.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "ai-enhanced-adaptive-learning",
      title: "02. AI-Enhanced Adaptive Learning",
      description:
        "Advancing Personalized Education Through Intelligent Capabilities.\n\nWe introduce AI-assisted recommendations, adaptive learning pathways, and intelligent content delivery supported by appropriate educational oversight.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "digital-classroom-engineering",
      title: "03. Digital Classroom Engineering",
      description:
        "Connecting Learners Through Sophisticated Digital Experiences.\n\nWe develop interactive learning platforms, collaborative educational environments, and integrated virtual classroom capabilities.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "institutional-systems-integration",
      title: "04. Institutional Systems Integration",
      description:
        "Unifying Academic Information Across Connected Platforms.\n\nWe connect student information, enrollment, learning management, and administrative systems through interoperable architectures.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
    {
      id: "educational-data-intelligence",
      title: "05. Educational Data Intelligence",
      description:
        "Transforming Academic Information Into Strategic Insight.\n\nWe establish governed data platforms, advanced analytics capabilities, and institutional reporting environments.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "education-security-quality-engineering",
      title: "06. Education Security & Quality Engineering",
      description:
        "Embedding Digital Trust Across Learning Environments.\n\nWe integrate application assurance, privacy-conscious engineering, accessibility considerations, and security controls across educational platforms.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
  ],
};

export const educationServicesData = EDUCATION_SERVICES_DATA;

