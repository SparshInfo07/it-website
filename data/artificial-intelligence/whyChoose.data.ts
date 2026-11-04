import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const AI_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Architecting Intelligence for Enterprise-Scale Transformation.",
  subheading:
    "Enterprise AI demands more than sophisticated models. It requires a coordinated engineering ecosystem encompassing data readiness, intelligent orchestration, system integration, evaluation, and responsible operational governance.",
  cards: [
    {
      id: "ai-enterprise-security",
      number: "01",
      title: "Machine Learning & Predictive Intelligence",
      description:
        "Architect advanced machine learning solutions that transform complex datasets into predictive capabilities, intelligent classification, anomaly identification, and business-oriented analytical insights.",
      icon: ASSETS.AI_MACHINE_LEARNING_PREDICTIVE_INTELLIGENCE,
    },
    {
      id: "ai-production-architecture",
      number: "02",
      title: "Generative AI & Foundation Model Engineering",
      description:
        "Engineer generative AI applications using large language models, contextual augmentation, model evaluation frameworks, and enterprise-specific knowledge integration to support sophisticated information-driven workflows.",
      icon: ASSETS.AI_GENERATIVE_FOUNDATION_MODEL_ENGINEERING,
    },
    {
      id: "ai-domain-customization",
      number: "03",
      title: "Agentic Architecture & Intelligent Orchestration",
      description:
        "Design interconnected AI agents capable of coordinating approved tools, enterprise applications, and multistage business workflows through structured orchestration, defined execution boundaries, and appropriate oversight.",
      icon: ASSETS.AI_AGENTIC_ARCHITECTURE_ORCHESTRATION,
    },
    {
      id: "ai-mlops-lifecycle",
      number: "04",
      title: "Enterprise Data & Knowledge Integration",
      description:
        "Establish AI-ready data foundations through advanced data pipelines, semantic retrieval, knowledge integration, and governed information architectures that support contextual intelligence.",
      icon: ASSETS.AI_ENTERPRISE_DATA_KNOWLEDGE_INTEGRATION,
    },
    {
      id: "ai-model-Evaluation",
      number: "05",
      title: "AI Lifecycle Engineering & Evaluation",
      description:
        "Implement model evaluation, deployment controls, performance observability, and lifecycle management practices to support dependable AI behavior across evolving operational environments.",
      icon: ASSETS.AI_LIFECYCLE_ENGINEERING_EVALUATION,
    },
    {
      id: "ai-security-governance",
      number: "06",
      title: "Responsible AI, Security & Governance",
      description:
        "Integrate privacy safeguards, access controls, model risk considerations, traceability, and responsible AI principles into the architecture and operation of intelligent enterprise solutions.",
      icon: ASSETS.AI_RESPONSIBLE_SECURITY_GOVERNANCE,
    },
  ],
};

export const aiWhyChooseData = AI_WHY_CHOOSE_DATA;
