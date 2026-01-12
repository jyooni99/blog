import React from "react";

const BlockQuote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <blockquote
      className={`leading-7 border-l-4 border-violet-400 dark:border-[#664e8b] py-4 px-6 my-6 font-medium italic text-zinc-700 dark:text-zinc-300 ${className}`}
    >
      {children}
    </blockquote>
  );
};

export default BlockQuote;
