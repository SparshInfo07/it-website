import type { Metadata } from "next";
import IndustriesMainPage from "@/components/Pages/IndustriesPages/IndustriesMainPage";
import { getMetatags } from "@/utils/seo.utils";
import { industriesSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(industriesSeo, baseUrl);
}

export default function IndustriesPage() {
  return <IndustriesMainPage />;
}
