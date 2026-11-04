import { ASSETS } from "@/constants/images.constants";

export interface HealthcareHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const HEALTHCARE_HERO_DATA: HealthcareHeroData = {
  title: "Advancing Connected Care Through Intelligent Digital Engineering.",
  subtitle:
    "Healthcare transformation requires an exceptional balance of technological innovation, clinical interoperability, operational precision, and digital trust.\n\nSparsh IT brings together advanced healthcare engineering, intelligent automation, secure data architectures, and connected digital platforms to modernize healthcare ecosystems and enable more coordinated, efficient, and accessible care experiences.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Explore Healthcare Engineering Capabilities",
    href: "/contact-us",
  },
};

export const healthcareHeroData = HEALTHCARE_HERO_DATA;

