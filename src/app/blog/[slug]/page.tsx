import BackgroundLayout from '@/components/BackgroundLayout';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  return (
    <BackgroundLayout>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
          <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">Blog Post Coming Soon</h1>
          <p className="text-sm text-vt-pink mb-8">We&aposre working on our blog</p>

          <article className="prose prose-lg prose-vt max-w-none">
            <p>We&aposre currently migrating our blog to a new content management system.</p>
            <p>Check back soon to see our post: {params.slug}</p>
          </article>
        </div>
      </main>
    </BackgroundLayout>
  );
}