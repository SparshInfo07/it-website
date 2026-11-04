import { ASSETS } from "@/constants/images.constants";

export interface IndustryHeroData {
  eyebrow?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export type ServiceHeroData = IndustryHeroData;

export const INDUSTRY_HERO_DATA: IndustryHeroData = {
  eyebrow: "INDUSTRIES",
  title: "Industry Intelligence. Engineered for What Comes Next.",
  subtitle:
    "Enterprise transformation demands more than technological advancement. It requires an exceptional understanding of industry dynamics, operational intricacies, and the strategic forces shaping tomorrow's business landscape.\n\nSparsh IT brings together sector intelligence, advanced digital engineering, and emerging technology capabilities to create sophisticated enterprise solutions that redefine operational possibilities and establish new dimensions of business performance.",
  backgroundImage: ASSETS.CONTACT_BANNER,
  ctaText: "Explore Our Industry Expertise",
  ctaHref: "#industries",
};

export const SERVICE_HERO_DATA = INDUSTRY_HERO_DATA;
export const SERVICES_HERO_DATA = INDUSTRY_HERO_DATA;
export const servicesHeroData = INDUSTRY_HERO_DATA;
export const industryHeroData = INDUSTRY_HERO_DATA;
