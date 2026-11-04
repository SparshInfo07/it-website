import { ASSETS } from "@/constants/images.constants";

export interface EducationHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const EDUCATION_HERO_DATA: EducationHeroData = {
  title: "Advancing Educational Possibilities Through Intelligent Engineering.",
  subtitle:
    "The evolution of education demands digital environments that connect knowledge, technology, and personalized learning experiences with institutional excellence.\n\nSparsh IT enables educational institutions and learning enterprises to modernize academic technology ecosystems through intelligent learning platforms, adaptive digital capabilities, integrated information architectures, and scalable engineering solutions.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Explore Education Engineering Capabilities",
    href: "/contact-us",
  },
};

export const educationHeroData = EDUCATION_HERO_DATA;

