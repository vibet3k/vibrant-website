// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BackgroundLayout from '@/components/BackgroundLayout';
import { getPost, getPostSlugs, getPostsSafe } from '@/lib/sanity/fetch';
import { Post } from '@/lib/sanity/types';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    return (await getPostSlugs()).map((slug) => ({ slug }));
  } catch (error) {
    // Don't fail the build if Sanity is unreachable — fall back to on-demand
    // rendering for every post.
    console.error('Error fetching slugs for generateStaticParams:', error);
    return [];
  }
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await props.params;

  let post: Post | null = null;
  try {
    post = await getPost(slug);
  } catch (error) {
    console.error('Error fetching post for metadata:', error);
  }

  if (!post) {
    return {
      title: 'Post Not Found',
      description:
        'Insights on technology strategy, IT leadership, and building systems that run quietly and effectively.',
      robots: { index: false, follow: true },
    };
  }

  const imageUrl = post.mainImage?.asset?.url;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      url: `/blog/${slug}`,
      title: `${post.title} | Vibrant Technology`,
      description: post.description,
      publishedTime: post.publishedAt,
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Vibrant Technology`,
      description: post.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function Page(props: BlogPostPageProps) {
  const { slug } = await props.params;

  // Deliberately unguarded: if Sanity throws, that's a 500 (error.tsx), not a
  // 404. Only a successful query returning nothing means the post is gone.
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }

  // Related posts are decorative — an outage here shouldn't take down the post.
  const recentPosts = (await getPostsSafe())
    .filter((p) => (typeof p.slug === 'string' ? p.slug : p.slug?.current) !== slug)
    .slice(0, 3);

  const imageUrl = post.mainImage?.asset?.url;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: imageUrl ? [imageUrl] : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vibet3k.com/blog/${slug}`,
    },
    author: post.author?.name
      ? { '@type': 'Person', name: post.author.name }
      : { '@type': 'Organization', name: 'Vibrant Technology' },
    publisher: {
      '@type': 'Organization',
      name: 'Vibrant Technology',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vibet3k.com/images/vibrant-tech-logo-noTL.png',
      },
    },
  };

  return (
    <BackgroundLayout>
      <main className="mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-16 sm:mt-12 max-w-[1400px]">
        {/* Back to Blog Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-white hover:underline transition-colors font-lexend-deca mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Hero Image with Title Overlay */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl mb-8 sm:mb-12">
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
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              {post.publishedAt && (
                <p className="text-vt-pink font-lexend-deca mb-2 sm:mb-4 text-sm sm:text-lg">
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </p>
              )}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend-deca leading-tight" style={{textShadow: '0 0 20px rgba(226, 22, 119, 0.8), 0 0 40px rgba(226, 22, 119, 0.6)'}}>
                {post.title}
              </h1>
              {post.description && (
                <p className="text-base sm:text-xl text-white/90 mt-2 sm:mt-4 font-lexend-deca drop-shadow-lg">
                  {post.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* White content card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 sm:p-8 md:p-12 max-w-7xl mx-auto border border-white/40">
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
                      <div className="relative h-32 sm:h-48 w-full overflow-hidden">
                        <Image
                          src={relatedPost.mainImage.asset.url}
                          alt={relatedPost.title || 'Blog post'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="relative h-32 sm:h-48 w-full bg-gradient-to-br from-vt-blue to-vt-pink"></div>
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
      </main>
    </BackgroundLayout>
  );
}