import type { Metadata } from "next";
import Banking from "@/components/Pages/IndustriesPages/Banking";
import { getMetatags } from "@/utils/seo.utils";
import { bankingSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(bankingSeo, baseUrl);
}

export default function BankingPage() {
  return <Banking />;
}
