import { ASSETS } from "@/constants/images.constants";
import type { EnterpriseAISolutionsData } from "@/data/artificial-intelligence/enterpriseAISolutions.data";

export const QUALITY_ENGINEERING_SOLUTIONS_DATA: EnterpriseAISolutionsData = {
  badge: "QUALITY ENGINEERING",
  heading: "Engineering Confidence. Institutionalizing Quality.",
  description:
    "Quality engineering is fundamental to resilient digital ecosystems and enterprise software excellence. Sparsh IT integrates advanced quality assurance, AI-powered automation, risk-driven validation, and continuous quality intelligence to strengthen application integrity, anticipate vulnerabilities, and accelerate release readiness.",
  items: [
    {
      id: "enterprise-quality-engineering-strategy",
      title: "Enterprise Quality Engineering Strategy",
      description:
        "Architecting Quality Excellence Across the Enterprise.\n\nWe establish comprehensive quality frameworks, assurance objectives, risk-based methodologies, and validation standards aligned with enterprise priorities. Our strategic approach institutionalizes quality governance and engineering excellence throughout the digital delivery lifecycle.",
      iconType: ASSETS.QE_SOLUTIONS_STRATEGY,
    },
    {
      id: "functional-exploratory-quality-assurance",
      title: "Functional & Exploratory Quality Assurance",
      description:
        "Ensuring Functional Precision. Elevating Digital Reliability.\n\nWe evaluate application functionality against business requirements, acceptance criteria, and critical user journeys. Structured functional assurance and exploratory analysis uncover inconsistencies, strengthen application reliability, and enhance confidence in enterprise solutions.",
      iconType: ASSETS.QE_SOLUTIONS_FUNCTIONAL_EXPLORATORY,
    },
    {
      id: "ai-powered-quality-automation-engineering",
      title: "AI-Powered Quality Automation Engineering",
      description:
        "Accelerating Quality Through Intelligent Automation.\n\nWe engineer scalable automation frameworks enhanced by AI-assisted scenario generation, adaptive maintenance, and intelligent execution capabilities. Integrating automation across delivery pipelines accelerates validation cycles, improves consistency, and optimizes engineering efficiency.",
      iconType: ASSETS.QE_SOLUTIONS_AUTOMATION,
    },
    {
      id: "api-microservices-quality-assurance",
      title: "API & Microservices Quality Assurance",
      description:
        "Strengthening Connectivity Across Digital Ecosystems.\n\nWe assess API functionality, service contracts, authentication protocols, exception handling, and distributed service interactions. Our assurance methodologies reinforce integration integrity, interoperability, and operational reliability across interconnected enterprise platforms.",
      iconType: ASSETS.QE_SOLUTIONS_API_MICROSERVICES,
    },
    {
      id: "database-integrity-data-validation",
      title: "Database Integrity & Data Validation",
      description:
        "Safeguarding Data Accuracy Across Enterprise Ecosystems.\n\nWe evaluate database operations, transformation logic, reconciliation processes, and data consistency across interconnected systems. Advanced validation methodologies strengthen information integrity, identify discrepancies, and support reliable enterprise data operations.",
      iconType: ASSETS.QE_SOLUTIONS_DATABASE_INTEGRITY,
    },
    {
      id: "performance-scalability-resilience-engineering",
      title: "Performance, Scalability & Resilience Engineering",
      description:
        "Engineering Operational Excellence Under Dynamic Demand.\n\nWe assess application responsiveness, transaction throughput, workload resilience, and infrastructure scalability under diverse operational conditions. Performance intelligence enables proactive bottleneck identification, resource optimization, and sustained system reliability.",
      iconType: ASSETS.QE_SOLUTIONS_PERFORMANCE_RESILIENCE,
    },
    {
      id: "integration-regression-quality-assurance",
      title: "Integration & Regression Quality Assurance",
      description:
        "Preserving System Integrity Through Continuous Evolution.\n\nWe validate interactions across application components, integrated platforms, and evolving technology architectures. Intelligent regression methodologies help identify unintended changes, preserve functional consistency, and maintain enterprise application stability across releases.",
      iconType: ASSETS.QE_SOLUTIONS_INTEGRATION_REGRESSION,
    },
    {
      id: "continuous-quality-engineering-devsecops",
      title: "Continuous Quality Engineering & DevSecOps Integration",
      description:
        "Embedding Quality Intelligence Into Digital Delivery.\n\nWe integrate continuous assurance practices, automated validation, and quality governance throughout engineering and DevSecOps workflows. This integrated approach enables earlier risk identification, accelerated feedback, and consistent quality across evolving applications.",
      iconType: ASSETS.QE_SOLUTIONS_CONTINUOUS_DEVSECOPS,
    },
    {
      id: "ai-driven-quality-optimization-defect-intelligence",
      title: "AI-Driven Quality Optimization & Defect Intelligence",
      description:
        "Transforming Quality Insights Into Predictive Intelligence.\n\nWe leverage AI-assisted defect analysis, intelligent prioritization, quality analytics, and structured remediation workflows. Predictive insights help identify emerging vulnerabilities, optimize engineering decisions, and accelerate corrective action across the delivery lifecycle.",
      iconType: ASSETS.QE_SOLUTIONS_AI_DEFECT_INTELLIGENCE,
    },
  ],
};

export const qualityEngineeringSolutionsData =
  QUALITY_ENGINEERING_SOLUTIONS_DATA;
