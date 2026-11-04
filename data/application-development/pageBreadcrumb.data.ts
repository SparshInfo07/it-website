import { ASSETS } from "@/constants/images.constants";

export interface ServiceApplicationHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: {
    label: string;
    href: string;
  };
}

export const SERVICE_APPLICATION_HERO_DATA: ServiceApplicationHeroData = {
  title: "Build New Applications. <br /> Modernize Existing Systems.",
  subtitle:
    "From full-stack engineering and APIs to legacy modernization and performance improvement, Sparsh IT helps enterprises create new digital products while extending the value of existing systems.",
  backgroundImage: ASSETS.SERVICE_APPLICATION_BG,
  cta: {
    label: "Let’s Talk",
    href: "/contact-us",
  },
};

export const serviceApplicationHeroData = SERVICE_APPLICATION_HERO_DATA;
