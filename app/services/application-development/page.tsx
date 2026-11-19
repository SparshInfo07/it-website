import type { Metadata } from "next";
import CoreServicePage from "@/components/Pages/ServicePages/CoreServicePage";
import { getMetatags } from "@/utils/seo.utils";
import { applicationDevelopmentSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(applicationDevelopmentSeo, baseUrl);
}

export default function AppDevelopmentPage() {
  return <CoreServicePage service="app" />;
}
