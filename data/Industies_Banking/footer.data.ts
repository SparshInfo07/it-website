import { ASSETS } from "@/constants/images.constants";
import type { FooterData } from "@/data/footerData";

export const BANKING_FOOTER_DATA: FooterData = {
  title:
    "Financial Innovation. Engineered with Precision. <br /><span class='text-2xl sm:text-3xl md:text-4xl block mt-2.5 font-light text-slate-200 opacity-90'>Architect the Next Era of Intelligent Finance.</span>",
  description:
    "Advance institutional transformation through secure financial architectures, AI-enabled intelligence, resilient engineering, and sophisticated digital capabilities designed for evolving financial ecosystems.",
  primaryLabel: "Discuss Financial Solutions",
  primaryLink: "/contact-us",
  secondaryLabel: "Connect with Our Specialists",
  secondaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

export const bankingFooterData = BANKING_FOOTER_DATA;
