import { ASSETS } from "@/constants/images.constants";

export interface CustomServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  iconType: string;
}

export interface CustomServicesGridData {
  heading: string;
  subheading?: string;
  description?: string;
  items: CustomServiceCardItem[];
}

export const DEVSECOPS_CUSTOM_SERVICES_DATA: CustomServicesGridData = {
  heading: "Enterprise AI Solutions <br /> Advancing Intelligence. Redefining Enterprise Possibilities.",
  description:
    "Artificial intelligence is creating new possibilities for enterprise operations, decision-making, and digital innovation. Sparsh IT helps organizations translate these possibilities into practical AI capabilities aligned with business objectives. From AI strategy and generative engineering to agentic systems, enterprise integration, and responsible AI practices, we focus on building intelligent solutions that can operate within real business environments and deliver meaningful outcomes",
  items: [
    {
      id: "devsecops-strategy-implementation",
      title: "DevSecOps Strategy & Implementation",
      description:
        "Integrating Security Into the Engineering Lifecycle.\n\nWe help organizations incorporate security practices into development and deployment workflows. Through process assessment, engineering standards, and automation, we support secure software delivery without unnecessarily slowing development.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_STRATEGY,
      iconType: "strategy",
    },
    {
      id: "cicd-architecture-pipeline-automation",
      title: "CI/CD Architecture & Pipeline Automation",
      description:
        "Accelerating Delivery Through Repeatable Engineering.\n\nWe design and optimize CI/CD pipelines that automate builds, testing, validation, and deployment activities. These capabilities improve consistency, accelerate feedback, and support reliable software releases.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_CICD,
      iconType: "agentic",
    },
    {
      id: "infrastructure-as-code-cloud-automation",
      title: "Infrastructure as Code & Cloud Automation",
      description:
        "Engineering Consistency Across Environments.\n\nWe automate infrastructure provisioning and configuration through reusable infrastructure definitions and controlled deployment processes. This approach reduces manual effort and supports consistent infrastructure management.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_IAC,
      iconType: "governance",
    },
    {
      id: "containerization-kubernetes-orchestration",
      title: "Containerization & Kubernetes Orchestration",
      description:
        "Orchestrating Modern Applications at Scale.\n\nWe support containerization and Kubernetes engineering to establish consistent application deployment environments. Our capabilities include orchestration, workload configuration, deployment practices, and operational management.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_CONTAINERIZATION,
      iconType: "data-engineering",
    },
    {
      id: "platform-engineering-developer-platforms",
      title: "Platform Engineering & Developer Platforms",
      description:
        "Creating Engineering Foundations That Improve Productivity.\n\nWe develop reusable platform capabilities and standardized workflows that simplify common engineering activities. These platforms help reduce operational friction and enable teams to focus on application development and innovation.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_PLATFORM_ENGINEERING,
      iconType: "generative",
    },
    {
      id: "security-automation-compliance-integration",
      title: "Security Automation & Compliance Integration",
      description:
        "Embedding Security Controls Into Delivery Workflows.\n\nWe integrate appropriate security scanning, dependency analysis, secrets management, and configuration validation into engineering pipelines. These practices help identify risks earlier and strengthen security throughout software delivery.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_SECURITY_AUTOMATION,
      iconType: "digital-workforce",
    },
    {
      id: "site-reliability-engineering",
      title: "Site Reliability Engineering",
      description:
        "Strengthening Availability and Operational Resilience.\n\nWe apply reliability engineering practices to improve service availability, incident response, and operational stability. Through monitoring, automation, and structured incident analysis, we help teams manage production environments more effectively.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_SRE,
      iconType: "analytics",
    },
    {
      id: "observability-monitoring-incident-management",
      title: "Observability, Monitoring & Incident Management",
      description:
        "Improving Visibility Across Distributed Systems.\n\nWe establish monitoring, logging, tracing, and alerting capabilities that provide visibility into application behavior and infrastructure performance. These capabilities support faster troubleshooting and informed operational decisions.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_OBSERVABILITY,
      iconType: "rag",
    },
    {
      id: "release-engineering-deployment-automation",
      title: "Release Engineering & Deployment Automation",
      description:
        "Creating Predictable and Controlled Releases.\n\nWe improve release processes through deployment automation, environment coordination, and structured release practices. Our approach supports repeatability, operational control, and reduced deployment risk.",
      icon: ASSETS.DEVSECOPS_CUSTOM_SERVICES_RELEASE_ENGINEERING,
      iconType: "integration",
    },
  ],
};

export const CUSTOM_SERVICES_DEFAULT_DATA = DEVSECOPS_CUSTOM_SERVICES_DATA;
export const customServicesDefaultData = DEVSECOPS_CUSTOM_SERVICES_DATA;
export const devSecOpsCustomServicesData = DEVSECOPS_CUSTOM_SERVICES_DATA;
