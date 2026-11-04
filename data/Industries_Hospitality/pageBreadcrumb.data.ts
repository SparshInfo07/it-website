import { ASSETS } from "@/constants/images.constants";

export interface HospitalityHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const HOSPITALITY_HERO_DATA: HospitalityHeroData = {
  title: "Reimagining Hospitality Through Intelligent Digital Experiences.",
  subtitle:
    "Exceptional hospitality is increasingly defined by the seamless convergence of personalized engagement, operational sophistication, and connected technology.\n\nSparsh IT empowers hospitality enterprises to modernize guest experiences and operational ecosystems through intelligent digital platforms, integrated property technologies, AI-enhanced personalization, and advanced service engineering.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Explore Hospitality Engineering Capabilities",
    href: "/contact-us",
  },
};

export const hospitalityHeroData = HOSPITALITY_HERO_DATA;

