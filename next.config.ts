import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // If your repository is not at the root (e.g., username.github.io/repo-name/),
  // uncomment the line below and replace 'repo-name' with your actual repository name.
  // basePath: '/parikrama_travels',
};

export default nextConfig;
