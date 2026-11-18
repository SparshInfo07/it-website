import type { Metadata } from "next";
import CuratedSinglePage from "@/components/Pages/CuratedSinglePage";

export const metadata: Metadata = {
  title: "Manufacturers & Wholesale Digital Solutions | Sparsh IT",
  description:
    "Digital technical catalogues, multi-SKU RFQ quotation engines, and distributor portals built for manufacturers and wholesale suppliers.",
};

export default function ManufacturersWholesalePage() {
  return <CuratedSinglePage pageKey="industries/manufacturers-wholesale" />;
}
