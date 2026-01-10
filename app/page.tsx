import { getAllPosts } from "@/src/lib/posts";
import Link from "next/link";

const Home = () => {
  const posts = getAllPosts();

  return (
    <div>
      {posts.map(({ slug, metaData }) => (
        <Link key={slug} href={`/post/${slug}`}>
          {metaData.title}
        </Link>
      ))}
    </div>
  );
};

export default Home;
