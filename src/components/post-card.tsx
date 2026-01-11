import Image from "next/image";
import Link from "next/link";
import { PostMetadata } from "../types/post-data";
import TagsBadge from "./tags-badge";

interface PostCardProps {
  slug: string;
  metaData: PostMetadata;
}

const PostCard = ({ slug, metaData }: PostCardProps) => {
  return (
    <li className="py-8 not-last:border-b not-last:border-gray-200 dark:not-last:border-zinc-800">
      <Link href={`/${slug}`} className="flex flex-col sm:flex-row gap-6 group">
        {/* content */}
        <div className="flex flex-col gap-3 flex-1 order-2 sm:order-1">
          <TagsBadge tags={metaData.tags} clickable={false} />
          <h3 className="text-2xl sm:text-3xl tracking-tight pt-3 font-bold line-clamp-2 group-hover-violet font-mono">
            {metaData.title}
          </h3>
          <p className="text-gray-600 line-clamp-2 sm:line-clamp-3 leading-relaxed text-sm sm:text-base dark:text-zinc-400">
            {metaData.description}
          </p>
          <div className="text-sm text-gray-500 dark:text-zinc-600">{metaData.date}</div>
        </div>

        {/* image */}
        {metaData.coverImage && (
          <div className="relative rounded-lg overflow-hidden w-full sm:w-64 aspect-16/10 shrink-0 order-1 sm:order-2">
            <Image
              src={metaData.coverImage}
              alt={`${metaData.title} 썸네일`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, 256px"
            />
          </div>
        )}
      </Link>
    </li>
  );
};

export default PostCard;
