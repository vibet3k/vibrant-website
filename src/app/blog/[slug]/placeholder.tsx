// src/app/blog/[slug]/placeholder.tsx
import BackgroundLayout from '@/components/BackgroundLayout';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPlaceholder(props: Props) {
  const { params } = props;
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