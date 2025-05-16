// src/app/blog/page.tsx
import Link from 'next/link';
import BackgroundLayout from '@/components/BackgroundLayout';
import { client, projectId } from '@/lib/sanity';
import { postsQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';
import { format } from 'date-fns';

export const revalidate = 0;

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
      <main className="mx-auto px-6 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10 min-h-[600px] w-[1000px] max-w-full mx-auto">
          <div className="mb-6 pb-4 border-b-2 border-gradient-to-r from-vt-blue to-vt-pink">
            <h1 className="text-4xl font-bold text-vt-blue font-lexend-deca">Blog</h1>
            <p className="text-vt-silver mt-2 text-lg">Insights on technology strategy for ambitious businesses</p>
          </div>

          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post: Post) => (
                <div key={post._id || (typeof post.slug === 'string' ? post.slug : post.slug?.current)} 
                     className="group hover:bg-blue-50/30 p-4 rounded-lg transition-colors">
                  <h2 className="text-2xl font-bold text-vt-blue font-lexend-deca mb-1">
                    <Link href={`/blog/${typeof post.slug === 'string' ? post.slug : post.slug?.current}`} className="hover:text-vt-pink transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  {post.publishedAt && (
                    <p className="text-sm text-vt-pink mb-2">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                  )}
                  <p className="text-vt-silver leading-relaxed">{post.description}</p>
                  <Link 
                    href={`/blog/${typeof post.slug === 'string' ? post.slug : post.slug?.current}`} 
                    className="inline-block mt-2 text-vt-blue hover:text-vt-pink transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-4 p-3 bg-vt-blue/10 rounded-lg">
              <h2 className="text-xl font-bold text-vt-blue font-lexend-deca mb-1">Coming Soon!</h2>
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