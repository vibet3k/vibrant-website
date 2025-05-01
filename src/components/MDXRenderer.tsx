'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import MDXClientWrapper from './MDXClientWrapper';

interface Props {
  slug: string;
}

export default function MDXRenderer({ slug }: Props) {
  const PostContent = useMemo(
    () => dynamic(() => import(`@/content/blog/${slug}.mdx`), { ssr: false }),
    [slug]
  );

  return (
    <MDXClientWrapper>
      <PostContent />
    </MDXClientWrapper>
  );
}
