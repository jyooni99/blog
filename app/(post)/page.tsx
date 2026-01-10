import { getAllPosts } from "@/src/lib/posts";
import Link from "next/link";

export default function PostPage() {
  const posts = getAllPosts();

  return (
    <div>
      <ul className="flex flex-col items-center">
        {posts.map(({ slug, metaData }) => (
          <li key={slug} className="border border-black p-6">
            <Link href={`/post/${slug}`}>
              <div>{metaData.title}</div>
              <div>{metaData.description}</div>
              <div>{metaData.date}</div>
              <div>{metaData.tags}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
