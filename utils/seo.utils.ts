import { IMAGE_URLS } from "@/constants/images.constants";
import type { Metadata } from "next";
import type { SeoData } from "@/types/seo.types";

export function getMetatags(seoData?: SeoData, baseUrl?: string): Metadata {
  const appEnv =
    process.env.SPARSH_APPLICATION_ENV ||
    process.env.APPLICATION_ENV;

  const isProd =
    appEnv === "prod" ||
    appEnv === "production" ||
    (process.env.NODE_ENV === "production" &&
      appEnv !== "dev" &&
      appEnv !== "development");

  const cleanBase = baseUrl?.replace(/\/$/, "") || "https://sparshit.com";
  const slugPath = seoData?.slug ? `/${seoData.slug.replace(/^\/+/, "")}` : "";
  const canonicalUrl =
    `${cleanBase}${slugPath}`.replace(/\/+$/, "") || cleanBase;

  const imageUrl = seoData?.image || IMAGE_URLS.NO_IMG_PLACEHOLDER;

  const index =
    seoData?.noIndex !== undefined
      ? !seoData.noIndex
      : seoData?.robots?.index !== undefined
        ? seoData.robots.index
        : isProd;

  const follow =
    seoData?.noFollow !== undefined
      ? !seoData.noFollow
      : seoData?.robots?.follow !== undefined
        ? seoData.robots.follow
        : isProd;

  const metadata: Metadata = {
    title: seoData?.title,
    description: seoData?.description,
    icons: {
      icon: "/sparshlogo_short.svg",
      shortcut: "/sparshlogo_short.svg",
      apple: "/sparshlogo_short.svg",
    },
    robots: {
      index,
      follow,
    },

    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: seoData?.title,
      description: seoData?.description,
      type: "website",
      siteName: "Sparsh IT",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title,
      description: seoData?.description,
      images: [imageUrl],
    },
  };

  return metadata;
}
