import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Service Businesses Digital Platforms | Sparsh IT",
  description:
    "Authority websites, automated appointment booking, and client intake workflows built for modern service businesses and consultancies.",
};

export default function ServiceBusinessesPage() {
  return <CuratedSinglePage pageKey="industries/service-businesses" />;
}
