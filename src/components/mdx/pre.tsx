"use client";

import { Check, Copy } from "lucide-react";
import { ReactElement, useRef, useState } from "react";

interface PreProps {
  children: ReactElement<HTMLPreElement>;
  className?: string;
}

const Pre = ({ children, ...props }: PreProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    if (isCopied) return;

    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 4000);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        aria-label="Copy code button"
        className="absolute top-4 right-4 cursor-pointer p-2 opacity-0 group-hover:opacity-100 hover:text-violet-600 dark:hover:text-violet-light hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md transition-all duration-200"
      >
        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>

      <pre
        ref={preRef}
        className="p-5 text-sm rounded-md bg-light-bg dark:bg-zinc-800 border border-zinc-200 dark:border-none overflow-x-auto"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};

export default Pre;
