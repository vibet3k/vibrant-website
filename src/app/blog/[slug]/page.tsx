   // src/app/blog/[slug]/page.tsx
   import { Metadata } from 'next';
   import BackgroundLayout from '@/components/BackgroundLayout';
   import { client, projectId } from '@/lib/sanity';
   import { postQuery } from '@/lib/sanity/queries';
   import { Post } from '@/lib/sanity/types';
   import { PortableText } from '@portabletext/react';
   import Image from 'next/image';
   import { format } from 'date-fns';
   

   export const metadata: Metadata = {
     title: 'Blog Post',
     description: 'Blog post details',
   };

   interface BlogPostPageProps {
     params: {
       slug: string;
     };
   }

   export default async function Page(props: BlogPostPageProps) {
     const { slug } = props.params;
     
     // Try to fetch the post data
     let post: Post | null = null;
     try {
       if (client && projectId) {
         post = await client.fetch(postQuery, { slug });
       }
     } catch (error) {
       console.error('Error fetching post:', error);
     }
     
     return (
       <BackgroundLayout>
         <main className="max-w-4xl mx-auto px-6 py-16">
           <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10">
             {post ? (
               <>
                 <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">{post.title}</h1>
                 {post.publishedAt && (
                  <p className="text-sm text-vt-pink mb-8">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                )}
                 <div className="prose prose-lg prose-vt max-w-none">
                   <p>{post.description}</p>
                   {post.body && (
                     <article className="prose prose-lg prose-vt max-w-none mt-6">
                       <PortableText value={post.body} />
                     </article>
                   )}
                 </div>
               </>
             ) : (
               <>
                 <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">Blog Post Coming Soon</h1>
                 <p className="text-sm text-vt-pink mb-8">We&apos;re working on our blog</p>
                 <article className="prose prose-lg prose-vt max-w-none">
                   <p>We&apos;re currently migrating our blog to a new content management system.</p>
                   <p>Check back soon to see our post: {slug}</p>
                 </article>
               </>
             )}
           </div>
         </main>
       </BackgroundLayout>
     );
   }