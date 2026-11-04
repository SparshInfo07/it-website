import type { Metadata } from "next";
import QualityEngineeringAndSoftwareTesting from "@/components/Pages/ServicePages/QualityEngineeringAndSoftwareTesting";
import { getMetatags } from "@/utils/seo.utils";
import { qualityEngineeringSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(qualityEngineeringSeo, baseUrl);
}

export default function QualityEngineeringAndSoftwareTestingPage() {
  return <QualityEngineeringAndSoftwareTesting />;
}
