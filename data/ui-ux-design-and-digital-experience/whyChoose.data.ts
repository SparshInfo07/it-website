import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const UI_UX_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Architecting Human-Centered Digital Experiences.",
  subheading: "",
  cards: [
    {
      id: "experience-strategy-user-intelligence",
      number: "01",
      title: "Experience Strategy & User Intelligence",
      description:
        "Establish experience priorities through user research, business analysis, behavioral insights, and digital interaction assessment.",
      icon: ASSETS.EXPERIENCE_STRATEGY_USER_INTELLIGENCE,
    },
    {
      id: "information-architecture-journey-orchestration",
      number: "02",
      title: "Information Architecture & Journey Orchestration",
      description:
        "Structure content, navigation, and user pathways to create intuitive experiences aligned with relevant user objectives.",
      icon: ASSETS.INFORMATION_ARCHITECTURE_JOURNEY_ORCHESTRATION,
    },
    {
      id: "interface-design-interactive-prototyping",
      number: "03",
      title: "Interface Design & Interactive Prototyping",
      description:
        "Translate experience concepts into sophisticated visual interfaces, wireframes, and interactive prototypes for early evaluation.",
      icon: ASSETS.INTERFACE_DESIGN_INTERACTIVE_PROTOTYPING,
    },
    {
      id: "design-systems-component-architecture",
      number: "04",
      title: "Design Systems & Component Architecture",
      description:
        "Develop reusable interface components, visual standards, and interaction patterns that support scalable digital consistency.",
      icon: ASSETS.DESIGN_SYSTEMS_COMPONENT_ARCHITECTURE,
    },
    {
      id: "usability-inclusive-experience-evaluation",
      number: "05",
      title: "Usability & Inclusive Experience Evaluation",
      description:
        "Apply structured usability assessment and accessibility-oriented principles to identify opportunities for experience improvement.",
      icon: ASSETS.USABILITY_INCLUSIVE_EXPERIENCE_EVALUATION,
    },
    {
      id: "design-engineering-collaboration",
      number: "06",
      title: "Design Engineering Collaboration",
      description:
        "Align interface specifications, interaction behaviors, and component requirements with implementation practices to support design fidelity.",
      icon: ASSETS.DESIGN_ENGINEERING_COLLABORATION,
    },
  ],
};

export const uiUxWhyChooseData = UI_UX_WHY_CHOOSE_DATA;
