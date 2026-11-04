import type { Metadata } from "next";
import HomePage from "@/components/Pages/Homepage";
import { getMetatags } from "@/utils/seo.utils";
import { homeSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(homeSeo, baseUrl);
}

export default function Home() {
  return <HomePage />;
}
