import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const EDUCATION_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Education Organizations Partner with Sparsh IT",
  subheading:
    "Engineering excellence across evolving academic environments.",
  cards: [
    {
      id: "education-aligned-engineering",
      number: "01",
      title: "Education-Aligned Engineering",
      subtitle:
        "Translating institutional priorities into digital capabilities.",
      description:
        "We align technology solutions with academic operations, learning workflows, and educational objectives.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "intelligent-learning-innovation",
      number: "02",
      title: "Intelligent Learning Innovation",
      subtitle:
        "Advancing educational experiences through emerging technologies.",
      description:
        "We integrate adaptive learning, AI-assisted capabilities, and modern digital experience engineering.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "connected-institutional-architecture",
      number: "03",
      title: "Connected Institutional Architecture",
      subtitle:
        "Establishing cohesion across academic technology ecosystems.",
      description:
        "We connect learning platforms, student information systems, and enterprise administrative applications.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "secure-accessible-digital-foundations",
      number: "04",
      title: "Secure & Accessible Digital Foundations",
      subtitle: "Engineering Confidence Across Learning Environments.",
      description:
        "We establish scalable architectures incorporating security controls, privacy-conscious practices, and accessible design.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
  ],
};

export const educationWhyChooseData = EDUCATION_WHY_CHOOSE_DATA;

