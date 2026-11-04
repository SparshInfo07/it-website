import type { Metadata } from "next";
import Hospitality from "@/components/Pages/IndustriesPages/Hospitality";
import { getMetatags } from "@/utils/seo.utils";
import { hospitalitySeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(hospitalitySeo, baseUrl);
}

export default function HospitalityPage() {
  return <Hospitality />;
}

