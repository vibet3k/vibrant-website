import { cache } from 'react';
import { client, projectId } from './index';
import { postQuery, postsQuery, postSlugsQuery } from './queries';
import { Post } from './types';

/**
 * Request-scoped memoisation.
 *
 * A blog post page previously issued three Sanity queries per view:
 * generateMetadata fetched the post, then the page fetched the post again plus
 * the full post list. React's `cache` dedupes identical calls within a single
 * render pass, so that collapses to two (one post, one list).
 *
 * Errors are intentionally NOT swallowed here. A Sanity outage should surface
 * as a 500 via error.tsx, not be mistaken for "this post doesn't exist" and
 * served as a 404. Callers that prefer graceful degradation (the homepage and
 * blog index, where an empty list is an acceptable render) use the
 * *Safe variants below.
 */

export const getPost = cache(async (slug: string): Promise<Post | null> => {
  if (!client || !projectId) return null;
  return client.fetch<Post | null>(postQuery, { slug });
});

export const getPosts = cache(async (): Promise<Post[]> => {
  if (!client || !projectId) return [];
  return client.fetch<Post[]>(postsQuery);
});

export const getPostSlugs = cache(async (): Promise<string[]> => {
  if (!client || !projectId) return [];
  const slugs = await client.fetch<(string | null)[]>(postSlugsQuery);
  return slugs.filter((s): s is string => Boolean(s));
});

/** Never throws. Returns [] if Sanity is unreachable or unconfigured. */
export async function getPostsSafe(): Promise<Post[]> {
  try {
    return await getPosts();
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
    return [];
  }
}
