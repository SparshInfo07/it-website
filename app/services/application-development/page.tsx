import type { Metadata } from "next";
import ServiceApplication from "@/components/Pages/ServicePages/Application_development";
import { getMetatags } from "@/utils/seo.utils";
import { applicationDevelopmentSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(applicationDevelopmentSeo, baseUrl);
}

export default function ApplicationDevelopmentPage() {
  return <ServiceApplication />;
}
