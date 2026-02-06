import PostCard from "@/src/components/post-card";
import Profile from "@/src/components/profile";
import { getAllPosts } from "@/src/lib/posts";

const Home = () => {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Profile />
      <ul className="flex flex-col">
        {posts.map(({ slug, metaData }) => (
          <PostCard key={slug} slug={slug} metaData={metaData} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
