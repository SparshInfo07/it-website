import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Selected Work & Case Blueprints | Sparsh IT",
  description:
    "Explore Forme Catalogue, Atelier Commerce, and Flow Booking—three signature digital commerce and operations platforms engineered by Sparsh IT.",
};

export default function SelectedWorkPage() {
  return <CuratedSinglePage pageKey="selected-work" />;
}
