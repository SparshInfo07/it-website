import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const SERVICE_APP_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Transforming Application Landscapes Into <br /> Strategic Digital Assets.",
  subheading:
    "Sparsh IT enables enterprises to transcend architectural limitations and evolve complex software environments into adaptable, high-performing digital ecosystems aligned with long-term business ambitions.",
  cards: [
    {
      id: "accelerated-digital-innovation",
      number: "01",
      title: "Accelerated Digital Innovation",
      description:
        "From Strategic Concepts to Enterprise-Ready Applications.\n\nTranslate evolving business requirements into sophisticated digital applications through modern development practices and adaptable engineering architectures.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "architectural-agility-scalability",
      number: "02",
      title: "Architectural Agility & Scalability",
      description:
        "Engineering Systems Designed for Evolution.\n\nEstablish modular, maintainable application foundations capable of accommodating changing workloads, functional requirements, and enterprise integration needs.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "legacy-complexity-reduction",
      number: "03",
      title: "Legacy Complexity Reduction",
      description:
        "Modernizing Critical Systems with Strategic Precision.\n\nAddress accumulated technical debt, architectural constraints, and fragmented application dependencies through purposeful modernization initiatives.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "elevated-application-performance",
      number: "04",
      title: "Elevated Application Performance",
      description:
        "Strengthening Reliability Across Digital Interactions.\n\nOptimize application behavior, responsiveness, integration efficiency, and technical resilience to support dependable enterprise operations.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const serviceAppWhyChooseData = SERVICE_APP_WHY_CHOOSE_DATA;
