import { Metadata } from "next";
import CookiePolicy from "@/components/Pages/CookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy | Sparsh IT",
  description:
    "Learn about how Sparsh IT uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}

