import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/differentIndustries";

export const HEALTHCARE_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Specialized Healthcare Domains",
  subheading: "Enabling Digital Advancement Across the Care Ecosystem.",
  industries: [
    {
      id: "hospitals-health-systems",
      name: "Hospitals & Health Systems",
      subheading: "Modernizing Enterprise Clinical Environments.",
      tagline:
        "Integrate clinical applications, healthcare information platforms, and hospital operations.",
      image: ASSETS.INDUSTRY_HEALTHCARE,
      alt: "Hospitals and Health Systems",
      href: "/industries/healthcare",
    },
    {
      id: "ambulatory-outpatient-care",
      name: "Ambulatory & Outpatient Care",
      subheading: "Engineering Connected Patient Experiences.",
      tagline:
        "Advance digital scheduling, clinical documentation, and coordinated care workflows.",
      image: ASSETS.WORK_HEALTHCARE,
      alt: "Ambulatory and Outpatient Care",
      href: "/industries/healthcare",
    },
    {
      id: "digital-health-medtech",
      name: "Digital Health & MedTech",
      subheading: "Accelerating Connected Healthcare Innovation.",
      tagline:
        "Develop interoperable digital health applications and connected medical technology platforms.",
      image: ASSETS.DEVSECOPS_HEALTHCARE,
      alt: "Digital Health and MedTech",
      href: "/industries/healthcare",
    },
    {
      id: "pharmaceuticals-life-sciences",
      name: "Pharmaceuticals & Life Sciences",
      subheading: "Advancing Data-Driven Scientific Operations.",
      tagline:
        "Support research data integration, analytical platforms, and governed digital workflows.",
      image: ASSETS.AI_HEALTHCARE_LIFE_SCIENCES,
      alt: "Pharmaceuticals and Life Sciences",
      href: "/industries/healthcare",
    },
    {
      id: "healthcare-payers-administrators",
      name: "Healthcare Payers & Administrators",
      subheading:
        "Modernizing healthcare administration through intelligence.",
      tagline:
        "Enable integrated claims operations, member engagement, and administrative analytics.",
      image: ASSETS.DATA_ENG_HEALTHCARE,
      alt: "Healthcare Payers and Administrators",
      href: "/industries/healthcare",
    },
  ],
};

export const healthcareDifferentIndustriesData =
  HEALTHCARE_DIFFERENT_INDUSTRIES_DATA;

