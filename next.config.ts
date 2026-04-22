import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.equitation28.com" },
    ],
  },
};

export default nextConfig;
