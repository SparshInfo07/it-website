import { ASSETS } from "@/constants/images.constants";
import type { CustomAppServicesData } from "@/data/application-development/customAppServices.data";

export const BANKING_SERVICES_DATA: CustomAppServicesData = {
  heading: "Comprehensive Banking & FinTech Engineering Services",
  subheading: "Engineering the Next Generation of Financial Infrastructure.",
  description:
    "We bring together financial domain intelligence, sophisticated technology architectures, and advanced digital capabilities to modernize critical banking infrastructure and enable intelligent financial operations.",
  cards: [
    {
      id: "core-banking-transformation",
      title: "01. Core Banking Transformation",
      description:
        "Modernizing the Architectural Foundations of Finance.\n\nWe engineer modular banking ecosystems, modern transaction architectures, and integrated financial platforms that enable institutional agility while preserving operational continuity.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "digital-payments-transaction-engineering",
      title: "02. Digital Payments & Transaction Engineering",
      description:
        "Orchestrating Secure, Seamless Financial Exchange.\n\nWe develop sophisticated payment infrastructures, transaction orchestration capabilities, and interoperable financial integrations designed to support evolving payment ecosystems.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "ai-driven-financial-risk-intelligence",
      title: "03. AI-Driven Financial Risk Intelligence",
      description:
        "Advancing Financial Decision-Making Through Predictive Intelligence.\n\nWe integrate advanced analytics, machine learning, and intelligent anomaly detection to strengthen risk visibility, enhance fraud identification, and support informed financial decisions.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "digital-wealth-investment-platforms",
      title: "04. Digital Wealth & Investment Platforms",
      description:
        "Elevating Investment Intelligence Through Digital Innovation.\n\nWe architect investment management ecosystems, portfolio intelligence capabilities, and sophisticated digital advisory platforms that enhance financial insight and client engagement.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
    {
      id: "intelligent-lending-credit-solutions",
      title: "05. Intelligent Lending & Credit Solutions",
      description:
        "Transforming Credit Operations Through Engineering Precision.\n\nWe modernize lending ecosystems through automated origination workflows, intelligent documentation, integrated underwriting support, and scalable servicing architectures.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "financial-governance-regulatory-engineering",
      title: "06. Financial Governance & Regulatory Engineering",
      description:
        "Institutionalizing Transparency Across Financial Operations.\n\nWe establish governance-aligned data architectures, compliance-oriented workflows, and auditable financial information systems that strengthen institutional oversight.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
  ],
};

export const bankingServicesData = BANKING_SERVICES_DATA;
