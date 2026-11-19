
export interface ServiceHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export const SERVICE_HERO_DATA: ServiceHeroData = {
  title: "UI/UX, Apps, Websites <br />and AI. Done Properly.",
  subtitle:
    "Sparsh IT is a digital product studio. We design interfaces people enjoy, build apps and websites that perform, and add AI that takes real work off your team.",
  backgroundImage: "/assets/images/core-services/services-hero.webp",
  ctaText: "Explore Our Services",
  ctaHref: "#services",
};

export const SERVICES_HERO_DATA = SERVICE_HERO_DATA;
export const servicesHeroData = SERVICE_HERO_DATA;
