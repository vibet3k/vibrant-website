import type { MetadataRoute } from 'next';
import { getPostsSafe } from '@/lib/sanity/fetch';

const BASE_URL = 'https://www.vibet3k.com';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const posts = await getPostsSafe();
  const postRoutes: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current;
    if (!slug) return [];
    return [
      {
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
    ];
  });

  return [...staticRoutes, ...postRoutes];
}
