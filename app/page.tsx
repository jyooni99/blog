import { getAllPosts } from "@/src/lib/posts";
import Link from "next/link";

const Home = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.filePath} href={`/post/${post.filePath}`}>
          {post.data.title}
        </Link>
      ))}
    </div>
  );
};

export default Home;
