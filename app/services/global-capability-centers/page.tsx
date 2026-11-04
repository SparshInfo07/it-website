import React from "react";
import type { Metadata } from "next";
import GlobalCapabilityCenters from "@/components/Pages/ServicePages/GlobalCapabilityCenters";
import { getMetatags } from "@/utils/seo.utils";
import { globalCapabilityCentersSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(globalCapabilityCentersSeo, baseUrl);
}

const Page = () => {
  return <GlobalCapabilityCenters />;
};

export default Page;
