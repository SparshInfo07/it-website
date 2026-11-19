import type { Metadata } from "next";
import CoreServicePage from "@/components/Pages/ServicePages/CoreServicePage";
import { getMetatags } from "@/utils/seo.utils";
import { uiUxDesignSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(uiUxDesignSeo, baseUrl);
}

export default function UiUxDesignPage() {
  return <CoreServicePage service="ui-ux" />;
}
