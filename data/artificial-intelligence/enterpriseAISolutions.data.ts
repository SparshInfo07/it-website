import { ASSETS } from "@/constants/images.constants";

export interface AISolutionItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconType?: string;
}

export interface EnterpriseAISolutionsData {
  badge: string;
  heading: string;
  description: string;
  items: AISolutionItem[];
}

export const ENTERPRISE_AI_SOLUTIONS_DATA: EnterpriseAISolutionsData = {
  badge: "AI SOLUTIONS",
  heading:
    "Enterprise AI solutions <br /> Advancing intelligence. Redefining enterprise possibilities.",
  description:
    "Artificial intelligence is creating new possibilities for enterprise operations, decision-making, and digital innovation. Sparsh IT helps organizations translate these possibilities into practical AI capabilities aligned with business objectives. From AI strategy and generative engineering to agentic systems, enterprise integration, and responsible AI practices, we focus on building intelligent solutions that can operate within real business environments and deliver meaningful outcomes",
  items: [
    {
      id: "ai-strategy-consulting",
      title: "AI Strategy & Consulting",
      description:
        "Establishing a Strategic Foundation for AI Adoption.\n\nWe help organizations identify where artificial intelligence can create meaningful business value. Through use-case assessment, opportunity analysis, architecture planning, and implementation roadmaps, we connect AI initiatives with operational priorities and long-term business objectives.",
      iconType: ASSETS.AI_STRATEGY,
    },
    {
      id: "agentic-ai-solutions",
      title: "Agentic AI Solutions",
      description:
        "Engineering Intelligent Systems for Complex Workflows.\n\nWe design agentic AI solutions that coordinate tasks, interact with approved tools, and support multistep business processes. Our approach emphasizes structured orchestration, controlled execution, appropriate oversight, and integration with enterprise systems.",
      iconType: ASSETS.AGENTIC_AI,
    },
    {
      id: "responsible-ai-governance",
      title: "Responsible AI & Governance",
      description:
        "Embedding Trust, Transparency, and Accountability.\n\nWe help organizations incorporate governance, privacy, security, risk assessment, and evaluation practices into AI development and deployment. These capabilities support responsible adoption while aligning AI solutions with enterprise policies and applicable requirements.",
      iconType: ASSETS.AI_RESPONSIBLE_AI,
    },
    {
      id: "ai-ready-data-engineering",
      title: "AI-Ready Data Engineering",
      description:
        "Establishing Reliable Foundations for Enterprise AI.\n\nWe prepare enterprise data for AI applications through integration, transformation, quality management, and structured data pipelines. These foundations support consistent information access and more dependable AI development and implementation.",
      iconType: ASSETS.AI_READY_DATA,
    },
    {
      id: "generative-ai-solutions",
      title: "Generative AI Solutions & Engineering",
      description:
        "Translating Generative Capabilities Into Business Applications.\n\nWe develop generative AI applications that support enterprise knowledge access, document processing, content generation, and business workflow enhancement. Our engineering approach considers model selection, contextual information, security, and integration requirements.",
      iconType: ASSETS.AI_GENERATIVE_AI,
    },
    {
      id: "ai-agents-digital-workforce",
      title: "AI Agents & Digital Workforce",
      description:
        "Extending Operational Capabilities Through Intelligent Automation.\n\nWe design AI agents to support repetitive, knowledge-intensive, and multistep business activities. By connecting agents with approved enterprise tools and workflows, we help organizations introduce controlled automation with appropriate permissions, escalation paths, and human oversight.",
      iconType: ASSETS.AI_AGENTS_DIGITAL,
    },
    {
      id: "enterprise-ai-analytics",
      title: "Enterprise AI Analytics & Insights",
      description:
        "Converting Enterprise Data Into Actionable Intelligence.\n\nWe apply machine learning, predictive analytics, and anomaly detection to identify patterns, anticipate trends, and support informed decisions. These capabilities help organizations derive greater value from operational data and strengthen analytical decision-making.",
      iconType: ASSETS.AI_ENTERPRISE_AI,
    },
    {
      id: "rag-enterprise-knowledge",
      title: "Retrieval-Augmented Generation & Enterprise Knowledge",
      description:
        "Connecting AI with Relevant Enterprise Information.\n\nWe develop retrieval-augmented generation solutions that connect language models with relevant enterprise data and knowledge sources. Through retrieval design, contextual grounding, and response evaluation, we help improve the relevance and reliability of AI-generated information.",
      iconType: ASSETS.AI_RETRIEVAL_AUGMENTED,
    },
    {
      id: "enterprise-ai-integration",
      title: "Enterprise AI Integration",
      description:
        "Integrating Intelligence Into Existing Business Environments.\n\nWe connect AI capabilities with enterprise applications, APIs, data platforms, and operational workflows. This integration helps organizations incorporate AI into established business processes rather than treating it as a separate or isolated capability.",
      iconType: ASSETS.ENTERPRISE_INTEGRATION,
    },
  ],
};

export const enterpriseAISolutionsData = ENTERPRISE_AI_SOLUTIONS_DATA;
