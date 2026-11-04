import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const SERVICES_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Industry Intelligence. <br /> Technology Without Boundaries.",
  description:
    "Technology transformation is most effective when engineering innovation is informed by a deep appreciation of industry dynamics, operational complexity, and evolving enterprise expectations. <br /><br /> Sparsh IT applies its multidisciplinary engineering expertise across diverse industries, aligning digital capabilities with sector-specific priorities to advance operational excellence, strengthen resilience, and accelerate transformation.",
  cards: [
    {
      id: "banking-financial-services",
      number: "01",
      title: "Banking & Financial Services",
      subtitle: "Engineering Trust. Advancing Financial Innovation.",
      description:
        "Enabling secure digital ecosystems, intelligent data architectures, resilient applications, and technology modernization aligned with the evolving demands of financial enterprises.",
      icon: ASSETS.SERVICE_BANKING,
    },
    {
      id: "retail-e-commerce",
      number: "02",
      title: "Retail & E-Commerce",
      subtitle: "Reimagining Commerce Through Digital Intelligence.",
      description:
        "Engineering connected commerce platforms, intelligent customer experiences, scalable digital applications, and analytics-driven ecosystems that support evolving consumer expectations.",
      icon: ASSETS.SERVICE_RETAIL,
    },
    {
      id: "travel-transportation",
      number: "03",
      title: "Travel & Transportation",
      subtitle: "Connecting Mobility, Operations, and Digital Innovation.",
      description:
        "Advancing technology ecosystems that integrate operational intelligence, connected applications, data-driven visibility, and resilient digital infrastructure.",
      icon: ASSETS.SERVICE_TRANSPORT,
    },
    {
      id: "hospitality",
      number: "04",
      title: "Hospitality",
      subtitle: "Elevating Experiences Through Connected Technology.",
      description:
        "Enabling integrated digital experiences, intelligent service operations, modern applications, and data-informed capabilities that support hospitality transformation.",
      icon: ASSETS.SERVICE_HOSPITALITY,
    },
    {
      id: "healthcare-life-sciences",
      number: "05",
      title: "Healthcare & Life Sciences",
      subtitle:
        "Advancing digital innovation with precision and responsibility.",
      description:
        "Supporting secure information ecosystems, modern digital applications, intelligent workflows, and data engineering capabilities aligned with the complex requirements of healthcare and life sciences.",
      icon: ASSETS.SERVICE_HEALTHCARE,
    },
    {
      id: "education-learning",
      number: "06",
      title: "Education & Learning",
      subtitle: "Empowering Knowledge Through Digital Transformation.",
      description:
        "Engineering connected learning platforms, accessible digital experiences, intelligent knowledge ecosystems, and scalable technology foundations that support evolving educational models.",
      icon: ASSETS.SERVICE_EDUCATION,
    },
  ],
};

export const servicesWhyChooseData = SERVICES_WHY_CHOOSE_DATA;
