import { ASSETS } from "@/constants/images.constants";

export interface SiteFooterLink {
  label: string;
  href: string;
}

export interface SiteFooterData {
  backgroundImage: string;
  decorationImage: string;
  decorationOpacity: number;
  brand: {
    name: string;
    href: string;
    logo: string;
    tagline?: string;
    description?: string;
  };
  socials: (SiteFooterLink & { platform: "linkedin" | "instagram" | "youtube" | "facebook" })[];
  columns: { heading: string; links: SiteFooterLink[] }[];
  contact?: { heading: string; email: string; phone: string };
  copyright: string;
  legalLinks: SiteFooterLink[];
}

export const siteFooterData: SiteFooterData = {
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
  decorationImage: "/assets/images/footer-decoration.svg",
  decorationOpacity: 0.56,
  brand: {
    name: "Sparsh IT",
    href: "/",
    logo: ASSETS.FOOTER_BRAND_LOGO,
    tagline: "Sparsh IT | UI/UX, Apps, Websites & AI",
    // description: "Engineering Intelligence. Orchestrating Digital Evolution.",
  },
  socials: [
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
    { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  ],
  columns: [
    {
      heading: "Services",
      links: [
        { label: "UI/UX Design", href: "/services/ui-ux-design-and-digital-experience" },
        { label: "App Development", href: "/services/application-development" },
        { label: "Website Development", href: "/services/website-development" },
        { label: "AI & Intelligence", href: "/services/artificial-intelligence" },
        { label: "All Services", href: "/services" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Sparsh IT", href: "/about" },
        { label: "Our Approach", href: "/about#our-approach" },
        { label: "Why Sparsh IT", href: "/about#why-choose-sparsh-it" },
        { label: "Our Vision & Mission", href: "/about#purpose-vision" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    email: "info@sparshinfosystem.com",
    phone: "+91 92125 17322",
  },
  copyright: "\u00a9 Sparsh Info System Pvt Ltd. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
