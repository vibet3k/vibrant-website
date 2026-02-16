// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import BackgroundLayout from '@/components/BackgroundLayout';
import { client, projectId } from '@/lib/sanity';
import { postQuery, postsQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Blog post details',
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page(props: BlogPostPageProps) {
  const { slug } = await props.params;
  
  // Try to fetch the post data
  let post: Post | null = null;
  let recentPosts: Post[] = [];
  
  try {
    if (client && projectId) {
      post = await client.fetch(postQuery, { slug });
      // Fetch recent posts for "More from Our Thinking" section
      recentPosts = await client.fetch(postsQuery);
      // Filter out current post and limit to 3
      recentPosts = recentPosts
        .filter(p => (typeof p.slug === 'string' ? p.slug : p.slug?.current) !== slug)
        .slice(0, 3);
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
  
  return (
    <BackgroundLayout>
      <main className="mx-auto px-6 py-16 mt-12 max-w-[1400px]">
        {/* Back to Blog Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-white hover:text-white/80 transition-colors font-lexend-deca mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>

        {post ? (
          <>
            {/* Hero Image with Title Overlay */}
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl mb-12">
              {post.mainImage?.asset?.url ? (
                <>
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title || 'Blog post image'}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </>
              ) : (
                // Fallback gradient if no image
                <div className="absolute inset-0 bg-gradient-to-br from-vt-blue via-vt-pink to-vt-green"></div>
              )}
              
              {/* Title and Date Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                  {post.publishedAt && (
                    <p className="text-vt-pink font-lexend-deca mb-4 text-lg">
                      {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                    </p>
                  )}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca leading-tight" style={{textShadow: '0 0 20px rgba(239, 91, 161, 0.8), 0 0 40px rgba(239, 91, 161, 0.6)'}}>
                    {post.title}
                  </h1>
                  {post.description && (
                    <p className="text-xl text-white/90 mt-4 font-lexend-deca drop-shadow-lg">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative">
              {/* White content card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 max-w-7xl mx-auto border border-white/40">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none rounded-xl"></div>
                
                {/* Article Content */}
                <article className="prose prose-lg prose-vt max-w-none relative z-10">
                  <PortableText 
                    value={post.body}
                    components={{
                      list: {
                        bullet: ({children}) => <ul className="mt-4 mb-4 space-y-2">{children}</ul>,
                      },
                      listItem: {
                        bullet: ({children}) => <li className="my-1">{children}</li>,
                      },
                      block: {
                        normal: ({children}) => <p className="my-4 leading-relaxed text-gray-700">{children}</p>,
                        h1: ({children}) => <h1 className="mt-8 mb-4 text-vt-blue">{children}</h1>,
                        h2: ({children}) => <h2 className="mt-6 mb-3 text-vt-blue">{children}</h2>,
                        h3: ({children}) => <h3 className="mt-5 mb-2 text-vt-blue">{children}</h3>,
                        h4: ({children}) => <h4 className="mt-4 mb-2 text-vt-blue">{children}</h4>,
                      },
                      types: {
                        image: ({value}) => {
                          return (
                            <div className="my-8 rounded-lg overflow-hidden shadow-xl">
                              <Image
                                src={value.asset.url}
                                alt={value.alt || 'Blog image'}
                                width={800}
                                height={500}
                                className="w-full"
                              />
                            </div>
                          );
                        },
                        callout: ({value}) => {
                          type CalloutType = 'info' | 'warning' | 'tip';
                          
                          const typeStyles: Record<CalloutType, string> = {
                            info: "bg-blue-50 border-l-4 border-vt-blue",
                            warning: "bg-amber-50 border-l-4 border-vt-red-orange",
                            tip: "bg-green-50 border-l-4 border-vt-green"
                          };
                          
                          const calloutType = (value.type as CalloutType) || 'info';
                          const style = typeStyles[calloutType in typeStyles ? calloutType : 'info'];
                          
                          return (
                            <div className={`p-4 my-6 rounded-r-lg ${style}`}>
                              <div className="space-y-2">
                                <PortableText value={value.content} />
                              </div>
                            </div>
                          );
                        }
                      }
                    }}
                  />
                </article>
              </div>
            </div>

            {/* More from Our Thinking Section */}
            {recentPosts.length > 0 && (
              <div className="mt-24">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend-deca text-center mb-12 drop-shadow-lg">
                  More from Our Thinking
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {recentPosts.map((relatedPost: Post) => (
                    <Link
                      key={relatedPost._id || (typeof relatedPost.slug === 'string' ? relatedPost.slug : relatedPost.slug?.current)}
                      href={`/blog/${typeof relatedPost.slug === 'string' ? relatedPost.slug : relatedPost.slug?.current}`}
                      className="group"
                    >
                      <div className="relative bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                        {/* Thumbnail Image */}
                        {relatedPost.mainImage?.asset?.url ? (
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={relatedPost.mainImage.asset.url}
                              alt={relatedPost.title || 'Blog post'}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="relative h-48 w-full bg-gradient-to-br from-vt-blue to-vt-pink"></div>
                        )}
                        
                        {/* Card Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-vt-blue font-lexend-deca mb-2 group-hover:text-vt-pink transition-colors">
                            {relatedPost.title}
                          </h3>
                          {relatedPost.publishedAt && (
                            <p className="text-sm text-vt-pink font-lexend-deca">
                              {format(new Date(relatedPost.publishedAt), 'MMMM d, yyyy')}
                            </p>
                          )}
                        </div>
                        
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          // Fallback if post not found
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-12 shadow-2xl border border-white/40">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none rounded-xl"></div>
              <div className="relative z-10">
                <h1 className="text-4xl font-bold text-vt-blue font-lexend-deca mb-4">
                  Post Not Found
                </h1>
                <p className="text-lg text-gray-600 font-lexend-deca mb-6">
                  We couldn&apos;t find the post you&apos;re looking for. It may have been moved or deleted.
                </p>
                <Link 
                  href="/blog"
                  className="relative overflow-hidden inline-block bg-vt-blue/85 text-white rounded-md text-lg font-semibold hover:bg-vt-blue/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-90 pointer-events-none"></div>
                  <span className="relative z-10 block px-8 py-3">
                    Back to Blog
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