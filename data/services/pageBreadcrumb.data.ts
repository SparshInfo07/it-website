import { ASSETS } from "@/constants/images.constants";

export interface ServiceHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export const SERVICE_HERO_DATA: ServiceHeroData = {
  title: "Engineering Intelligence. <br />Accelerating Enterprise Evolution.",
  subtitle:
    "At Sparsh IT, we converge strategic technology advisory, advanced engineering disciplines, and next-generation digital capabilities to redefine how enterprises innovate, operate, and scale.\n\nour expertise spans intelligent systems, secure engineering ecosystems, application modernization, cloud-native architectures, and data-driven transformation—empowering organizations to navigate technological complexity and establish enduring competitive advantage.",
  backgroundImage: ASSETS.SERVICE_LISTING_BANNER,
  ctaText: "Explore Our Capabilities",
  ctaHref: "#services",
};

export const SERVICES_HERO_DATA = SERVICE_HERO_DATA;
export const servicesHeroData = SERVICE_HERO_DATA;
