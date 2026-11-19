import { ASSETS } from "@/constants/images.constants";
import type { FooterData } from "@/data/footerData";

export const ECOMMERCE_FOOTER_DATA: FooterData = {
  title:
    "Commerce Intelligence. Engineered for Growth. <br /><span class='text-2xl sm:text-3xl md:text-4xl block mt-2.5 font-light text-slate-200 opacity-90'>Reimagine Every Dimension of Digital Commerce.</span>",
  description:
    "Advance connected retail experiences through intelligent platforms, sophisticated customer engagement, integrated operations, and scalable digital engineering.",
  primaryLabel: "Discuss Commerce Solutions",
  primaryLink: "/contact-us",
  secondaryLabel: "Connect with Our Specialists",
  secondaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

export const ecommerceFooterData = ECOMMERCE_FOOTER_DATA;

