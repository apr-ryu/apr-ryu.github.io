import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
  // devIndicators: false,
  compilerOptions: {
    esModuleInterop: true,
    // ... other options
  },
};

export default nextConfig;
