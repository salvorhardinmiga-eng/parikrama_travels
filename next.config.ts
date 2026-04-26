import type { NextConfig } from "next";

// Check if we are running in GitHub Actions (deployment)
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Simplified: Only use basePath. Next.js handles assets automatically with this.
  basePath: isGithubActions ? '/parikrama_travels' : '',
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
