import type { Metadata } from "next";
import MobileApplicationDevelopment from "@/components/Pages/ServicePages/MobileApplicationDevelopment";
import { getMetatags } from "@/utils/seo.utils";
import { mobileApplicationDevelopmentSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(mobileApplicationDevelopmentSeo, baseUrl);
}

export default function MobileApplicationDevelopmentPage() {
  return <MobileApplicationDevelopment />;
}
