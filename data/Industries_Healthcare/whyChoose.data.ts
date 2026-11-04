import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const HEALTHCARE_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Healthcare Organizations Partner with Sparsh IT",
  subheading:
    "Sophisticated engineering for sensitive healthcare environments.",
  cards: [
    {
      id: "healthcare-domain-understanding",
      number: "01",
      title: "Healthcare Domain Understanding",
      subtitle: "Engineering with Clinical and Operational Context.",
      description:
        "We align technology capabilities with healthcare workflows, organizational requirements, and complex information dependencies.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "privacy-conscious-architecture",
      number: "02",
      title: "Privacy-Conscious Architecture",
      subtitle:
        "Strengthening confidence across digital health ecosystems.",
      description:
        "We integrate security engineering, appropriate privacy controls, and governance-oriented practices throughout solution delivery.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "connected-clinical-platforms",
      number: "03",
      title: "Connected Clinical Platforms",
      subtitle: "Bridging Fragmented Systems Through Interoperability.",
      description:
        "We establish integrated architectures connecting clinical applications, operational platforms, and healthcare data environments.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "responsible-healthcare-innovation",
      number: "04",
      title: "Responsible Healthcare Innovation",
      subtitle: "Advancing Intelligence with Appropriate Oversight.",
      description:
        "We enable AI-assisted workflows and intelligent digital capabilities supported by governance and human-centered design.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const healthcareWhyChooseData = HEALTHCARE_WHY_CHOOSE_DATA;

