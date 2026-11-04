import { ASSETS } from "@/constants/images.constants";

export interface GCCPageBreadcrumbData {
  eyebrow?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
  fullHeight?: boolean;
}

export const GCC_PAGE_BREADCRUMB_DATA: GCCPageBreadcrumbData = {
  title: "Global Engineering & Offshore Delivery for Scalable Growth",
  subtitle:
    "Expand engineering capacity, access specialized expertise and maintain delivery continuity through Sparsh IT’s offshore teams, structured collaboration and flexible delivery models designed around evolving technology priorities.",
  backgroundImage: ASSETS.GCC_BANNER,
  ctaText: "Discuss Global Delivery",
  ctaHref: "/contact-us",
  fullHeight: true,
};
