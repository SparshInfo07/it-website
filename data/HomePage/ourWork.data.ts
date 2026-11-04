import { ASSETS } from "@/constants/images.constants";

export interface WorkItem {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
}

export interface OurWorkData {
  tag?: string;
  heading: string;
  subheading?: string;
  cta: {
    label: string;
    href: string;
  };
  description?: string;
  items: WorkItem[];
}

export const HOMEPAGE_OUR_WORK_DATA: OurWorkData = {
  heading: "Real Challenges. Practical Solutions. <br /> Measurable Results.",
  description:
    "We solve business and technology challenges with solutions designed around real needs focused on improving efficiency, strengthening performance and delivering meaningful outcomes.",
  cta: {
    label: "Explore Our Case Studies",
    href: "/contact-us",
  },
  items: [
    {
      id: "banking",
      category: "Banking / FinTech",
      name: "FinFlow",
      description:
        "A digital finance platform simplifying onboarding, account management, and transaction tracking.",
      image: ASSETS.WORK_BANKING,
      alt: "FinFlow - Digital finance onboarding and transaction tracking platform",
      href: "/works",
    },
    {
      id: "retail",
      category: "Retail",
      name: "RetailSync",
      description:
        "A centralized retail platform connecting inventory, sales, and store data for faster decision-making.",
      image: ASSETS.WORK_RETAIL,
      alt: "RetailSync - Centralized retail inventory, sales, and store data platform",
      href: "/works",
    },
    {
      id: "travel",
      category: "Travel",
      name: "TripEase",
      description:
        "A travel platform simplifying search, booking, and itinerary management.",
      image: ASSETS.WORK_TRAVEL,
      alt: "TripEase - Streamlined search, booking, and itinerary travel platform",
      href: "/works",
    },
    {
      id: "healthcare",
      category: "Healthcare",
      name: "CareConnect",
      description:
        "A healthcare portal unifying patient appointments, medical reports, and team communication.",
      image: ASSETS.WORK_HEALTHCARE,
      alt: "CareConnect - Unified healthcare appointments, medical reports, and team communication portal",
      href: "/works",
    },
    {
      id: "hospitality",
      category: "Hospitality",
      name: "StaySmart",
      description:
        "An AI hotel platform handling requests, recommendations, and service enquiries.",
      image: ASSETS.WORK_HOSPITALITY,
      alt: "StaySmart - AI hotel platform handling requests, recommendations, and service enquiries",
      href: "/works",
    },
    {
      id: "education",
      category: "Education",
      name: "LearnSphere",
      description:
        "A scalable e-learning platform tracking courses, live sessions, and student progress.",
      image: ASSETS.WORK_EDUCATION,
      alt: "LearnSphere - Scalable e-learning platform tracking courses, live sessions, and student progress",
      href: "/works",
    },
  ],
};

export const OUR_WORK_DATA = HOMEPAGE_OUR_WORK_DATA;
export const ourWorkData = HOMEPAGE_OUR_WORK_DATA;
