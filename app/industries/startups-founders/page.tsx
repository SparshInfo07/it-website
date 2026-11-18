import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Startups & Founders Product Engineering | Sparsh IT",
  description:
    "Rapid MVP engineering, investor-grade product UI/UX, and scalable cloud-native SaaS architectures for ambitious founders.",
};

export default function StartupsFoundersPage() {
  return <CuratedSinglePage pageKey="industries/startups-founders" />;
}
