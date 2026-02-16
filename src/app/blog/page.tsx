// src/app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-16 sm:mt-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-lexend-deca drop-shadow-lg mb-4">
            Our Thinking
          </h1>
          <p className="text-xl text-white/90 font-lexend-deca drop-shadow-md max-w-3xl mx-auto">
            Insights on technology strategy, IT leadership, and building systems that actually work.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post, index: number) => {
              // Alternate card positioning for asymmetric feel
              const offsetClass = index % 3 === 1 ? 'md:mt-8' : '';
              
              return (
                <Link 
                  key={post._id || (typeof post.slug === 'string' ? post.slug : post.slug?.current)}
                  href={`/blog/${typeof post.slug === 'string' ? post.slug : post.slug?.current}`}
                  className={`group block ${offsetClass}`}
                >
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(0,116,188,0.4)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    {/* Featured Image */}
                    {post.mainImage?.asset?.url ? (
                      <div className="relative h-48 sm:h-96 w-full overflow-hidden">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.title || 'Blog post'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Gradient overlay on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                    ) : (
                      // Placeholder with brand color gradient
                      <div className="relative h-48 sm:h-96 w-full bg-gradient-to-br from-vt-blue to-vt-pink flex items-center justify-center">
                        <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Date */}
                      {post.publishedAt && (
                        <p className="text-sm text-vt-pink font-lexend-deca mb-3">
                          {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </p>
                      )}
                      
                      {/* Title */}
                      <h2 className="text-2xl font-bold text-vt-blue font-lexend-deca mb-3 group-hover:text-vt-pink transition-colors">
                        {post.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-gray-600 font-lexend-deca leading-relaxed mb-4 flex-1">
                        {post.description}
                      </p>
                    </div>
                    {/* Glossy overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          // No posts fallback
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-lg p-12 shadow-2xl text-center border border-white/40">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none rounded-lg"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-vt-blue font-lexend-deca mb-4">
                  Fresh Content Coming Soon
                </h2>
                <p className="text-lg text-gray-600 font-lexend-deca mb-6">
                  We&apos;re crafting insightful articles on IT strategy, leadership, and building
                  technology that runs dark. Check back soon for our latest thinking.
                </p>
                <Link 
                  href="/contact"
                  className="relative overflow-hidden inline-block bg-vt-blue/85 text-white rounded-md text-lg font-semibold hover:bg-vt-blue/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
                  <span className="relative z-10 block px-8 py-3">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </BackgroundLayout>
  );
}

export function generateMetadata() {
  return {
    title: 'Blog | Vibrant Technology',
    description: 'Insights and updates on technology strategy, IT leadership, and building systems that run quietly and effectively.'
  };
}