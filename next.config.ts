import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.scdn.co'],
    unoptimized: true
  },
  output: 'export'
};

export default nextConfig;
