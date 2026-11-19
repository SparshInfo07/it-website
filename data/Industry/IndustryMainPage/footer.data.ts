import { ASSETS } from "@/constants/images.constants";
import type { FooterData } from "@/data/footerData";

export const INDUSTRY_FOOTER_DATA: FooterData = {
  title:
    "Industry Expertise. Engineering Distinction. <br /><span class='text-2xl sm:text-3xl md:text-4xl block mt-2.5 font-light text-slate-200 opacity-90'>Transform Complexity into Competitive Advantage.</span>",
  description:
    "The next era of enterprise advancement belongs to organizations that align industry intelligence with exceptional engineering. <br /><br /> Partner with Sparsh IT to redefine digital capabilities, accelerate strategic innovation, and establish technology foundations designed for enduring business impact.",
  primaryLabel: "Explore Our Capabilities",
  primaryLink: "/services",
  secondaryLabel: "Connect with Our Team",
  secondaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

export const industryFooterData = INDUSTRY_FOOTER_DATA;

