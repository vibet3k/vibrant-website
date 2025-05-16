import { groq } from 'next-sanity';

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "slug": slug.current,
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
      "slug": slug.current,
      image {
        asset-> {
          url
        }
      },
      bio
    },
    categories[]->{
      _id,
      title,
      description
    }
  }
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    description,
    "slug": slug.current,
    mainImage {
      asset-> {
        url
      }
    },
    publishedAt,
    author-> {
      name
    },
    categories[]->{
      _id,
      title
    }
  }
`;
