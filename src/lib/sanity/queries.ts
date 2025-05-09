import { groq } from 'next-sanity';

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    description,
    slug,
    mainImage {
      asset-> {
        url
      }
    },
    publishedAt,
    body,
    author-> {
      _id,
      name,
      image {
        asset-> {
          url
        }
      },
      bio
    }
  }
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage {
      asset-> {
        url
      }
    },
    publishedAt,
    author-> {
      name
    }
  }
`;
