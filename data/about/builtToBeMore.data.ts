import { ASSETS } from "@/constants/images.constants";

export interface AboutStatItem {
  id: string;
  rawValue: string;
  label: string;
  isNumeric: boolean;
  targetNumber?: number;
  suffix?: string;
}

export interface AboutOverviewData {
  heading: string;
  subheading?: string;
  paragraph: string;
  image: {
    src: string;
    alt: string;
  };
  stats: AboutStatItem[];
}

export const ABOUT_OVERVIEW_DATA: AboutOverviewData = {
  heading: "About Sparsh IT",
  subheading: "Engineering Possibilities. Delivering Business Impact.",
  paragraph:
    "At Sparsh IT, we believe technology creates its greatest value when it advances business strategy. We partner with organizations to navigate digital complexity, modernize technology ecosystems, and transform ambitious ideas into practical, high-impact solutions. Our expertise spans technology consulting, software engineering, and digital transformation, enabling us to address complex business challenges with precision, agility, and a forward-looking perspective. By aligning engineering excellence with business objectives, we help organizations strengthen operational capabilities, accelerate innovation, and establish a foundation for sustainable growth. Our focus is simple: engineer meaningful change through technology.",
  image: {
    src: ASSETS.ABOUT_HANDS_STACKED,
    alt: "Sparsh IT engineering and leadership team hands stacked together in unity and partnership",
  },
  stats: [
    {
      id: "specialists",
      rawValue: "500+",
      label: "Technology Specialists",
      isNumeric: true,
      targetNumber: 500,
      suffix: "+",
    },
    {
      id: "projects",
      rawValue: "250+",
      label: "Projects Delivered",
      isNumeric: true,
      targetNumber: 250,
      suffix: "+",
    },
    {
      id: "industries",
      rawValue: "10+",
      label: "Industries",
      isNumeric: true,
      targetNumber: 10,
      suffix: "+",
    },
    {
      id: "presence",
      rawValue: "USA+ India",
      label: "Global Presence",
      isNumeric: false,
    },
  ],
};

export const aboutOverviewData = ABOUT_OVERVIEW_DATA;
