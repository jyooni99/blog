import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // 헤딩 레벨
    h1: ({ children }) => (
      <h1 className="text-4xl mt-8 break-keep mb-3 font-black first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-extrabold mb-8 mt-16">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-6 mt-12">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold mb-2 mt-4">{children}</h5>,
    h6: ({ children }) => (
      <h6 className="text-base font-semibold mb-2 mt-4">{children}</h6>
    ),

    // 텍스트 요소
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    del: ({ children }) => <del className="line-through">{children}</del>,

    // 링크 요소
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-violet-600 font-semibold dark:text-violet-300 hover:text-violet-800 dark:hover:text-violet-400 hover:underline hover:underline-offset-4"
      >
        {children}
      </a>
    ),

    // 리스트 요소
    ul: ({ children }) => (
      <ul className="list-disc list-outside mb-2.5 space-y-2.5 ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside mb-2.5 space-y-2.5 ml-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-7 text-zinc-600 first:mt-2.5 dark:text-zinc-300 ml-3 pl-1 marker:text-zinc-500 dark:marker:text-zinc-300">
        {children}
      </li>
    ),

    // 인용 요소
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-zinc-200 dark:border-zinc-600 pl-3 italic my-4 font-medium text-zinc-700 dark:text-zinc-300">
        {children}
      </blockquote>
    ),

    // 구분선 요소
    hr: () => <hr className="my-8 border-zinc-300 dark:border-zinc-800" />,

    // 테이블 요소
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto text-sm">
        <table className="border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-violet-400 dark:bg-violet-dark text-white text-sm">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="bg-zinc-50 dark:bg-zinc-800 px-5">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-zinc-200 dark:border-zinc-800 px-5">{children}</tr>
    ),
    th: ({ children, style }) => (
      <th className="px-10 py-3 font-semibold text-sm tracking-wide" style={style}>
        {children}
      </th>
    ),
    td: ({ children, style }) => (
      <td className="px-10 py-4 text-zinc-700 dark:text-zinc-300" style={style}>
        {children}
      </td>
    ),

    ...components,
  };
}
