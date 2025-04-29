import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allows builds to complete even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  
};

export default nextConfig;
