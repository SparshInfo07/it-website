import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Our Philosophy | Sparsh IT",
  description:
    "Why Sparsh IT builds business-first software architectures centered on commercial outcomes, zero-friction UX, and modular longevity.",
};

export default function OurPhilosophyPage() {
  return <CuratedSinglePage pageKey="our-philosophy" />;
}
