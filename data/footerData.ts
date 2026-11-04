import { ASSETS } from "@/constants/images.constants";

export interface FooterData {
  title: string;
  backgroundImage: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryLink?: string;
  secondaryLink?: string;
  overlayClassName?: string;
}

export const SHARED_CLOSING_CTA_DATA: FooterData = {
  title: "Technology with Purpose. <br /> Engineering with Impact.",
  description:
    "Every organization has a distinct set of challenges, priorities, and opportunities. Sparsh IT brings strategic perspective and engineering expertise together to help identify the right approach for your business. <br /><br /> Let's discuss your objectives and explore how the right technology capabilities can move your organization forward.",
  primaryLabel: "Connect with Our Team",
  primaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

export {
  SHARED_CLOSING_CTA_DATA as footerData,
  SHARED_CLOSING_CTA_DATA as DEFAULT_FOOTER_DATA,
  SHARED_CLOSING_CTA_DATA as SHARED_FOOTER_DATA,
};

export {
  HOMEPAGE_FOOTER_DATA,
  homeFooterData,
  HOMEPAGE_FOOTER_DATA as HOME_FOOTER_DATA,
} from "./HomePage/footer.data";

export {
  ABOUT_FOOTER_DATA,
  aboutFooterData,
} from "./about/footer.data";

export {
  SERVICES_FOOTER_DATA,
  servicesFooterData,
} from "./services/footer.data";

export {
  SERVICE_APPLICATION_FOOTER_DATA,
  serviceApplicationFooterData,
} from "./application-development/footer.data";

export {
  CONTACT_FOOTER_DATA,
  contactFooterData,
} from "./contact-us/footer.data";

export {
  DEVSECOPS_FOOTER_DATA,
  devSecOpsFooterData,
} from "./devSecOps/footer.data";

export {
  AI_FOOTER_DATA,
  aiFooterData,
} from "./artificial-intelligence/footer.data";

export {
  INDUSTRY_FOOTER_DATA,
  industryFooterData,
} from "./Industry/IndustryMainPage/footer.data";
