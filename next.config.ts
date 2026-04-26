import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Automatically handle the base path for GitHub Pages in production
  basePath: isProd ? '/parikrama_travels' : '',
  // Use the same for assetPrefix to ensure CSS/JS load correctly
  assetPrefix: isProd ? '/parikrama_travels/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
