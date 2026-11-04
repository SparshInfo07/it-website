import { ASSETS } from "@/constants/images.constants";

export interface EcommerceHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const ECOMMERCE_HERO_DATA: EcommerceHeroData = {
  title: "Redefining Commerce Through Connected Intelligence.",
  subtitle:
    "The Future of Commerce Is Shaped by Intelligent Customer Engagement, Seamless Digital Experiences, and Sophisticated Operational Orchestration.\n\nSparsh IT enables retail enterprises to evolve beyond fragmented commerce environments through advanced platform engineering, AI-enhanced personalization, integrated omnichannel architectures, and intelligent operational capabilities that strengthen commercial agility.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Explore Commerce Engineering Capabilities",
    href: "/contact-us",
  },
};

export const ecommerceHeroData = ECOMMERCE_HERO_DATA;

