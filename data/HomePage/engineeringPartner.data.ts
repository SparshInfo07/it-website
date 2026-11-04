export interface EngineeringPartnerData {
  heading: string;
  paragraphs: string[];
  cta: {
    label: string;
    href: string;
  };
}

export const HOMEPAGE_ENGINEERING_PARTNER_DATA: EngineeringPartnerData = {
  heading: "Engineering Possibilities. <br /> Delivering Business Impact.",
  paragraphs: [
    "At Sparsh IT, we believe technology creates its greatest value when it advances business strategy. We partner with organizations to navigate digital complexity, modernize technology ecosystems, and transform ambitious ideas into practical, high-impact solutions.",
    "Our expertise spans technology consulting, software engineering, and digital transformation, enabling us to address complex business challenges with precision, agility, and a forward-looking perspective.",
    "By aligning engineering excellence with business objectives, we help organizations strengthen operational capabilities, accelerate innovation, and establish a foundation for sustainable growth. Our focus is simple: engineer meaningful change through technology.",
  ],
  cta: {
    label: "Meet Sparsh IT",
    href: "/about",
  },
};

export const ENGINEERING_PARTNER_DATA = HOMEPAGE_ENGINEERING_PARTNER_DATA;
export const engineeringPartnerData = HOMEPAGE_ENGINEERING_PARTNER_DATA;
