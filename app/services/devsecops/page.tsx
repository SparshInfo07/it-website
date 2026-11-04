import type { Metadata } from "next";
import DevSecOps from "@/components/Pages/ServicePages/Dev_secOps";
import { getMetatags } from "@/utils/seo.utils";
import { devSecOpsSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(devSecOpsSeo, baseUrl);
}

export default function DevSecOpsPage() {
  return <DevSecOps />;
}
