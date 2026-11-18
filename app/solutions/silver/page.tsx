import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Silver Package — Get Online | Sparsh IT",
  description:
    "Establish a fast, search-ready digital storefront with product or service showcase pages and instant WhatsApp & enquiry routing.",
};

export default function SilverSolutionPage() {
  return <CuratedSinglePage pageKey="solutions/silver" />;
}
