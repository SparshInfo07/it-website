import { ASSETS } from "@/constants/images.constants";

export interface ContactCardItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const CONTACT_CARDS_DATA: ContactCardItem[] = [
  {
    eyebrow: "Explore our services",
    title: "Find the Right Solution",
    description:
      "Discover how Sparsh IT’s technology and digital solutions can support your business goals.",
    href: "/services",
    icon: ASSETS.CONTACT_RESOURCE_SOLUTION,
  },
  {
    eyebrow: "Our work",
    title: "See Ideas in Action",
    description:
      "Discover how strategy, technology, and execution come together in our work.",
    href: "#",
    icon: ASSETS.CONTACT_RESOURCE_IDEAS_ACTION,
  },
  {
    eyebrow: "Join Sparsh IT",
    title: "Grow with Us",
    description:
      "Looking for your next opportunity? Explore careers and grow with a team building what’s next.",
    href: "/join-us",
    icon: ASSETS.CONTACT_RESOURCE_GROW_WITH_US,
  },
];

export const contactCardsData = CONTACT_CARDS_DATA;
