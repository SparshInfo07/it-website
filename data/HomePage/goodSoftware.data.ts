import { ASSETS } from "@/constants/images.constants";

export interface GoodSoftwareCardItem {
  id: string;
  category?: string;
  title: string;
  description: string;
  icon: string;
}

export interface GoodSoftwareData {
  heading: string;
  description: string;
  cards: GoodSoftwareCardItem[];
}

export const HOMEPAGE_GOOD_SOFTWARE_DATA: GoodSoftwareData = {
  heading: "A Technology Partner <br /> Focused on What Matters Most.",
  description:
    "Choosing the right technology partner requires more than technical expertise. It demands strategic alignment, engineering discipline, collaborative execution, and a commitment to meaningful business outcomes. At Sparsh IT, we bring these principles together to help organizations navigate complexity, advance digital capabilities, and pursue transformation with clarity and confidence.",
  cards: [
    {
      id: "consulting",
      category: "Business-Aligned Thinking",
      title: "Technology with a Clear Purpose.",
      description:
        "We align our solutions with your business objectives, ensuring technology initiatives address critical challenges and contribute to broader organizational goals.",
      icon: ASSETS.GOOD_SOFTWARE_PURPOSE,
    },
    {
      id: "devops",
      category: "Engineering Excellence",
      title: "Built on Quality. Driven by Precision.",
      description:
        "We emphasize thoughtful architecture, disciplined execution, and engineering best practices to deliver solutions designed for security, reliability, and scalability.",
      icon: ASSETS.GOOD_SOFTWARE_QUALITY_PRECISION,
    },
    {
      id: "quality-engineering",
      category: "Strategic Collaboration",
      title: "Partnership Beyond <br /> Delivery.",
      description:
        "We work closely with our clients to understand their priorities, navigate challenges, and identify opportunities for continuous improvement throughout the engagement.",
      icon: ASSETS.GOOD_SOFTWARE_PARTNERSHIP,
    },
    {
      id: "implementation",
      category: "Agility & Adaptability",
      title: "Responsive to a Changing Digital Landscape.",
      description:
        "We embrace evolving technologies, changing business requirements, and emerging opportunities to help organizations remain adaptable and responsive to market demands.",
      icon: ASSETS.GOOD_SOFTWARE_RESPONSIVE,
    },
  ],
};

export const GOOD_SOFTWARE_DATA = HOMEPAGE_GOOD_SOFTWARE_DATA;
export const goodSoftwareData = HOMEPAGE_GOOD_SOFTWARE_DATA;
