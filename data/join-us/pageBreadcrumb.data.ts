import { ASSETS } from "@/constants/images.constants";

export interface JoinUsPageBreadcrumbData {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const JOIN_US_PAGE_BREADCRUMB_DATA: JoinUsPageBreadcrumbData = {
  title: "Build Your Career at Sparsh IT",
  subtitle:
    "At Sparsh IT, you’ll have the opportunity to build a fulfilling and successful career through continuous learning, career development, and exposure to diverse and challenging projects.",
  backgroundImage: ASSETS.CONTACT_BANNER,
};

export const joinUsPageBreadcrumbData = JOIN_US_PAGE_BREADCRUMB_DATA;

