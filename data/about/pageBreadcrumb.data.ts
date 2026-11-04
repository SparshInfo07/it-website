import { ASSETS } from "@/constants/images.constants";

export interface AboutHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export const ABOUT_HERO_DATA: AboutHeroData = {
  title: "Transforming Business Ambition Into Digital Impact.",
  subtitle:
    "Sparsh IT partners with organizations to translate business priorities into technology-driven outcomes. Through strategic consulting, precision-led engineering, and advanced digital capabilities, we enable operational excellence, accelerate transformation, and create lasting enterprise value.",
  backgroundImage: ASSETS.ABOUT_US_BANNER,
  ctaText: "Connect with Our Team",
  ctaHref: "/contact-us"
};

export const aboutHeroData = ABOUT_HERO_DATA;
