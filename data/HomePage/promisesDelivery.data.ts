import { ASSETS } from "@/constants/images.constants";

export interface PromiseCardItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface PromisesDeliveryData {
  heading: string;
  cards: PromiseCardItem[];
}

export const HOMEPAGE_PROMISES_DELIVERY_DATA: PromisesDeliveryData = {
  heading: "The Right People.<br /> The Right Technology.",
  cards: [
    {
      id: "built-around-problem",
      image: ASSETS.PROMISES_DELIVERY_RELIABLE,
      title: "Reliable Results.",
      subtitle:
        "We focus on understanding your business, choosing the right technology and delivering solutions that create lasting value.",
    },
    {
      id: "designed-to-evolve",
      image: ASSETS.PROMISES_DELIVERY_BUSINESS,
      title: "Business-Focused Solutions",
      subtitle:
        "We start with your goals and challenges, so every technology decision supports a clear business need.",
    },
    {
      id: "quality-from-start",
      image: ASSETS.PROMISES_DELIVERY_EXPERTISE,
      title: "Strong Technical Expertise",
      subtitle:
        "Expertise across software, cloud, data, AI, DevSecOps, security and quality engineering brings depth across the solution lifecycle.",
    },
    {
      id: "stronger-together",
      image: ASSETS.PROMISES_DELIVERY_QUALITY,
      title: "Quality & Reliable Delivery",
      subtitle:
        "Structured engineering, testing and clear collaboration keep delivery reliable, maintainable and aligned throughout the engagement.",
    },
    {
      id: "solutions-built-growth",
      image: ASSETS.PROMISES_DELIVERY_GROWTH,
      title: "Solutions Built for Growth",
      subtitle:
        "Scalable architectures and modern platforms help solutions adapt as business priorities, users and technology needs evolve.",
    },
    {
      id: "collaborative-partnership",
      image: ASSETS.PROMISES_DELIVERY_COLLABORATIVE,
      title: "Collaborative Partnership",
      subtitle:
        "We work as an integrated extension of your team, providing transparent communication, proactive guidance and ongoing support.",
    },
  ],
};

export const PROMISES_DELIVERY_DATA = HOMEPAGE_PROMISES_DELIVERY_DATA;
export const promisesDeliveryData = HOMEPAGE_PROMISES_DELIVERY_DATA;
