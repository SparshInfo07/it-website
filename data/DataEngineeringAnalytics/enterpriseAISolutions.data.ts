import { ASSETS } from "@/constants/images.constants";
import type {
  AISolutionItem,
  EnterpriseAISolutionsData,
} from "@/data/artificial-intelligence/enterpriseAISolutions.data";

export type { AISolutionItem, EnterpriseAISolutionsData };

export const ENTERPRISE_AI_SOLUTIONS_DATA: EnterpriseAISolutionsData = {
  badge: "",
  heading:
    "Data engineering & analytics <br /> Transforming data complexity into enterprise intelligence.",
  description:
    "Reliable data foundations are essential for enterprise analytics, informed decision-making, and AI adoption. Sparsh IT engineers data platforms and pipelines that help organizations consolidate information, strengthen data integrity, and enable scalable analytical capabilities.",
  items: [
    {
      id: "ai-strategy-consulting",
      title: "Data Architecture & Platform Engineering",
      description:
        "Designing the Foundation for Enterprise Intelligence.\n\nWe define data architectures and platform structures aligned with business requirements, information flows, and analytical objectives. Our approach considers scalability, governance, integration, and the evolving needs of enterprise data environments.",
      iconType: ASSETS.DATA_ENG_ARCHITECTURE,
    },
    {
      id: "agentic-ai-solutions",
      title: "Etl/Elt Pipeline Development",
      description:
        "Building Reliable Data Movement and Transformation.\n\nWe design data pipelines that extract, transform, validate, and deliver information across enterprise systems. Structured pipeline engineering and orchestration help improve consistency, traceability, and processing efficiency.",

      iconType: ASSETS.DATA_ENG_ETL,
    },
    {
      id: "responsible-ai-governance",
      title: "Data Lakehouse & Data Warehouse Engineering",
      description:
        "Establishing Scalable Foundations for Analytics.\n\nWe engineer modern data warehouse and lakehouse environments that support analytical workloads and diverse data requirements. Our approach emphasizes data organization, efficient processing, governed access, and platform scalability.",

      iconType: ASSETS.DATA_ENG_LAKEHOUSE,
    },
    {
      id: "ai-ready-data-engineering",
      title: "Real-Time Data Processing & Streaming",
      description:
        "Enabling Timely Intelligence From Continuous Data Flows.\n\nWe develop streaming architectures that process event data and operational information with low latency. These capabilities support responsive applications, real-time monitoring, and time-sensitive analytical requirements.",

      iconType: ASSETS.DATA_ENG_REALTIME,
    },
    {
      id: "generative-ai-solutions",
      title: "Big Data Engineering",
      description:
        "Processing Complex Data at Enterprise Scale.\n\nWe engineer distributed data processing solutions that support large datasets and computationally intensive workloads. Our focus includes scalable processing, pipeline reliability, performance optimization, and integration with modern data platforms.",

      iconType: ASSETS.DATA_ENG_BIG_DATA,
    },
    {
      id: "ai-agents-digital-workforce",
      title: "Databricks & Distributed Data Processing",
      description:
        "Unlocking the Potential of Modern Data Platforms.\n\nWe engineer data solutions using Databricks, Apache Spark, and related technologies to support large-scale transformation and analytical processing. Our capabilities include distributed processing, pipeline optimization, and integration with cloud data environments.",

      iconType: ASSETS.DATA_ENG_DATABRICKS,
    },
    {
      id: "enterprise-ai-analytics",
      title: "Cloud Data Engineering",
      description:
        "Connecting Cloud Platforms with Enterprise Data Needs.\n\nWe build and optimize cloud-based data pipelines and platforms that support enterprise integration, scalable processing, and analytics. Our approach aligns architecture and services with business requirements and operational priorities.",

      iconType: ASSETS.DATA_ENG_CLOUD,
    },
    {
      id: "rag-enterprise-knowledge",
      title: "Data Quality & Validation Frameworks",
      description:
        "Establishing Trust in Enterprise Information.\n\nWe implement data validation, reconciliation, monitoring, and quality rules to identify inconsistencies across data sources and processing stages. These practices help improve reliability and strengthen confidence in analytical outputs.",

      iconType: ASSETS.DATA_ENG_QUALITY,
    },
    {
      id: "data-integration-transformation",
      title: "Data Integration & Transformation",
      description:
        "Creating Consistency Across Diverse Data Sources.\n\nWe integrate information from applications, databases, external platforms, and enterprise systems. Through structured transformation and validation, we help establish consistent data foundations for operational and analytical use.",

      iconType: ASSETS.DATA_ENG_INTEGRATION,
    },
    {
      id: "bi-analytics-enablement",
      title: "Business Intelligence & Analytics Enablement",
      description:
        "Turning Enterprise Data Into Actionable Insights.\n\nWe establish analytical data foundations that support reporting, performance measurement, trend analysis, and informed decision-making. These capabilities help organizations connect operational information with business priorities.",

      iconType: ASSETS.DATA_ENG_BI,
    },
    {
      id: "data-platform-modernization",
      title: "Data Platform Modernization",
      description:
        "Evolving Data Environments for Future Requirements.\n\nWe assess existing data platforms and identify opportunities to improve scalability, integration, quality, and performance. Modernization initiatives help organizations prepare their data environments for advanced analytics and AI adoption.",

      iconType: ASSETS.DATA_ENG_MODERNIZATION,
    },
  ],
};

export const enterpriseAISolutionsData = ENTERPRISE_AI_SOLUTIONS_DATA;
