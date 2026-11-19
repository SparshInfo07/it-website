import { ASSETS } from "@/constants/images.constants";

export interface AboutHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export const ABOUT_HERO_DATA: AboutHeroData = {
  title: "Transforming Business Ambition into Digital Impact.",
  subtitle:
    "Sparsh IT designs and builds digital products for growing businesses: thoughtful UI/UX, mobile and web apps, high-performing websites and practical AI, all from one focused team.",
  backgroundImage: ASSETS.ABOUT_US_BANNER,
  ctaText: "Connect with Our Team",
  ctaHref: "/contact-us"
};

export const aboutHeroData = ABOUT_HERO_DATA;
