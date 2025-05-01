import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove the 'mdxRs' experimental flag if it exists
  experimental: {
    // Any other experimental features can stay
  },
  // Remove '.md' and '.mdx' from pageExtensions if they're there
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default nextConfig;