import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Growth Packages — Silver, Gold & Premium | Sparsh IT",
  description:
    "Compare Sparsh IT’s three transparent growth packages: Silver (Get Online), Gold (Manage Online), and Premium (Sell & Scale).",
};

export default function PackagesPage() {
  return <CuratedSinglePage pageKey="packages" />;
}
