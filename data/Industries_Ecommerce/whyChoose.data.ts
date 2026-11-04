import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const ECOMMERCE_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Retail Enterprises Partner with Sparsh IT",
  subheading: "Engineering Distinction Across the Commerce Enterprise.",
  cards: [
    {
      id: "commerce-domain-expertise",
      number: "01",
      title: "Commerce Domain Expertise",
      subtitle: "Translating Retail Dynamics Into Technology Advantage.",
      description:
        "We align engineering strategies with customer engagement, merchandising, fulfillment, and enterprise commerce priorities.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "intelligent-experience-innovation",
      number: "02",
      title: "Intelligent Experience Innovation",
      subtitle: "Advancing Commerce Through Customer-Centric Intelligence.",
      description:
        "We integrate sophisticated experience engineering with AI-enhanced personalization and actionable customer insights.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "connected-enterprise-architecture",
      number: "03",
      title: "Connected Enterprise Architecture",
      subtitle: "Unifying Commerce Across Complex Technology Landscapes.",
      description:
        "We connect commerce platforms, customer systems, inventory applications, and operational infrastructure.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "scalable-digital-foundations",
      number: "04",
      title: "Scalable Digital Foundations",
      subtitle: "Architecting Resilience for Continuous Commercial Evolution.",
      description:
        "We establish high-performance commerce ecosystems designed for growth, adaptability, and operational continuity.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const ecommerceWhyChooseData = ECOMMERCE_WHY_CHOOSE_DATA;

