import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const HOSPITALITY_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Hospitality Enterprises Partner with Sparsh IT",
  subheading:
    "Engineering distinction across experience-driven enterprises.",
  cards: [
    {
      id: "hospitality-domain-understanding",
      number: "01",
      title: "Hospitality Domain Understanding",
      subtitle: "Aligning Technology with Service Excellence.",
      description:
        "We engineer digital solutions informed by guest expectations, property operations, and hospitality business priorities.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "intelligent-experience-innovation",
      number: "02",
      title: "Intelligent Experience Innovation",
      subtitle:
        "Elevating guest engagement through advanced technology.",
      description:
        "We combine digital experience engineering, personalization capabilities, and connected service platforms.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "enterprise-hospitality-integration",
      number: "03",
      title: "Enterprise Hospitality Integration",
      subtitle:
        "Unifying complex property technology environments.",
      description:
        "We connect reservations, property management, payments, customer platforms, and operational applications.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "scalable-hospitality-engineering",
      number: "04",
      title: "Scalable Hospitality Engineering",
      subtitle:
        "Architecting digital foundations for evolving service demands.",
      description:
        "We establish resilient, secure technology environments designed for operational continuity and enterprise expansion.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const hospitalityWhyChooseData = HOSPITALITY_WHY_CHOOSE_DATA;

