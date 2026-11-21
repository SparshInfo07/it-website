import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Organisms/Navbar/Navbar";
import ContextProvider from "@/providers/ContextProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparsh IT | Engineering What's Next",
  description:
    "UI/UX design, app development, website development and AI & intelligence, from one focused digital product studio.",
  icons: {
    icon: "/sparshlogo_short.svg",
    shortcut: "/sparshlogo_short.svg",
    apple: "/sparshlogo_short.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} antialiased`}
    >
      <body suppressHydrationWarning className="">
        <ContextProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </ContextProvider>
        {/* Myntics chat widget, loaded on every page after the page becomes interactive. */}
        <Script
          id="myntics-chat"
          src="https://chat.myntics.com/api/v1/embed/wk_f4ef1c5d6c5539c5d7f20c82c8e92acf.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
