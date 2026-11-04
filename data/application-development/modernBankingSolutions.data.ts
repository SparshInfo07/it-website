import { ASSETS } from "@/constants/images.constants";

export interface ModernBankingSolutionItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ModernBankingSolutionsData {
  heading: string;
  headingLine2?: string;
  headingLine3?: string;
  subheading: string;
  solutions: ModernBankingSolutionItem[];
}

export const MODERN_BANKING_SOLUTIONS_DATA: ModernBankingSolutionsData = {
  heading: "How We Help",
  headingLine2: "Modern Banking",
  headingLine3: "Evolve",
  subheading:
    "We support banks and financial institutions across core systems, payments, risk, lending, analytics, compliance, and digital banking.",
  solutions: [
    {
      id: "core-banking-solutions",
      title: "Core Banking Solutions",
      icon: ASSETS.MODERN_BANKING_CORE,
      description:
        "Modernize legacy ledger systems with cloud-native, high-throughput core architectures that support multi-currency accounts, automated reconciliation, and 24/7 transaction processing.",
    },
    {
      id: "payment-processing-solutions",
      title: "Payment Processing Solutions",
      icon: ASSETS.MODERN_BANKING_PAYMENT,
      description:
        "Build high-speed, secure payment gateways and orchestration layers supporting instant cross-border transfers, digital wallets, SEPA, SWIFT, and real-time merchant settlement.",
    },
    {
      id: "risk-management-solutions",
      title: "Risk Management Solutions",
      icon: ASSETS.MODERN_BANKING_RISK,
      description:
        "Implement automated credit scoring, fraud detection algorithms, and real-time transaction monitoring to mitigate systemic and operational risks before they occur.",
    },
    {
      id: "wealth-management-solutions",
      title: "Wealth Management Solutions",
      icon: ASSETS.MODERN_BANKING_WEALTH,
      description:
        "Empower advisors and clients with AI-driven portfolio rebalancing, automated asset management, goal-based planning, and seamless multi-asset trading platforms.",
    },
    {
      id: "loan-management-solutions",
      title: "Loan Management Solutions",
      icon: ASSETS.MODERN_BANKING_LOAN,
      description:
        "Accelerate lending lifecycles from digital loan origination and automated underwriting to servicing, collateral tracking, and debt recovery workflows.",
    },
    {
      id: "financial-analytics-solutions",
      title: "Financial Analytics Solutions",
      icon: ASSETS.MODERN_BANKING_ANALYTICS,
      description:
        "Transform raw transactional data into actionable predictive insights with automated business intelligence dashboards, liquidity forecasting, and customer profitability analytics.",
    },
    {
      id: "regulatory-reporting-solutions",
      title: "Regulatory Reporting Solutions",
      icon: ASSETS.MODERN_BANKING_REGULATORY,
      description:
        "Streamline regulatory compliance with automated, audit-ready data extraction and filing for Basel III/IV, AML/KYC, MiFID II, and local central bank mandates.",
    },
    {
      id: "mobile-banking-solutions",
      title: "Mobile Banking Solutions",
      icon: ASSETS.MODERN_BANKING_MOBILE,
      description:
        "Deliver intuitive, feature-rich iOS and Android mobile banking applications with biometric authentication, card controls, instant bill pay, and personalized financial wellness tools.",
    },
  ],
};

export const modernBankingSolutionsData = MODERN_BANKING_SOLUTIONS_DATA;
