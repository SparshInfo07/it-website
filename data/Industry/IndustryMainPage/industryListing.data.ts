import { ASSETS } from "@/constants/images.constants";

export interface IndustryCardItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

export interface IndustryListingData {
  title?: string;
  subtitle?: string;
  industries: IndustryCardItem[];
}

export const INDUSTRY_LISTING_DATA: IndustryListingData = {
  title: "Industries We Serve",
  subtitle:
    '<strong class="block text-[#061826] text-lg sm:text-xl font-semibold mb-2">Distinct industries. Specialized intelligence. Transformative possibilities.</strong>Our industry-aligned engineering capabilities address complex enterprise challenges through technology strategies tailored to the operational, regulatory, and competitive demands of each sector.',
  industries: [
    {
      id: "banking-financial-services",
      title: "Banking & Financial Services",
      tag: "FINANCIAL SERVICES & FINTECH",
      description:
        "Advancing financial ecosystems through intelligent banking architectures, sophisticated transaction infrastructure, predictive risk intelligence, and secure digital platforms engineered for institutional resilience.",
      image: ASSETS.INDUSTRY_BANKING,
      alt: "Banking and Financial Services",
      href: "/industries/banking",
    },
    {
      id: "retail-ecommerce",
      title: "Retail & E-Commerce",
      tag: "DIGITAL COMMERCE & RETAIL",
      description:
        "Redefining commerce ecosystems through AI-enhanced customer intelligence, composable digital platforms, connected retail operations, and integrated omnichannel experiences.",
      image: ASSETS.INDUSTRY_RETAIL,
      alt: "Retail and E-Commerce",
      href: "/industries/ecommerce",
    },
    {
      id: "healthcare-lifesciences",
      title: "Healthcare & Life Sciences",
      tag: "DIGITAL HEALTH & LIFE SCIENCES",
      description:
        "Accelerating healthcare innovation through interoperable clinical ecosystems, intelligent care technologies, secure health information architectures, and digitally connected patient experiences.",
      image: ASSETS.INDUSTRY_HEALTHCARE,
      alt: "Healthcare and Life Sciences",
      href: "/industries/healthcare",
    },
    {
      id: "travel-transportation",
      title: "Travel & Transportation",
      tag: "MOBILITY & LOGISTICS",
      description:
        "Orchestrating intelligent mobility ecosystems through connected transportation architectures, predictive logistics intelligence, integrated operational platforms, and real-time enterprise visibility.",
      image: ASSETS.INDUSTRY_TRAVEL,
      alt: "Travel and Transportation",
      href: "/industries/logistics",
    },
    {
      id: "hospitality-leisure",
      title: "Hospitality & Leisure",
      tag: "HOSPITALITY & EXPERIENCE",
      description:
        "Elevating hospitality experiences through intelligent guest engagement, connected property ecosystems, sophisticated service automation, and personalized digital interactions.",
      image: ASSETS.INDUSTRY_HOSPITALITY,
      alt: "Hospitality and Leisure",
      href: "/industries/hospitality",
    },
    {
      id: "education-learning",
      title: "Education & Learning",
      tag: "EDUCATION & LEARNING TECHNOLOGIES",
      description:
        "Advancing educational ecosystems through intelligent learning environments, adaptive digital experiences, institutional data intelligence, and scalable academic technology architectures.",
      image: ASSETS.INDUSTRY_EDUCATION,
      alt: "Education and Learning",
      href: "/industries/education",
    },
  ],
};

export const industryListingData = INDUSTRY_LISTING_DATA;
