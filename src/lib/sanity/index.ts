import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2023-05-03'; // Use the latest API version

// Add this check to handle missing projectId
if (!projectId) {
  console.warn('No Sanity project ID found. Check your environment variables.');
}

export const client = createClient({
  projectId: projectId || '', // Provide a fallback empty string
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  perspective: 'published',
});
