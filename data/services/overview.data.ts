import { CORE_SERVICES } from "@/data/coreServices";

export interface ServiceCardItem {
  id: string;
  number?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
}

export interface ServiceOverviewData {
  title: string;
  subtitle?: string;
  description?: string;
  services: ServiceCardItem[];
}

export const SERVICE_OVERVIEW_DATA: ServiceOverviewData = {
  title: "Four Services. One Team from Idea to Launch.",
  subtitle:
    "Design, build and make it smarter. Hire us for one service, or let one team take your product from first sketch to launch and beyond.",
  services: CORE_SERVICES.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title,
    subtitle: s.tagline,
    description: s.summary,
    image: s.image,
    href: s.href,
  })),
};

export const SERVICES_OVERVIEW_DATA = SERVICE_OVERVIEW_DATA;
export const servicesOverviewData = SERVICE_OVERVIEW_DATA;
