import { ASSETS } from "@/constants/images.constants";
import type { DifferentIndustriesData } from "@/data/HomePage/differentIndustries.data";

const lead = (title: string, body: string) =>
  `<strong class="block text-[#061826] mb-1">${title}</strong>${body}`;

export const SERVICES_DIFFERENT_INDUSTRIES_DATA: DifferentIndustriesData = {
  heading: "Why One Team <br /> Works Better.",
  subheading:
    "Design, development and AI work best when they are planned together. One team means fewer hand-offs, faster decisions and a product that feels consistent from the first screen to the last feature.",
  industries: [
    {
      id: "design-led",
      name: "Design-Led From Day One",
      tagline: lead("Every build starts with the user.", "Our UI/UX designers plan the flows and screens before development begins, so the website or app is easy to use the moment it launches."),
      image: ASSETS.SERVICE_ENTERPRISE_ALIGNED_ARCHITECTURE,
      alt: "Design-led product development",
      href: "/services/ui-ux-design-and-digital-experience",
    },
    {
      id: "one-team",
      name: "Design, Build & AI Together",
      tagline: lead("No gaps between disciplines.", "Designers, web and app developers and AI engineers share one plan, one backlog and one point of contact, so nothing gets lost between teams."),
      image: ASSETS.SERVICE_MULTIDISCIPLINARY_ENGINEERING_CONVERGENCE,
      alt: "One integrated team",
      href: "/how-we-work",
    },
    {
      id: "quality",
      name: "Quality You Can See",
      tagline: lead("Tested before you see it.", "Every sprint ends with a working demo that has been checked on real devices for speed, accessibility and security."),
      image: ASSETS.SERVICE_QUALITY_AS_AN_ENGINEERING_IMPERATIVE,
      alt: "Quality and testing",
      href: "/how-we-work",
    },
    {
      id: "grow",
      name: "Built to Grow With You",
      tagline: lead("Start small, add more later.", "Begin with a website or MVP, then add an app, a CMS or AI features on the same foundations, without starting over."),
      image: ASSETS.SERVICE_COLLABORATIVE_TECHNOLOGY_GOVERNANCE,
      alt: "Products that grow with your business",
      href: "/packages",
    },
  ],
};

export const servicesDifferentIndustriesData =
  SERVICES_DIFFERENT_INDUSTRIES_DATA;
