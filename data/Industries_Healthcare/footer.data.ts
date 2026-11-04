import { ASSETS } from "@/constants/images.constants";
import type { FooterData } from "@/data/footerData";

export const HEALTHCARE_FOOTER_DATA: FooterData = {
  title:
    "Connected healthcare. Engineered with purpose. <br /><span class='text-2xl sm:text-3xl md:text-4xl block mt-2.5 font-light text-slate-200 opacity-90'>Advance the next generation of digital care.</span>",
  description:
    "Transform healthcare technology ecosystems through intelligent platforms, interoperable architectures, secure engineering, and responsible digital innovation.",
  primaryLabel: "Discuss Healthcare Solutions",
  primaryLink: "/contact-us",
  secondaryLabel: "Connect with Our Specialists",
  secondaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

export const healthcareFooterData = HEALTHCARE_FOOTER_DATA;

