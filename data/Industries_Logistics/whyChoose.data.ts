import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const LOGISTICS_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Transportation Enterprises Partner with Sparsh IT",
  subheading:
    "Engineering excellence across complex mobility environments.",
  cards: [
    {
      id: "transportation-domain-intelligence",
      number: "01",
      title: "Transportation Domain Intelligence",
      subtitle: "Translating Operational Complexity Into Digital Precision.",
      description:
        "We align technology engineering with mobility operations, logistics dependencies, and enterprise service requirements.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "connected-enterprise-integration",
      number: "02",
      title: "Connected Enterprise Integration",
      subtitle:
        "Establishing interoperability across distributed networks.",
      description:
        "We connect transportation applications, operational data, and enterprise platforms through modern integration architectures.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "predictive-operational-capabilities",
      number: "03",
      title: "Predictive Operational Capabilities",
      subtitle:
        "Advancing mobility decisions through intelligent insights.",
      description:
        "We introduce advanced analytics and AI-assisted capabilities to strengthen operational visibility and planning.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "scalable-mobility-architecture",
      number: "04",
      title: "Scalable Mobility Architecture",
      subtitle:
        "Engineering adaptability across transportation ecosystems.",
      description:
        "We establish resilient technology foundations designed for distributed operations and evolving mobility requirements.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const logisticsWhyChooseData = LOGISTICS_WHY_CHOOSE_DATA;

