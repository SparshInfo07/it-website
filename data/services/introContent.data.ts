import { ASSETS } from "@/constants/images.constants";

export interface ServiceIntroData {
  heading:
    | string
    | {
        line1?: string;
        line2?: string;
      };
  paragraphs: string[];
  image?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export const SERVICE_INTRO_DATA: ServiceIntroData = {
  heading: "Everything Your Digital Product Needs, Under One Roof.",
  paragraphs: [
    "Most businesses end up juggling a designer, a web agency, an app developer and an AI consultant, and spend their time keeping everyone in sync. We bring those four skills into one focused team.",
    "Our UI/UX designers shape how your product looks and feels. Our developers turn that design into fast websites and reliable mobile and web apps. Our AI team adds assistants and automations that save hours every week.",
    "Because one team owns the whole journey, nothing gets lost in hand-offs. You get clear milestones, a demo you can try every two weeks, and a product built to grow with your business.",
  ],
  image: ASSETS.SERVICE_LISTING_TRANSFORMING_TECHNOLOGICAL,
};

export const SERVICES_INTRO_DATA = SERVICE_INTRO_DATA;
export const servicesIntroData = SERVICE_INTRO_DATA;
