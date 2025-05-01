'use client';

import { MDXProvider } from '@mdx-js/react';

export default function MDXClientWrapper({ children }: { children: React.ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>;
}
