interface TagsBadgeProps {
  tags: string[];
}

const TagsBadge = ({ tags }: TagsBadgeProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs md:text-[0.875rem] font-mono tracking-tight text-gray-400"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default TagsBadge;
