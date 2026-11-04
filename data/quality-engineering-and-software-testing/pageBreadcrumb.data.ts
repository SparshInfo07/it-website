import { ASSETS } from "@/constants/images.constants";

export interface QualityEngineeringPageBreadcrumbData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
  fullHeight?: boolean;
}

export const QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA: QualityEngineeringPageBreadcrumbData = {
  title: "Quality Engineering & AI-Powered Assurance",
  subtitle:
    "We integrate advanced quality engineering, AI-powered automation, and intelligent validation frameworks throughout the software development lifecycle to strengthen application integrity, anticipate quality risks, and elevate enterprise software reliability. Our approach combines generative AI, predictive defect analytics, and continuous quality orchestration to accelerate testing efficiency and establish confidence across complex digital ecosystems.\n\nby embedding AI-driven intelligence into engineering workflows, we enable organizations to proactively identify vulnerabilities, optimize test coverage, accelerate release cycles, and achieve sustained digital excellence.",
  backgroundImage: ASSETS.QUALITY_ENGINEERING_BANNER,
  ctaText: "Discuss Your QA Requirements",
  ctaHref: "/contact-us",
  fullHeight: true,
};

export const qualityEngineeringPageBreadcrumbData =
  QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA;
