import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';

interface PostMeta {
  title: string;
  slug: string;
  date: string;
  description: string;
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <BackgroundLayout>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
          <h1 className="text-4xl font-bold mb-10 text-vt-blue font-lexend-deca">Blog</h1>

          <div className="space-y-12">
            {posts.map((post) => (
              <div key={post.slug}>
                <h2 className="text-2xl font-bold text-vt-blue font-lexend-deca mb-1">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-vt-pink mb-2">{post.date}</p>
                <p className="text-vt-silver">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}

async function getPosts(): Promise<PostMeta[]> {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const filenames = await fs.readdir(postsDir);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return data as PostMeta;
    })
  );

  return posts;
}
