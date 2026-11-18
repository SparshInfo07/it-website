import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Sparsh IT",
  description:
    "Straightforward answers about Sparsh IT project timelines, package pricing, 100% source-code ownership, CMS training, and post-launch support.",
};

export default function FaqsPage() {
  return <CuratedSinglePage pageKey="faqs" />;
}
