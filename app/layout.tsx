import type { Metadata } from "next";
import { Manrope } from "next/font/google";
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
    "Strategy, software, cloud, data, AI and design-engineered into digital products that move businesses forward.",
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
      </body>
    </html>
  );
}
