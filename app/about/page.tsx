import type { Metadata } from "next";
import AboutUs from "@/components/Pages/AboutUs";
import { getMetatags } from "@/utils/seo.utils";
import { aboutUsSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(aboutUsSeo, baseUrl);
}

export default function AboutPage() {
  return <AboutUs />;
}
