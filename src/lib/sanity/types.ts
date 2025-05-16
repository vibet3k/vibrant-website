import { PortableTextBlock } from '@portabletext/react';

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  };
  bio: PortableTextBlock[];
}

export interface Category {
  _id: string;
  title: string;
  description: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  body: PortableTextBlock[];
  author: Author;
  categories: Category[];
}
