import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Digital Transformation Journey | Sparsh IT",
  description:
    "See how traditional offline businesses transform scattered PDFs and WhatsApp chats into a connected digital showroom, RFQ engine, and owner workspace.",
};

export default function TransformationPage() {
  return <CuratedSinglePage pageKey="transformation" />;
}
