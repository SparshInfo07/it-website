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
  title: "Mobile Applications Built for Connected Experiences",
  subtitle:
    "Build secure, high-performing mobile applications with Sparsh IT that connect users, enterprise services and business workflows across native and cross-platform environments.",
  backgroundImage: ASSETS.CONTACT_BANNER,
  ctaText: "Discuss Your AI Requirements",
  ctaHref: "/contact-us",
  fullHeight: true,
};

export const aiPageBreadcrumbData = AI_PAGE_BREADCRUMB_DATA;
