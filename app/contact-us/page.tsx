import type { Metadata } from "next";
import ContactUs from "@/components/Pages/ContactUs";
import { getMetatags } from "@/utils/seo.utils";
import { contactUsSeo } from "@/data/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL || "https://sparshit.com";
  return getMetatags(contactUsSeo, baseUrl);
}

export default function ContactUsPage() {
  return <ContactUs />;
}
