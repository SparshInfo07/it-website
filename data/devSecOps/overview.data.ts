import { ASSETS } from "@/constants/images.constants";
import type { ServiceOverviewData } from "@/data/services/overview.data";

export const DEVSECOPS_OVERVIEW_DATA: ServiceOverviewData = {
  title: "Explore Our Services",
  services: [
    {
      id: "application-development",
      title: "Application Development",
      image: ASSETS.SERVICE_CARD_IMAGE_1,
      href: "/services/application-development",
    },
    {
      id: "infrastructure-cloud",
      title: "Infrastructure & Cloud Services",
      image: ASSETS.SERVICE_CARD_IMAGE_3,
      href: "/services/devsecops-platform-engineering",
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      image: ASSETS.SERVICE_CARD_IMAGE_4,
      href: "/services/ai-data",
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      image: ASSETS.SERVICE_CARD_IMAGE_1,
      href: "/services/ai-data",
    },
    {
      id: "testing-services",
      title: "Testing Services",
      image: ASSETS.SERVICE_CARD_IMAGE_2,
      href: "/services/testing-services",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      image: ASSETS.SERVICE_CARD_IMAGE_3,
      href: "/services/digital-transformation",
    },
  ],
};

export const devSecOpsOverviewData = DEVSECOPS_OVERVIEW_DATA;
