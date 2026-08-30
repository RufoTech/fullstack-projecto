import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "code.edu.az",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
