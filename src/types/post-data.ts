export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
}

export interface Post {
  slug: string;
  metaData: PostMetadata;
}
