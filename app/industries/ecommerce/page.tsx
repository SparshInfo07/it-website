import type { Metadata } from "next";
import Ecommerce from "@/components/Pages/IndustriesPages/Ecommerce";
import { getMetatags } from "@/utils/seo.utils";
import { ecommerceSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(ecommerceSeo, baseUrl);
}

export default function EcommercePage() {
  return <Ecommerce />;
}

