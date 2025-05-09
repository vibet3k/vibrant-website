export interface Author {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  bio: Record<string, unknown>[];
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
  body: Record<string, unknown>[];
  author: Author;
}
