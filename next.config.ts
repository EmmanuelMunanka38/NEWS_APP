import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows images from any secure news source
      },
      {
        protocol: 'http',
        hostname: '**', // Some older news sites still use http
      },
    ],
  },
  // Optional: Add this if you want to suppress hydration warnings from browser extensions
  /* experimental: { 
    optimizePackageImports: ['lucide-react'], 
  } */
};

export default nextConfig;