import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Product Showcase | Sparsh IT",
  description:
    "Explore four signature digital product architectures engineered by Sparsh IT—from 24/7 digital showrooms to B2B quotation systems and unified admin dashboards.",
};

export default function ShowcasePage() {
  return <CuratedSinglePage pageKey="showcase" />;
}
