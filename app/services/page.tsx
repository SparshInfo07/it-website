import type { Metadata } from "next";
import Services from "@/components/Pages/Services";
import { getMetatags } from "@/utils/seo.utils";
import { servicesSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(servicesSeo, baseUrl);
}

export default function ServicesPage() {
  return <Services />;
}
