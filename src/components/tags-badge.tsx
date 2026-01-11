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
          className={`text-xs sm:text-sm badge-violet px-3 py-1  font-mono tracking-tight ${
            clickable && "badge-hover"
          }`}
        >
          #{tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagsBadge;
