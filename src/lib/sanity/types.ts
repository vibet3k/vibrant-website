import { PortableTextBlock } from '@portabletext/react';

export interface Author {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  bio: PortableTextBlock[];
}

export interface Post {
  _id: string;
  slug: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  body: PortableTextBlock[];
  author: Author;
}
