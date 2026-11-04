import type { Metadata } from "next";
import Logistics from "@/components/Pages/IndustriesPages/Logistics";
import { getMetatags } from "@/utils/seo.utils";
import { logisticsSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(logisticsSeo, baseUrl);
}

export default function LogisticsPage() {
  return <Logistics />;
}

