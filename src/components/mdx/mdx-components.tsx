import type { MDXComponents } from "mdx/types";
import BlockQuote from "./block-quote";
import Callout from "./callout";
import MdxImage from "./mdx-image";
import Pre from "./pre";

export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // 헤딩 레벨
    h1: ({ children }) => (
      <h1 className="text-4xl mt-8 break-keep mb-3 font-black first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-extrabold mb-3 mt-16">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-8">{children}</h3>,
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mb-3 mt-12">{children}</h4>
    ),

    // 텍스트 요소
    p: ({ children }) => <p className="my-2 leading-7">{children}</p>,
    strong: ({ children }) => <strong className="font-bold mr-0.5">{children}</strong>,
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
      <ul className="list-disc list-outside my-3 ps-7">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside my-3 ps-7">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-7 text-zinc-600 dark:text-zinc-300 ps-1.5 py-1.5 marker:text-zinc-500 dark:marker:text-zinc-300">
        {children}
      </li>
    ),

    blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,

    // 코드 요소
    code: ({ children, ...props }) => {
      return <code {...props}>{children}</code>;
    },

    pre: ({ children, ...props }) => <Pre {...props}>{children}</Pre>,

    figure: ({ children, ...props }) => {
      return (
        <figure className="my-4" {...props}>
          {children}
        </figure>
      );
    },

    figcaption: ({ children, ...props }) => {
      return (
        <figcaption
          className="px-5 py-3 text-xs bg-light-bg dark:bg-zinc-800 rounded-t-md border border-zinc-200 dark:border-none border-b-0"
          {...props}
        >
          {children}
        </figcaption>
      );
    },

    // 구분선 요소
    hr: () => <hr className="my-8 border-zinc-300 dark:border-zinc-800" />,

    // 테이블 요소
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto text-sm">
        <table className="border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-violet-400 dark:bg-[#664e8b] text-white text-sm">
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

    // 이미지 요소
    MdxImage: ({ src, alt, width, height, caption, className, priority, ...props }) => (
      <MdxImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        caption={caption}
        className={className}
        priority={priority}
        {...props}
      />
    ),

    Callout: ({ type, icon, className, children, ...props }) => (
      <Callout type={type} icon={icon} className={className} {...props}>
        {children}
      </Callout>
    ),

    ...components,
  };
}
