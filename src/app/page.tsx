import Hero from '@/components/Hero';
import { getPostsSafe } from '@/lib/sanity/fetch';

// Revalidate hourly. The homepage only surfaces the three most recent posts,
// so it does not need to be dynamic on every request.
export const revalidate = 3600;

export default async function Home() {
  const recentPosts = (await getPostsSafe()).slice(0, 3);

  return (
    <div className="w-full min-h-screen font-lexend-deca">
      <main className="flex flex-col items-center w-full">
        <Hero recentPosts={recentPosts} />
      </main>
    </div>
  );
}
