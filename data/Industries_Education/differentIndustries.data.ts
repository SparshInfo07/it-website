import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const EDUCATION_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Specialized Education Domains",
  subheading:
    "Enabling digital innovation across diverse learning environments.",
  industries: [
    {
      id: "higher-education",
      name: "Higher Education",
      subheading: "Modernizing Connected Academic Institutions.",
      tagline:
        "Integrate student services, academic platforms, and institutional intelligence capabilities.",
      image: ASSETS.INDUSTRY_EDUCATION,
      alt: "Higher Education",
      href: "/industries/education",
    },
    {
      id: "k-12-education",
      name: "K–12 Education",
      subheading: "Advancing Accessible Digital Learning Experiences.",
      tagline:
        "Support connected learning environments, school operations, and student engagement.",
      image: ASSETS.WORK_EDUCATION,
      alt: "K-12 Education",
      href: "/industries/education",
    },
    {
      id: "education-technology-enterprises",
      name: "Education Technology Enterprises",
      subheading:
        "Accelerating innovation across digital learning products.",
      tagline:
        "Engineer scalable EdTech platforms, adaptive experiences, and connected educational services.",
      image: ASSETS.HOME_INDUSTRY_EDUCATION,
      alt: "Education Technology Enterprises",
      href: "/industries/education",
    },
    {
      id: "corporate-learning-development",
      name: "Corporate Learning & Development",
      subheading:
        "Advancing workforce capability through intelligent learning.",
      tagline:
        "Develop enterprise training platforms, professional development environments, and learning analytics.",
      image: ASSETS.DEVSECOPS_EDUCATION_PROFESSIONAL,
      alt: "Corporate Learning & Development",
      href: "/industries/education",
    },
    {
      id: "professional-certification-training",
      name: "Professional Certification & Training",
      subheading: "Engineering Structured Digital Knowledge Experiences.",
      tagline:
        "Support assessment platforms, certification workflows, and professional learning ecosystems.",
      image: ASSETS.AI_EDUCATION_PROFESSIONAL_SERVICES,
      alt: "Professional Certification & Training",
      href: "/industries/education",
    },
  ],
};

export const educationDifferentIndustriesData =
  EDUCATION_DIFFERENT_INDUSTRIES_DATA;

