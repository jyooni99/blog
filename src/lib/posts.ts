import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export function getAllPosts() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath), "utf8");
    const { data, content } = matter(source);
    return {
      data,
      content,
      filePath,
    };
  });
  return posts;
}
