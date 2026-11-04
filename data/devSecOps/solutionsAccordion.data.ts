export interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export type SolutionsAccordionItemData = AccordionItem;

export interface SolutionsAccordionData {
  heading: string;
  description?: string;
  items: AccordionItem[];
}

export const SOLUTIONS_ACCORDION_DEFAULT_DATA: SolutionsAccordionData = {
  heading: "How We Help <br /> Modern Banking <br /> Evolve",
  description:
    "We support banks and financial institutions across core systems, payments, risk, lending, analytics, compliance, and digital banking.",
  items: [
    {
      id: "core-banking",
      title: "Core Banking Solutions",
      description:
        "Modernise core banking architecture with cloud-ready microservices, high-throughput transaction processing, and seamless ledger integrations.",
      icon: "core-banking",
    },
    {
      id: "payment-processing",
      title: "Payment Processing Solutions",
      description:
        "Build secure, real-time payment rails supporting ISO 20022, instant settlement, merchant acquiring, and cross-border payment gateways.",
      icon: "payment",
    },
    {
      id: "risk-management",
      title: "Risk Management Solutions",
      description:
        "Implement real-time fraud monitoring, automated credit decisioning, AML transaction screening, and systemic risk mitigation models.",
      icon: "risk",
    },
    {
      id: "wealth-management",
      title: "Wealth Management Solutions",
      description:
        "Deliver personalized portfolio management, automated robo-advisory tools, and multi-asset trading integrations for private wealth clients.",
      icon: "wealth",
    },
    {
      id: "loan-management",
      title: "Loan Management Solutions",
      description:
        "Automate end-to-end loan origination, document verification, risk-adjusted underwriting, and servicing for consumer and commercial lending.",
      icon: "loan",
    },
    {
      id: "financial-analytics",
      title: "Financial Analytics Solutions",
      description:
        "Consolidate balance sheet telemetry, liquidity tracking, customer lifetime value, and profitability metrics into executive intelligence dashboards.",
      icon: "analytics",
    },
    {
      id: "regulatory-reporting",
      title: "Regulatory Reporting Solutions",
      description:
        "Streamline regulatory disclosures and audit data pipelines to maintain compliance with Basel IV, Dodd-Frank, and global central bank mandates.",
      icon: "regulatory",
    },
    {
      id: "mobile-banking",
      title: "Mobile Banking Solutions",
      description:
        "Craft intuitive, secure iOS and Android mobile banking applications with biometric authentication, card management, and instant transfers.",
      icon: "mobile",
    },
  ],
};

export const DEVSECOPS_ACCORDION_DATA: SolutionsAccordionData = {
  heading: "Embed Security Into <br /> Every Stage of Delivery",
  description:
    "Integrate security validation into application development, software testing, and infrastructure management to identify vulnerabilities and configuration risks throughout the software development lifecycle. Where supported by the delivery architecture, integrate security scans and policy checks into CI/CD workflows to identify issues before release.",
  items: [
    {
      id: "ci-cd-pipeline-orchestration",
      title: "Static Scanning at Code Commit",
      description:
        "Integrate Static Application Security Testing (SAST) into source-control workflows to analyse code changes for insecure patterns. Surface actionable findings during pull requests and commits, enabling developers to address vulnerabilities before builds progress.",
      icon: "pipeline",
    },
    {
      id: "shift-left-security",
      title: "Threat Modelling",
      description:
        "Map application components, trust boundaries, data flows, and attack surfaces to identify potential threats. Assess abuse scenarios, prioritise risks, and translate findings into security requirements and mitigations during design.",
      icon: "security",
    },
    {
      id: "infrastructure-as-code",
      title: "Shift-Left Static and Dynamic Scanning",
      description:
        "Combine source-code analysis with Dynamic Application Security Testing (DAST) to assess vulnerabilities during development and execution. Integrate checks into CI/CD workflows to detect security issues before production release",
      icon: "iac",
    },
    {
      id: "container-kubernetes-security",
      title: "Automated Security Testing",
      description:
        "Automate repeatable security checks against applications, APIs, and selected security controls. Validate common attack scenarios and configuration weaknesses more frequently, supplementing manual assessments with continuous testing",
      icon: "kubernetes",
    },
    {
      id: "automated-testing-quality-gates",
      title: "Automated Testing & Quality Gates",
      description:
        "Automate repeatable security checks against applications, APIs, and selected security controls. Validate common attack scenarios and configuration weaknesses more frequently, supplementing manual assessments with continuous testing.",
      icon: "testing",
    },
    {
      id: "continuous-compliance-audit",
      title: "Continuous Compliance & Audit Logging",
      description:
        "Automate compliance validations for SOC 2, ISO 27001, and HIPAA while recording tamper-evident audit trails, artifact provenance, and cryptographic signatures across every pipeline event.",
      icon: "compliance",
    },
    {
      id: "secrets-management-zero-trust",
      title: "Secrets Management & Zero Trust Identity",
      description:
        "Eliminate hardcoded credentials with automated secret rotation, short-lived tokens, machine identities, and strict Zero Trust identity verification across microservices.",
      icon: "secrets",
    },
    {
      id: "cloud-telemetry-observability",
      title: "Cloud Telemetry & Sre Observability",
      description:
        "Correlate application metrics, distributed traces, and log telemetry into unified operational dashboards to track SLIs/SLOs and proactively resolve performance degradation.",
      icon: "observability",
    },
    {
      id: "automated-incident-response",
      title: "Automated Incident Response & Self-Healing",
      description:
        "Trigger automated remediation runbooks, alert deduplication, and zero-downtime canary rollbacks to maintain high availability and rapid recovery during production incidents.",
      icon: "incident",
    },
  ],
};

export const devSecOpsAccordionData = DEVSECOPS_ACCORDION_DATA;
export const solutionsAccordionDefaultData = SOLUTIONS_ACCORDION_DEFAULT_DATA;
