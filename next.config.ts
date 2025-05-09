import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keep existing config
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default nextConfig;