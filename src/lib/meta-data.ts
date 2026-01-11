import { Metadata } from "next";
import { PostMetadata } from "../types/post-data";

export function getPostMetadata(metaData: PostMetadata): Metadata {
  return {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.tags,
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      type: "article",
      publishedTime: metaData.date,
      tags: metaData.tags,
      images: metaData.coverImage
        ? [
            {
              url: metaData.coverImage,
              width: 1200,
              height: 630,
              alt: metaData.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: metaData.title,
      description: metaData.description,
      images: metaData.coverImage ? [metaData.coverImage] : undefined,
    },
  };
}
