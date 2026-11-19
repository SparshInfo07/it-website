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
  subheading: "Design, Apps, Websites & AI. One Team.",
  paragraph:
    "Sparsh IT is a digital product studio focused on four things: UI/UX design, app development, website development, and AI & intelligence. We work with founders, growing businesses and established companies to design products people enjoy using, build websites and apps that perform, and add AI that takes repetitive work off their teams. One team covers the whole journey, from the first sketch to launch and every improvement after it, so nothing gets lost in hand-offs. Our focus is simple: build digital products that make a real difference to the way our clients do business.",
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
