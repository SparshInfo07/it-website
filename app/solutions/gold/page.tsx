import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Gold Package — Manage Online | Sparsh IT",
  description:
    "Run your dynamic product catalogue, custom CMS dashboard, and structured B2B quotation workflow from one unified platform.",
};

export default function GoldSolutionPage() {
  return <CuratedSinglePage pageKey="solutions/gold" />;
}
