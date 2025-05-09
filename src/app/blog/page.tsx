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

          {posts.length > 0 ? (
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
          ) : (
            <div className="my-8 p-6 bg-vt-blue/10 rounded-lg">
              <h2 className="text-xl font-bold text-vt-blue font-lexend-deca mb-2">Coming Soon!</h2>
              <p className="text-vt-silver">We're currently working on our blog content. Check back soon for updates!</p>
            </div>
          )}
        </div>
      </main>
    </BackgroundLayout>
  );
}

async function getPosts(): Promise<PostMeta[]> {
  try {
    const postsDir = path.join(process.cwd(), 'src/content/blog');
    
    // Check if directory exists
    try {
      await fs.access(postsDir);
    } catch (error) {
      console.warn('Blog content directory not found:', error);
      return [];
    }
    
    const filenames = await fs.readdir(postsDir);

    const posts = await Promise.all(
      filenames.map(async (filename) => {
        try {
          const filePath = path.join(postsDir, filename);
          const fileContent = await fs.readFile(filePath, 'utf-8');
          const { data } = matter(fileContent);
          return data as PostMeta;
        } catch (error) {
          console.error(`Error reading blog post ${filename}:`, error);
          return null;
        }
      })
    );

    return posts.filter((post): post is PostMeta => post !== null);
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}
