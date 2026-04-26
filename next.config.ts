import type { NextConfig } from "next";

// Check if we are running in GitHub Actions (deployment)
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? '/parikrama_travels' : '');

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
