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
    <li className="py-6.5 not-last:border-b not-last:border-gray-200 dark:not-last:border-zinc-800">
      <div className="flex flex-col gap-3">
        <Link href={`/${slug}`} className="flex flex-row items-start gap-6 group">
          {/* content */}
          <div className="flex flex-col gap-2.5 flex-1 min-w-0">
            <div className="text-xs text-gray-500 dark:text-zinc-600">
              {metaData.date}
            </div>
            <h3 className="text-2xl sm:text-2xl tracking-tight font-bold line-clamp-2 group-hover-violet">
              {metaData.title}
            </h3>
            <p className="text-gray-500 line-clamp-2 sm:line-clamp-3 leading-relaxed text-sm sm:text-base dark:text-zinc-400">
              {metaData.description}
            </p>
            <div className="flex flex-wrap pt-2">
              <TagsBadge tags={metaData.tags} />
            </div>
          </div>
          {/* thumbnail */}
          <div className="relative shrink-0 hidden sm:block w-48 h-32 rounded-xl overflow-hidden">
            {metaData.coverImage ? (
              <Image
                src={metaData.coverImage}
                alt={metaData.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-base font-bold text-white bg-violet-900 dark:bg-zinc-800"
                aria-hidden
              >
                {metaData.tags[1]}
              </div>
            )}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default PostCard;
