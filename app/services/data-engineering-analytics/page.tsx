import type { Metadata } from "next";
import DataEngineeringAnalytics from "@/components/Pages/ServicePages/DataEngineeringAnalytics";
import { getMetatags } from "@/utils/seo.utils";
import { dataEngineeringAnalyticsSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(dataEngineeringAnalyticsSeo, baseUrl);
}

export default function DataEngineeringAnalyticsPage() {
  return <DataEngineeringAnalytics />;
}
