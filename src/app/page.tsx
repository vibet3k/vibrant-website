import Hero from '@/components/Hero';
import { getPostsSafe } from '@/lib/sanity/fetch';

// Revalidate hourly. The homepage only surfaces the three most recent posts,
// so it does not need to be dynamic on every request.
export const revalidate = 3600;

export default async function Home() {
  const recentPosts = (await getPostsSafe()).slice(0, 3);

  // No centring wrapper here. `items-center` on this main used to collapse
  // BackgroundLayout to content width, which is why the footer logo sat inset
  // on Home but flush right everywhere else. Hero renders BackgroundLayout,
  // which already owns the full-page layout.
  return (
    <div className="w-full min-h-screen font-lexend-deca">
      <Hero recentPosts={recentPosts} />
    </div>
  );
}
