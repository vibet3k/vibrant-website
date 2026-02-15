import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2023-05-03'; // Use the latest API version

if (!projectId) {
  console.warn('No Sanity project ID found. Check your environment variables.');
}

export const token = process.env.SANITY_API_TOKEN;

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
      perspective: 'published',
      ...(token ? { token } : {}),
    })
  : null;
