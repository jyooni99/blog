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
    <article className="mx-auto lg:max-w-5xl max-w-3xl px-6 pt-30 pb-20 tracking-tight">
      <div className="flex flex-row gap-10">
        <div className="max-w-175">
          <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="leading-tight text-5xl font-black pb-7">{metaData.title}</h1>
            <div className="flex items-center gap-1.5 pb-6 text-gray-500 dark:text-gray-400 ">
              <p>{metaData.date}</p>
              <span>·</span>
              <p>{readingTimeResult.text}</p>
            </div>
            <TagsBadge tags={metaData.tags} />
          </div>
          <MdxBlockQuote className="mt-8">{metaData.description}</MdxBlockQuote>
          <MDXRemote
            source={MDXContent}
            options={mdxOptions}
            components={getMDXComponents()}
          />
        </div>
        <TOC headings={headings} />
      </div>
    </article>
  );
}
