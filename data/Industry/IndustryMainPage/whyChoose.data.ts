import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const INDUSTRY_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  eyebrow: "THE WAY WE THINK",
  heading: "The Way We Think. The Sector Value We Build.",
  subheading: "Engineering Beyond Technology. Advancing Enterprise Potential.",
  description:
    "Our differentiated approach integrates industry intelligence, architectural sophistication, and outcome-oriented engineering to help organizations navigate technological complexity with strategic clarity.",
  cards: [
    {
      id: "industry-centric-philosophy",
      number: "01",
      title: "Industry-Centric Engineering Philosophy",
      subtitle: "Domain Understanding as the Foundation of Innovation.",
      description:
        "We align engineering decisions with sector-specific operating models, business imperatives, and technology requirements to establish solutions grounded in meaningful enterprise relevance.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "intelligent-innovation-emerging-technologies",
      number: "02",
      title: "Intelligent Innovation & Emerging Technologies",
      subtitle: "Transforming Technological Potential Into Enterprise Advantage.",
      description:
        "We bring together artificial intelligence, intelligent automation, advanced analytics, and modern engineering practices to expand operational capabilities and accelerate digital advancement.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "enterprise-modernization-architectural-evolution",
      number: "03",
      title: "Enterprise Modernization & Architectural Evolution",
      subtitle: "Reimagining Established Systems for Future Possibilities.",
      description:
        "We modernize complex technology landscapes through interoperable architectures, cloud-native engineering, and progressive transformation strategies that balance innovation with continuity.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "resilience-scalability-long-term-value",
      number: "04",
      title: "Resilience, Scalability & Long-Term Value",
      subtitle: "Engineering Enterprises to Evolve with Confidence.",
      description:
        "We establish adaptable digital foundations designed to accommodate expanding business demands, evolving technology ecosystems, and sustained enterprise growth.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const whyChooseData = INDUSTRY_WHY_CHOOSE_DATA;
