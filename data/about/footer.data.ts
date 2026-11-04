import { ASSETS } from "@/constants/images.constants";
import type { FooterData } from "@/data/footerData";

export const ABOUT_FOOTER_DATA: FooterData = {
  title:
    "Let’s build what’s next <br /> <Span class='text-2xl sm:text-3xl md:text-4xl block mt-2.5 font-light text-slate-200 opacity-90'>Your Vision. Our Engineering. A Shared Future.</span>",
  description:
    "Every business challenge presents an opportunity to evolve. Sparsh IT brings together strategic insight, engineering expertise, and global delivery capabilities to help organizations explore new possibilities, strengthen digital ecosystems, and translate strategic ambitions into meaningful outcomes.",
  primaryLabel: "Contact Us",
  primaryLink: "/contact-us",
  backgroundImage: ASSETS.ABOUT_US_FOOTER,
};

export const aboutFooterData = ABOUT_FOOTER_DATA;
