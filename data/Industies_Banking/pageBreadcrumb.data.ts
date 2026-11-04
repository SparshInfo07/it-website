import { ASSETS } from "@/constants/images.constants";

export interface BankingHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const BANKING_HERO_DATA: BankingHeroData = {
  title: "Reimagining Financial Ecosystems Through Intelligent Engineering.",
  subtitle:
    "The evolution of financial services demands an exceptional convergence of institutional trust, technological sophistication, and continuous innovation.\n\nSparsh IT empowers financial enterprises to navigate this transformation through advanced digital banking architectures, intelligent financial automation, secure transaction ecosystems, and resilient engineering capabilities that strengthen operational integrity and accelerate financial innovation.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Explore Financial Engineering Capabilities",
    href: "/contact-us",
  },
};

export const bankingHeroData = BANKING_HERO_DATA;
