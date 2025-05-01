import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import BackgroundLayout from '@/components/BackgroundLayout';
import MDXRenderer from '@/components/MDXRenderer';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${params.slug}.mdx`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return (
    <BackgroundLayout>
<main className="max-w-4xl mx-auto px-6 py-16">
  <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
    <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">{data.title}</h1>
    <p className="text-sm text-vt-pink mb-8">{data.date}</p>

    <article className="prose prose-lg prose-vt max-w-none">
        <MDXRenderer slug={params.slug} />
    </article>

  </div>
</main>

    </BackgroundLayout>
  );
}
