import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const getPostDetail = (slug: string) => {
  const mdxFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf8");
  const { content: MDXContent, data: metaData } = matter(mdxFileContents);

  return { MDXContent, metaData };
};

export const getAllPosts = () => {
  const mdxFiles = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"));

  return mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { metaData } = getPostDetail(slug);

    return { metaData, slug };
  });
};
