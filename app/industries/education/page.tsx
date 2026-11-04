import type { Metadata } from "next";
import Education from "@/components/Pages/IndustriesPages/Education";
import { getMetatags } from "@/utils/seo.utils";
import { educationSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(educationSeo, baseUrl);
}

export default function EducationPage() {
  return <Education />;
}

