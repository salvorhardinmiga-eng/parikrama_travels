import type { NextConfig } from "next";

// Check if we are running in GitHub Actions (deployment) or locally
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Hard-coded sub-path for GitHub Pages
  basePath: isGithubActions ? '/parikrama_travels' : '',
  assetPrefix: isGithubActions ? '/parikrama_travels/' : '',
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
