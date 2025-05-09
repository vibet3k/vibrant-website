export interface Author {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  bio: any[];
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
  body: any[];
  author: Author;
}
