import type { Metadata } from "next";
import ArtificialIntelligence from "@/components/Pages/ServicePages/ArtificialIntelligence";
import { getMetatags } from "@/utils/seo.utils";
import { artificialIntelligenceSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(artificialIntelligenceSeo, baseUrl);
}

export default function ArtificialIntelligencePageRoute() {
  return <ArtificialIntelligence />;
}
