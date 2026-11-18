import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Premium Package — Sell & Scale | Sparsh IT",
  description:
    "Full-scale commerce, online payment gateways, multi-tier customer accounts, ERP sync, and AI workflow automation.",
};

export default function PremiumSolutionPage() {
  return <CuratedSinglePage pageKey="solutions/premium" />;
}
