import { ASSETS } from "@/constants/images.constants";

export interface ContactPageBreadcrumbData {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export const CONTACT_PAGE_BREADCRUMB_DATA: ContactPageBreadcrumbData = {
  title: "Let’s Start a Conversation",
  backgroundImage: ASSETS.CONTACT_US_BANNER,
};

export const contactPageBreadcrumbData = CONTACT_PAGE_BREADCRUMB_DATA;
