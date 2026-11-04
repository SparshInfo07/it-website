import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const BANKING_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Financial Institutions Partner with Sparsh IT",
  subheading:
    "Sophisticated engineering for high-trust financial environments.",
  cards: [
    {
      id: "financial-domain-intelligence",
      number: "01",
      title: "Financial Domain Intelligence",
      subtitle: "Aligning Technology with Institutional Priorities.",
      description:
        "We translate complex financial workflows, operational dependencies, and business requirements into strategically aligned engineering solutions.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "security-centric-architecture",
      number: "02",
      title: "Security-Centric Architecture",
      subtitle: "Engineering Confidence Across Financial Ecosystems.",
      description:
        "We incorporate comprehensive security engineering, governance controls, and resilient architectural principles throughout financial technology delivery.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "enterprise-banking-modernization",
      number: "03",
      title: "Enterprise Banking Modernization",
      subtitle: "Advancing Innovation While Preserving Financial Continuity.",
      description:
        "We modernize established financial platforms through progressive architectural transformation and integrated technology strategies.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "scalable-financial-engineering",
      number: "04",
      title: "Scalable Financial Engineering",
      subtitle: "Architecting Performance for Evolving Financial Demands.",
      description:
        "We develop adaptable digital foundations engineered to accommodate increasing transaction complexity, operational scale, and emerging financial services.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const bankingWhyChooseData = BANKING_WHY_CHOOSE_DATA;
