// src/app/blog/[slug]/page.tsx
import BackgroundLayout from '@/components/BackgroundLayout';
import type { Metadata } from 'next';

// Define properly typed params
interface BlogParams {
  slug: string;
}

// Define props type according to Next.js requirements
interface PageProps {
  params: BlogParams;
  searchParams: Record<string, string | string[] | undefined>;
}

export default function BlogPostPage({ params }: PageProps): JSX.Element {
  return (
    <BackgroundLayout>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
          <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">Blog Post Coming Soon</h1>
          <p className="text-sm text-vt-pink mb-8">We&apos;re working on our blog</p>
          <article className="prose prose-lg prose-vt max-w-none">
            <p>We&apos;re currently migrating our blog to a new content management system.</p>
            <p>Check back soon to see our post: {params.slug}</p>
          </article>
        </div>
      </main>
    </BackgroundLayout>
  );
}

// Properly typed metadata function
export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `${params.slug} | Vibrant Technology Blog`,
    description: 'Our blog content is coming soon.'
  };
}