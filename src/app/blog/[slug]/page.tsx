// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import BackgroundLayout from '@/components/BackgroundLayout';
import { client } from '@/lib/sanity';
import { postQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';

// Remove all custom interfaces and let Next.js handle the typing
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get the slug from params
  const { slug } = params;
  
  // Fetch the post data
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <BackgroundLayout>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
          <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">{post.title}</h1>
          
          <div className="flex items-center mb-8">
            {post.author?.image?.asset?.url && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image 
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div>
              <p className="text-vt-blue font-medium">{post.author?.name}</p>
              <p className="text-sm text-vt-pink">
                {post.publishedAt && format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </p>
            </div>
          </div>
          
          {post.mainImage?.asset?.url && (
            <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <article className="prose prose-lg prose-vt max-w-none">
            <PortableText value={post.body} />
          </article>
        </div>
      </main>
    </BackgroundLayout>
  );
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(postQuery, { slug });
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error);
    return null;
  }
}