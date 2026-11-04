import { ASSETS } from "@/constants/images.constants";

export interface LogisticsHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const LOGISTICS_HERO_DATA: LogisticsHeroData = {
  title: "Orchestrating Intelligent Mobility Across Connected Ecosystems.",
  subtitle:
    "Modern transportation enterprises operate within increasingly interconnected networks of infrastructure, logistics, information, and customer expectations.\n\nSparsh IT brings together advanced platform engineering, predictive operational intelligence, and integrated digital architectures to modernize transportation ecosystems, optimize mobility operations, and enable more responsive, resilient service environments.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Explore Mobility Engineering Capabilities",
    href: "/contact-us",
  },
};

export const logisticsHeroData = LOGISTICS_HERO_DATA;

