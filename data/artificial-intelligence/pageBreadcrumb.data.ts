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
  title:
    "Enterprise AI Solutions Advancing Intelligence. Redefining Enterprise Possibilities.",
  subtitle:
    "Sparsh IT helps businesses translate artificial intelligence into practical enterprise capabilities. From machine learning and predictive analytics to generative AI and intelligent automation, we develop technology solutions that support informed decisions, optimize operations, and address complex business challenges.",
  backgroundImage: ASSETS.AI_BANNER,
  ctaText: "Discuss Your AI Requirements",
  ctaHref: "/contact-us",
  fullHeight: true,
};

export const aiPageBreadcrumbData = AI_PAGE_BREADCRUMB_DATA;
