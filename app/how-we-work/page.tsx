import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "How We Work — Our 4-Step Delivery Process | Sparsh IT",
  description:
    "Discover how Sparsh IT takes your project from discovery and interactive prototyping to agile engineering, launch, and continuous growth.",
};

export default function HowWeWorkPage() {
  return <CuratedSinglePage pageKey="how-we-work" />;
}
