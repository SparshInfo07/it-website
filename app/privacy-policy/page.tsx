import { Metadata } from "next";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Sparsh IT",
  description:
    "Learn about how Sparsh IT collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

