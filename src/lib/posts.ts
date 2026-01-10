import type { Post, PostMetadata } from "@/src/types/post-data";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const getPostDetail = (slug: string) => {
  const mdxFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf8");
  const { content: MDXContent, data } = matter(mdxFileContents);

  const metaData: PostMetadata = {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    tags: data.tags || [],
    coverImage: data.coverImage || "",
  };

  return { MDXContent, metaData };
};

export const getAllPosts = (): Post[] => {
  const mdxFiles = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"));

  return mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { metaData } = getPostDetail(slug);

    return { metaData, slug };
  });
};
