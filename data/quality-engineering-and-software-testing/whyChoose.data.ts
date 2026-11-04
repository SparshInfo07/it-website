import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const QUALITY_ENGINEERING_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Engineering Intelligence. <br /> Advancing Quality Across the Software Lifecycle.",
  cards: [
    {
      id: "enterprise-quality-strategy-architecture",
      number: "01",
      title: "Enterprise Quality Strategy & Architecture",
      description:
        "Establish risk-aligned quality frameworks, intelligent validation methodologies, coverage priorities, and structured governance practices to institutionalize engineering excellence.",
      icon: ASSETS.QE_WHY_CHOOSE_STRATEGY_ARCHITECTURE,
    },
    {
      id: "functional-exploratory-quality-assurance",
      number: "02",
      title: "Functional & Exploratory Quality Assurance",
      description:
        "Evaluate business-critical workflows, application behavior, complex scenarios, and digital interactions through systematic assurance and intelligent validation methodologies.",
      icon: ASSETS.QE_WHY_CHOOSE_FUNCTIONAL_ASSURANCE,
    },
    {
      id: "api-integration-quality-engineering",
      number: "03",
      title: "API & Integration Quality Engineering",
      description:
        "Strengthen service integrity, API contracts, authentication protocols, exception handling, and interoperability across interconnected enterprise ecosystems.",
      icon: ASSETS.QE_WHY_CHOOSE_API_INTEGRATION,
    },
    {
      id: "data-integrity-intelligent-validation",
      number: "04",
      title: "Data Integrity & Intelligent Validation",
      description:
        "Establish comprehensive data reconciliation, transformation assurance, database integrity controls, and AI-assisted anomaly detection to safeguard enterprise information accuracy.",
      icon: ASSETS.QE_WHY_CHOOSE_DATA_INTEGRITY,
    },
    {
      id: "ai-powered-automation-continuous-quality",
      number: "05",
      title: "AI-Powered Automation & Continuous Quality Engineering",
      description:
        "Architect scalable automation frameworks incorporating AI-assisted scenario generation, adaptive automation capabilities, and continuous quality integration across DevSecOps pipelines.",
      icon: ASSETS.QE_WHY_CHOOSE_AUTOMATION_CONTINUOUS,
    },
    {
      id: "performance-resilience-release-assurance",
      number: "06",
      title: "Performance, Resilience & Release Assurance",
      description:
        "Evaluate application responsiveness, enterprise workload scalability, operational resilience, and release readiness through advanced performance intelligence and risk-driven assurance.",
      icon: ASSETS.QE_WHY_CHOOSE_PERFORMANCE_RESILIENCE,
    },
  ],
};

export const qualityEngineeringWhyChooseData = QUALITY_ENGINEERING_WHY_CHOOSE_DATA;
