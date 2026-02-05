"use client";

import { cn } from "@/src/lib/cn";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TOCProps {
  headings: {
    text: string;
    id: string;
    indentLevel: number;
  }[];
}

const indentClass: Record<number, string> = {
  0: "text-sm",
  1: "pl-4 text-[0.8125rem]",
  2: "pl-8 text-[0.8125rem]",
  3: "pl-12 text-xs",
};

const TOC = ({ headings }: TOCProps) => {
  const [currentContent, setCurrentContent] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentContent(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 1.0,
        rootMargin: "0px 0px -80% 0px",
      },
    );
    const headingsElements = document.querySelectorAll("h2, h3, h4");
    headingsElements.forEach((element) => observer.observe(element));

    return () => {
      headingsElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="font-bold text-lg pb-1.5">On This Page</p>
        <ul>
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                indentClass[heading.indentLevel],
                "py-1 transition-all",
                currentContent === heading.id
                  ? "text-violet-600 dark:text-violet-300 font-medium"
                  : "text-zinc-400 dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-zinc-400 hover:underline",
              )}
            >
              <Link href={`#${heading.id}`}>{heading.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TOC;
