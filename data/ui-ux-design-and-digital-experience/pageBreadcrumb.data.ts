import { ASSETS } from "@/constants/images.constants";

export interface UiUxPageBreadcrumbData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
  fullHeight?: boolean;
}

export const UI_UX_PAGE_BREADCRUMB_DATA: UiUxPageBreadcrumbData = {
  title: "Orchestrating Human-Centered Design. Elevating Digital Interaction",
  subtitle:
    "Exceptional digital experiences bring user expectations and business objectives into alignment. Sparsh IT combines research, experience strategy, interface design, and iterative evaluation to create digital products that are intuitive, engaging, and consistent.",
  backgroundImage: ASSETS.UI_UX_BANNER,
  ctaText: "Discuss Your Design Project",
  ctaHref: "/contact-us",
  fullHeight: true,
};

export const uiUxPageBreadcrumbData = UI_UX_PAGE_BREADCRUMB_DATA;
