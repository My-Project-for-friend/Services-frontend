import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextBundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", // Enable analyzer with the environment variable ANALYZE=true
});

const nextConfig: NextConfig = nextBundleAnalyzer({
  reactStrictMode: true, // Enforce React strict mode
  // Other Next.js config options
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Fix issues with `fs` in client-side code
      };
    }
    return config;
  },
});

export default nextConfig;
