// src/app/blog/page.tsx
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';
import { client, projectId } from '@/lib/sanity';
import { postsQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';
import { format } from 'date-fns';

export default async function BlogIndexPage() {
  // Try to fetch posts, but handle failures gracefully
  let posts: Post[] = [];
  try {
    // Only fetch if projectId exists
    if (client && projectId) {
      posts = await client.fetch(postsQuery);
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <BackgroundLayout>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
          <h1 className="text-4xl font-bold mb-10 text-vt-blue font-lexend-deca">Blog</h1>

          {posts.length > 0 ? (
            <div className="space-y-12">
              {posts.map((post: Post) => (
                <div key={post._id || (typeof post.slug === 'string' ? post.slug : post.slug?.current)}>
                  <h2 className="text-2xl font-bold text-vt-blue font-lexend-deca mb-1">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.publishedAt && (
                   <p className="text-sm text-vt-pink mb-2">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                  )}
                  <p className="text-vt-silver">{post.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-8 p-6 bg-vt-blue/10 rounded-lg">
              <h2 className="text-xl font-bold text-vt-blue font-lexend-deca mb-2">Coming Soon!</h2>
              <p className="text-vt-silver">We&apos;re currently working on our blog content. Check back soon for updates!</p>
            </div>
          )}
        </div>
      </main>
    </BackgroundLayout>
  );
}

export function generateMetadata() {
  return {
    title: 'Blog | Vibrant Technology',
    description: 'Insights and updates from our team on technology strategies for business growth.'
  };
}