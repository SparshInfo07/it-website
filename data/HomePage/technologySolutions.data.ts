import { ASSETS } from "@/constants/images.constants";
import { PAGE_URLS } from "@/constants/pageurls.constants";

export interface TechSolutionCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

export interface TechSolutionsCta {
  label: string;
  href: string;
}

export type TechSolutionsHeading =
  | string
  | {
      line1: string;
      line2?: string;
    };

export interface TechSolutionsData {
  heading: TechSolutionsHeading;
  description: string;
  cards: TechSolutionCardItem[];
  cta?: TechSolutionsCta;
}

export const HOMEPAGE_TECH_SOLUTIONS_DATA: TechSolutionsData = {
  heading: "Engineering Intelligence. <br /> Orchestrating Digital Evolution.",
  description:
    "Sparsh IT combines engineering, technology advisory, AI, cloud, data intelligence, and global delivery to modernize enterprises, accelerate innovation, and create value.",
  cards: [
    {
      id: "infra-cloud",
      title: "AI & Intelligent <br /> Engineering",
      description:
        "We engineer scalable AI solutions that integrate intelligence into enterprise operations, products, and decisions, advancing automation, efficiency, and strategic objectives.",
      image: ASSETS.TECH_SOLUTIONS_AI,
      href: PAGE_URLS.ARTIFICIAL_INTELLIGENCE,
    },
    {
      id: "ai",
      title: "DevSecOps & Platform Engineering",
      description:
        "We unify development, security, and infrastructure through automation, accelerating software delivery while strengthening governance, reliability, and resilience at enterprise scale.",
      image: ASSETS.TECH_SOLUTIONS_DEVSECOPS,
      href: PAGE_URLS.DEVSECOPS,
    },
    {
      id: "app-dev",
      title: "Application Development <br /> & Modernization",
      description:
        "We engineer and modernize enterprise applications, creating adaptable, reliable software that improves performance and supports business priorities and continuous evolution.",
      image: ASSETS.TECH_SOLUTIONS_APP_DEV,
      href: PAGE_URLS.APPLICATION_DEV,
    },
    {
      id: "Data-engineering",
      title: "Data Engineering & Analytics",
      description:
        "We engineer reliable, governed, scalable data ecosystems that unify information, enable analytics, and establish trusted foundations for enterprise AI adoption.",
      image: ASSETS.TECH_SOLUTIONS_DATA_ENG,
      href: PAGE_URLS.DATA_ENGINEERING_ANALYTICS,
    },
    {
      id: "Mobile-application",
      title: "Mobile Application Development",
      description:
        "We engineer secure, scalable mobile applications that integrate enterprise capabilities, enhance user experiences, and enable seamless access to business services.",
      image: ASSETS.TECH_SOLUTIONS_MOBILE_APP,
      href: PAGE_URLS.MOBILE_APPLICATION_DEV,
    },
    {
      id: "ui-ux",
      title: "UI/UX Design & Digital Experience",
      description:
        "We create intuitive digital experiences through research, strategic design, and engineering alignment, simplifying interactions, strengthening engagement, and supporting business objectives.",
      image: ASSETS.TECH_SOLUTIONS_UX_DESIGN,
      href: PAGE_URLS.UI_UX_DESIGN,
    },
    {
      id: "quality-engineering",
      title: "Quality Engineering & Software Testing",
      description:
        "We embed quality engineering and continuous testing throughout software development, detecting defects earlier, reducing risks, and supporting reliable, predictable releases.",
      image: ASSETS.TECH_SOLUTIONS_QUALITY_ENG,
      href: PAGE_URLS.QUALITY_ENGINEERING,
    },
    {
      id: "global-capability-centers",
      title: "Global Capability Centers",
      description:
        "We expand enterprise engineering capacity through specialized offshore teams, flexible delivery models, and coordinated execution, ensuring quality, continuity, and scalability.",
      image: ASSETS.TECH_SOLUTIONS_GCC,
      href: PAGE_URLS.GLOBAL_CAPABILITY_CENTERS,
    },
  ],
  cta: {
    label: "Explore What We Do",
    href: PAGE_URLS.WHAT_WE_DO,
  },
};

export const TECH_SOLUTIONS_DATA = HOMEPAGE_TECH_SOLUTIONS_DATA;
export const techSolutionsData = HOMEPAGE_TECH_SOLUTIONS_DATA;
