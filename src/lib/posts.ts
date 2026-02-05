import type { Post, PostMetadata } from "@/src/types/post-data";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getHeadings } from "./heading";

const POSTS_PATH = path.join(process.cwd(), "/posts");

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const getPostDetail = (slug: string) => {
  const mdxFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf8");
  const { content: MDXContent, data } = matter(mdxFileContents);
  const headings = getHeadings(MDXContent);

  const metaData: PostMetadata = {
    title: data.title || "",
    description: data.description || "",
    date: data.date ? formatDate(data.date) : "",
    tags: data.tags || [],
    coverImage: data.coverImage || "",
  };

  return { MDXContent, metaData, headings };
};

export const getAllPosts = (): Post[] => {
  const mdxFiles = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"));

  const posts = mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { metaData } = getPostDetail(slug);

    return { metaData, slug };
  });

  return posts.sort((a, b) => {
    const dateA = new Date(a.metaData.date).getTime() || 0;
    const dateB = new Date(b.metaData.date).getTime() || 0;

    return dateB - dateA;
  });
};
