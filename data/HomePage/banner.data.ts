export interface HomeBannerData {
  eyebrow: string;
  heading: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const HOME_BANNER_DATA: HomeBannerData = {
  eyebrow: "DIGITAL ENGINEERING & TRANSFORMATION",
  heading: "Transforming Business <br /> Ambition into Digital Impact.",
  subtitle:
    "Sparsh IT partners with organizations to translate business priorities into technology-driven outcomes. Through strategic consulting, precision-led engineering, and advanced digital capabilities, we enable operational excellence, accelerate transformation, and create lasting enterprise value.",
  primaryCta: {
    label: "Explore Our Capabilities",
    href: "/services",
  },
  secondaryCta: {
    label: "Connect with Our Team",
    href: "/contact-us",
  },
};

export const homeBannerData = HOME_BANNER_DATA;
