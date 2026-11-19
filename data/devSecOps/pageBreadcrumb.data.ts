import { ASSETS } from "@/constants/images.constants";

export interface CtaItem {
  label: string;
  href: string;
}

export interface DevSecOpsHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: CtaItem;
}

export const DEVSECOPS_HERO_DATA: DevSecOpsHeroData = {
  title: " DevSecOps Engineering for <br /> Secure Software Delivery ",
  subtitle:
    "Strengthen software security, improve delivery consistency, and enhance operational reliability with integrated DevSecOps practices. We combine CI/CD automation, security controls, and infrastructure management to help organizations streamline engineering workflows and deliver dependable software.",
  backgroundImage: ASSETS.DEVSECOPS_BG,
  cta: {
    label: "Discuss Your Engineering Needs",
    href: "/contact-us",
  },
};

export const devSecOpsHeroData = DEVSECOPS_HERO_DATA;
