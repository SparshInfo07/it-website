import { ASSETS } from "@/constants/images.constants";

export interface ValueItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface OurValuesData {
  eyebrow?: string;
  heading: string;
  subheading: string;
  image: {
    src: string;
    alt: string;
  };
  values: ValueItem[];
}

export const OUR_VALUES_DATA: OurValuesData = {
  heading: "Our Values",
  subheading:
    "Our values shape how we work, make decisions and build lasting relationships with clients and teams.",
  image: {
    src: ASSETS.ABOUT_VALUES_SERVERS,
    alt: "Sparsh IT high-performance enterprise data center and cloud server infrastructure",
  },
  values: [
    {
      id: "innovation",
      number: "01.",
      title: "Innovation Is Reality",
      description:
        "Innovation at Sparsh IT means applying new ideas where they create practical value—improving products, processes and business outcomes.",
    },
    {
      id: "time-is-money",
      number: "02.",
      title: "Time Is Money",
      description:
        "We value time by simplifying complexity, making focused decisions and delivering with clarity, efficiency and accountability.",
    },
    {
      id: "stronger-together",
      number: "03.",
      title: "Stronger Together",
      description:
        "Strong outcomes come from collaboration. Our teams work across disciplines and with clients to bring the right expertise to every engagement.",
    },
    {
      id: "work-life-balance",
      number: "04.",
      title: "Work-Life Balance",
      description:
        "We support a balanced work culture that helps our people stay productive, continue learning and perform consistently over the long term.",
    },
  ],
};

export const ourValuesData = OUR_VALUES_DATA;
