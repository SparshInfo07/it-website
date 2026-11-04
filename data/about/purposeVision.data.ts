import { ASSETS } from "@/constants/images.constants";

export interface PurposeVisionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface PurposeVisionData {
  heading: string;
  subheading: string;
  items: PurposeVisionItem[];
}

export const PURPOSE_VISION_DATA: PurposeVisionData = {
  heading: "Our Vision & Mission",
  subheading:
    "Guiding our commitment to engineering excellence, strategic innovation, and enduring enterprise value.",
  items: [
    {
      id: "vision",
      title: "Our Vision",
      description:
        "To be a trusted technology partner recognized for engineering digital excellence, advancing intelligent innovation, and enabling meaningful enterprise transformation.",
      image: ASSETS.ABOUT_VISION_FUTURE,
      imageAlt:
        "Sparsh IT visionary architect overlooking connected futuristic smart city",
    },
    {
      id: "mission",
      title: "Our Mission",
      description:
        "To bridge business strategy and technology through advanced engineering, strategic consulting, and integrated digital capabilities that create enduring value for our clients.",
      image: ASSETS.ABOUT_MISSION_TABLET,
      imageAlt:
        "Sparsh IT professional interacting with illuminated digital smart network on tablet",
    },
  ],
};

export const purposeVisionData = PURPOSE_VISION_DATA;
