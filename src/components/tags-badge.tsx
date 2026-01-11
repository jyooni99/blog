interface TagsBadgeProps {
  tags: string[];
  clickable?: boolean;
}

const TagsBadge = ({ tags, clickable = true }: TagsBadgeProps) => {
  const Tag = clickable ? "button" : "span";

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <Tag
          key={tag}
          className={`text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-1  font-mono tracking-tight dark:text-gray-400 dark:bg-zinc-800 ${
            clickable &&
            "hover:bg-violet-100 hover:text-violet-700 transition-colors cursor-pointer dark:hover:bg-violet-900 dark:hover:text-violet-300"
          }`}
        >
          #{tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagsBadge;
