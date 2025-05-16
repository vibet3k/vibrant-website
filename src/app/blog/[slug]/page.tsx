   // src/app/blog/[slug]/page.tsx
   import { Metadata } from 'next';
   import BackgroundLayout from '@/components/BackgroundLayout';
   import { client, projectId } from '@/lib/sanity';
   import { postQuery } from '@/lib/sanity/queries';
   import { Post } from '@/lib/sanity/types';
   import { PortableText } from '@portabletext/react';
   import { format } from 'date-fns';
   import Image from 'next/image';
   

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
         <main className="mx-auto px-6 py-16">
           <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-10 min-h-[600px] w-[900px] max-w-full mx-auto overflow-y-auto max-h-[80vh]">
             {post ? (
               <>
                 <div className="mb-10 pb-6 border-b border-gray-200">
                   <h1 className="font-lexend-deca text-vt-blue text-4xl mb-2">
                     {post.title}
                   </h1>
                   {post.description && (
                     <p className="text-lg text-gray-600 mt-3 font-lexend-deca">
                       {post.description}
                     </p>
                   )}
                   {post.publishedAt && (
                     <p className="text-sm text-vt-pink mt-4">
                       {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                     </p>
                   )}
                 </div>
                 
                 {post.mainImage?.asset?.url && (
                   <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden">
                     <Image
                       src={post.mainImage.asset.url}
                       alt={post.title || 'Blog post image'}
                       fill
                       priority
                       className="object-cover"
                       sizes="(max-width: 768px) 100vw, 800px"
                     />
                   </div>
                 )}
                 
                 <article className="prose prose-lg prose-vt max-w-none">
                   <PortableText value={post.body} />
                 </article>
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