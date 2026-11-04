import { ASSETS } from "@/constants/images.constants";
import { PAGE_URLS } from "@/constants/pageurls.constants";

export interface RightTechnologyData {
  heading: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
  };
  cta?: {
    label: string;
    href: string;
  };
}

export const HOMEPAGE_RIGHT_TECHNOLOGY_DATA: RightTechnologyData = {
  heading: "Technology That Moves <br /> Your Business Forward",
  description:
    "We apply modern technologies across software, cloud, AI, data, DevOps, quality, security and integration to build reliable solutions that adapt as business needs change.",
  video: {
    src: ASSETS.TECHNOLOGY_WEBM,
  },
  cta: {
    label: "Explore Our Technology Capabilities",
    href: PAGE_URLS.SERVICES,
  },
};

export const RIGHT_TECHNOLOGY_DATA = HOMEPAGE_RIGHT_TECHNOLOGY_DATA;
export const rightTechnologyData = HOMEPAGE_RIGHT_TECHNOLOGY_DATA;
