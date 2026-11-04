import { ASSETS } from "@/constants/images.constants";

export interface AIPageBreadcrumbData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
  fullHeight?: boolean;
}

export const AI_PAGE_BREADCRUMB_DATA: AIPageBreadcrumbData = {
  title: "Turn Enterprise Data Into Actionable Analytics and Intelligence",
  subtitle:
    "Sparsh IT helps organizations build reliable data foundations, modern analytics capabilities and real-time insights that strengthen decision-making and prepare data for AI adoption.",
  backgroundImage: ASSETS.DATA_ENG_BANNER,
  ctaText: "Contact us",
  ctaHref: "/contact-us",
  fullHeight: true,
};

export const aiPageBreadcrumbData = AI_PAGE_BREADCRUMB_DATA;
