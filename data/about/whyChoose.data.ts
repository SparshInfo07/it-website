import { ASSETS } from "@/constants/images.constants";

export interface WhyChooseItem {
  id: string;
  number?: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
}

export interface WhyBusinessesChooseData {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  description?: string;
  cards: WhyChooseItem[];
}

export const WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  eyebrow: "WHY SPARSH IT",
  heading: "A Technology Partner <br /> Focused on What Matters Most.",
  description:
    "Choosing the right technology partner requires more than technical expertise. It demands strategic alignment, engineering discipline, collaborative execution, and a commitment to meaningful business outcomes. <br /><br /> At Sparsh IT, we bring these principles together to help organizations navigate complexity, advance digital capabilities, and pursue transformation with clarity and confidence.",
  cards: [
    {
      id: "business-aligned-thinking",
      number: "01",
      title: "Business-Aligned Thinking",
      subtitle: "Technology with a Clear Purpose.",
      description:
        "We align our solutions with your business objectives, ensuring technology initiatives address critical challenges and contribute to broader organizational goals.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_BUSINESS_ALIGNED,
    },
    {
      id: "engineering-excellence",
      number: "02",
      title: "Engineering Excellence",
      subtitle: "Built on Quality. Driven by Precision.",
      description:
        "We emphasize thoughtful architecture, disciplined execution, and engineering best practices to deliver solutions designed for security, reliability, and scalability.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_ENGINEERING_EXCELLENCE,
    },
    {
      id: "strategic-collaboration",
      number: "03",
      title: "Strategic Collaboration",
      subtitle: "Partnership Beyond Delivery.",
      description:
        "We work closely with our clients to understand their priorities, navigate challenges, and identify opportunities for continuous improvement throughout the engagement.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_STRATEGIC_COLLABORATION,
    },
    {
      id: "agility-adaptability",
      number: "04",
      title: "Agility & Adaptability",
      subtitle: "Responsive to a Changing Digital Landscape.",
      description:
        "We embrace evolving technologies, changing business requirements, and emerging opportunities to help organizations remain adaptable and responsive to market demands.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_AGILITY_ADAPTABILITY,
    },
    {
      id: "commitment-to-value",
      number: "05",
      title: "Commitment to Value",
      subtitle: "Focused on Outcomes, Not Just Deliverables.",
      description:
        "We align engineering execution with business priorities, focusing on solutions that strengthen operational effectiveness, advance digital capabilities, and support long-term objectives.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_COMMITMENT_TO_VALUE,
    },
    {
      id: "global-delivery-capabilities",
      number: "06",
      title: "Global Delivery Capabilities",
      subtitle: "Specialized Expertise. Connected Execution.",
      description:
        "Our global engineering capabilities enable coordinated delivery across technology disciplines, combining specialized expertise with flexible engagement models to support evolving enterprise requirements.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_GLOBAL_DELIVERY,
    },
    {
      id: "long-term-perspective",
      number: "07",
      title: "Long-Term Perspective",
      subtitle: "Solutions Designed for What Comes Next.",
      description:
        "We consider scalability, maintainability, and future business needs from the outset, helping organizations establish technology foundations that can evolve with them.",
      icon: ASSETS.ABOUT_WHY_CHOOSE_LONG_TERM_PERSPECTIVE,
    },
  ],
};

export const whyChooseData = WHY_CHOOSE_DATA;
