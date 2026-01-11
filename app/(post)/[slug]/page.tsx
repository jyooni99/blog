import { getMDXComponents } from "@/src/components/mdx-components";
import TagsBadge from "@/src/components/tags-badge";
import { mdxOptions } from "@/src/lib/mdx-options";
import { getPostDetail } from "@/src/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

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
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto lg:px-0 px-6 pt-30 pb-20">
      <div className="pb-10 mb-10 border-b border-gray-200 dark:border-gray-700">
        <h1 className="leading-tight text-4xl font-black pb-4">{metaData.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 pb-4">{metaData.date}</p>
        <TagsBadge tags={metaData.tags} />
      </div>
      <MDXRemote
        source={MDXContent}
        options={mdxOptions}
        components={getMDXComponents()}
      />
    </article>
  );
}
