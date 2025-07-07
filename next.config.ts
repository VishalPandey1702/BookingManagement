import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern approach (Next.js 12.3.0+)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Legacy approach (older versions)
    // domains: ['images.pexels.com'],
  },
};

export default nextConfig;
