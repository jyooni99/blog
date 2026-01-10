interface TagsBadgeProps {
  tags: string[];
}

const TagsBadge = ({ tags }: TagsBadgeProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          className="text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 px-3 py-1 rounded-full font-mono tracking-tight transition-colors cursor-pointer"
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagsBadge;
