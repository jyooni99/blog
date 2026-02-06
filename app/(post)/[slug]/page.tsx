import MdxBlockQuote from "@/src/components/mdx/block-quote";
import { getMDXComponents } from "@/src/components/mdx/mdx-components";
import TagsBadge from "@/src/components/tags-badge";
import TOC from "@/src/components/toc";

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
  const { MDXContent, metaData, headings } = getPostDetail(slug);
  const readingTimeResult = readingTime(MDXContent as string);

  return (
    <article className="mx-auto lg:max-w-5xl max-w-175 px-4 sm:px-6 pt-16 sm:pt-20 md:pt-20 pb-12 sm:pb-16 md:pb-20 tracking-tight">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="w-full lg:max-w-175">
          <div className="pb-4 sm:pb-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="leading-tight text-xl sm:text-2xl md:text-3xl font-bold pb-1.5">
              {metaData.title}
            </h1>
            <div className="flex items-center gap-1.5 pb-1.5 text-sm text-gray-400 dark:text-gray-400">
              <p>{metaData.date}</p>
              <span>·</span>
              <p>{readingTimeResult.text}</p>
            </div>
            <div className="flex flex-wrap pt-1">
              <TagsBadge tags={metaData.tags} />
            </div>
          </div>
          <MdxBlockQuote className="mt-6 sm:mt-8">{metaData.description}</MdxBlockQuote>
          <MDXRemote
            source={MDXContent}
            options={mdxOptions}
            components={getMDXComponents()}
          />
        </div>
        <aside className="hidden lg:block">
          <TOC headings={headings} />
        </aside>
      </div>
    </article>
  );
}
