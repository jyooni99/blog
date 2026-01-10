import { getPostDetail } from "@/src/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const { getAllPosts } = await import("@/src/lib/posts");
  const posts = getAllPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

interface PostDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params;
  const { MDXContent, metaData } = getPostDetail(slug);

  return (
    <article className="prose prose-lg max-w-6xl mx-auto px-4 py-8">
      <h1>{metaData.title}</h1>
      <MDXRemote
        source={MDXContent}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "github-dark",
                  keepBackground: true,
                },
              ],
            ],
          },
        }}
      />
    </article>
  );
}
