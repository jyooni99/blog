import { getMDXComponents } from "@/src/components/mdx-components";
import TagsBadge from "@/src/components/tags-badge";
import { mdxOptions } from "@/src/lib/mdx-options";
import { getPostMetadata } from "@/src/lib/meta-data";
import { getPostDetail } from "@/src/lib/posts";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import readingTime from "reading-time";

export async function generateStaticParams() {
  const { getAllPosts } = await import("@/src/lib/posts");
  const posts = getAllPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metaData } = getPostDetail(slug);

  return getPostMetadata(metaData);
}

interface PostDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params;
  const { MDXContent, metaData } = getPostDetail(slug);
  const readingTimeResult = readingTime(MDXContent as string);

  return (
    <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto lg:px-0 px-6 pt-30 pb-20">
      <div className="pb-10 mb-10 border-b border-gray-200 dark:border-gray-700">
        <h1 className="leading-tight text-5xl font-black pb-7">{metaData.title}</h1>
        <div className="flex items-center gap-1.5 pb-4 text-gray-500 dark:text-gray-400 ">
          <p>{metaData.date}</p>
          <span>·</span>
          <p>{readingTimeResult.text}</p>
        </div>
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
