import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.vibet3k.com/sitemap.xml',
    host: 'https://www.vibet3k.com',
  };
}
