   // src/app/blog/[slug]/page.tsx
   import { Metadata } from 'next';
   import BackgroundLayout from '@/components/BackgroundLayout';
   import { client, projectId } from '@/lib/sanity';
   import { postQuery } from '@/lib/sanity/queries';
   import { Post } from '@/lib/sanity/types';
   import { PortableText } from '@portabletext/react';
   import { format } from 'date-fns';
   import Image from 'next/image';
   
   export const revalidate = 0;

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
           <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl w-[900px] max-w-full mx-auto overflow-hidden max-h-[80vh] flex flex-col">
             {post ? (
               <>
                 <div className="sticky top-0 bg-white z-10 p-10 pb-6 border-b border-gray-200">
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
                 
                 <div className="overflow-y-auto p-10 pt-6">
                   {post.mainImage?.asset?.url && (
                     <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden">
                       <Image
                         src={post.mainImage.asset.url}
                         alt={post.title || 'Blog post image'}
                         width={800}
                         height={500}
                         className="object-cover w-full"
                         priority
                       />
                     </div>
                   )}
                   
                   <article className="prose prose-lg prose-vt max-w-none">
                     <PortableText 
                       value={post.body}
                       components={{
                         types: {
                           image: ({value}) => {
                             return (
                               <div className="my-8">
                                 <Image
                                   src={value.asset.url}
                                   alt={value.alt || 'Blog image'}
                                   width={800}
                                   height={500}
                                   className="rounded-lg"
                                 />
                               </div>
                             );
                           },
                           callout: ({value}) => {
                             // Define valid callout types
                             type CalloutType = 'info' | 'warning' | 'tip';
                             
                             // Add styling based on callout type
                             const typeStyles: Record<CalloutType, string> = {
                               info: "bg-blue-50 border-l-4 border-blue-500",
                               warning: "bg-amber-50 border-l-4 border-amber-500",
                               tip: "bg-green-50 border-l-4 border-green-500"
                             };
                             
                             // Ensure type is a valid key, default to 'info' if not
                             const calloutType = (value.type as CalloutType) || 'info';
                             const style = typeStyles[calloutType in typeStyles ? calloutType : 'info'];
                             
                             return (
                               <div className={`p-6 my-8 rounded-r-lg ${style}`}>
                                 <PortableText value={value.content} />
                               </div>
                             );
                           }
                         }
                       }}
                     />
                   </article>
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