import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired services now point to the closest of the four current ones.
  async redirects() {
    return [
      { source: "/services/mobile-application-development", destination: "/services/application-development", permanent: true },
      { source: "/services/devsecops", destination: "/services", permanent: true },
      { source: "/services/data-engineering-analytics", destination: "/services/artificial-intelligence", permanent: true },
      { source: "/services/quality-engineering-and-software-testing", destination: "/services/application-development", permanent: true },
      { source: "/services/global-capability-centers", destination: "/services", permanent: true },
    ];
  },
  /* config options here */
  images: {
    qualities: [75, 95],
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
