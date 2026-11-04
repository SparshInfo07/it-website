import type { Metadata } from "next";
import Healthcare from "@/components/Pages/IndustriesPages/Healthcare";
import { getMetatags } from "@/utils/seo.utils";
import { healthcareSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(healthcareSeo, baseUrl);
}

export default function HealthcarePage() {
  return <Healthcare />;
}

