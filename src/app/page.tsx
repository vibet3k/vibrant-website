import Hero from '@/components/Hero';
import { client, projectId } from '@/lib/sanity';
import { postsQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';

export const revalidate = 0;

export default async function Home() {
  let recentPosts: Post[] = [];
  try {
    if (client && projectId) {
      const allPosts = await client.fetch(postsQuery);
      recentPosts = allPosts.slice(0, 3);
    }
  } catch (error) {
    console.error('Error fetching recent posts:', error);
  }

  return (
    <div className="w-full min-h-screen font-lexend-deca">
      <main className="flex flex-col items-center w-full">
        <Hero recentPosts={recentPosts} />
      </main>
    </div>
  );
}
