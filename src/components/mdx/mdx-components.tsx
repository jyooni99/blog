import type { MDXComponents } from "mdx/types";
import BlockQuote from "./block-quote";
import Callout from "./callout";
import MdxImage from "./mdx-image";
import Pre from "./pre";

export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ children, id, ...rest }) => (
      <h1
        id={id}
        className="text-4xl mt-8 break-keep mb-3 font-black first:mt-0"
        {...rest}
      >
        {children}
      </h1>
    ),
    h2: ({ children, id, ...rest }) => (
      <h2 id={id} className="text-2xl font-bold mb-3 mt-20 scroll-mt-20" {...rest}>
        {children}
      </h2>
    ),
    h3: ({ children, id, ...rest }) => (
      <h3 id={id} className="text-xl font-bold mb-3 mt-14 scroll-mt-20" {...rest}>
        {children}
      </h3>
    ),
    h4: ({ children, id, ...rest }) => (
      <h4 id={id} className="text-lg font-semibold mb-3 mt-12 scroll-mt-20" {...rest}>
        {children}
      </h4>
    ),

    // 텍스트 요소
    p: ({ children }) => <p className="mb-4 leading-7.5">{children}</p>,
    strong: ({ children }) => (
      <strong className="font-semibold mr-0.5">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    del: ({ children }) => <del className="line-through">{children}</del>,

    // 링크 요소
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-violet-600 font-semibold dark:text-violet-light hover:text-violet-800 dark:hover:text-violet-light hover:underline hover:underline-offset-4"
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
      <li className="leading-7 text-zinc-600 dark:text-zinc-300 ps-1.5 py-1 marker:text-zinc-500 dark:marker:text-zinc-300">
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

    // 테이블 요소 (가로·세로 구분선, 헤더 연한 회색)
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto text-sm">
        <table className="w-full border-collapse border border-zinc-200 dark:border-zinc-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-zinc-100 dark:bg-zinc-800">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="bg-white dark:bg-zinc-900">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-zinc-200 dark:border-zinc-700 last:border-b-0">
        {children}
      </tr>
    ),
    th: ({ children, style }) => (
      <th
        className="px-5 py-3.5 text-left font-medium text-zinc-800 dark:text-zinc-200 text-sm align-middle border-r border-zinc-200 dark:border-zinc-700 last:border-r-0"
        style={style}
      >
        {children}
      </th>
    ),
    td: ({ children, style }) => (
      <td
        className="px-5 py-3.5 text-zinc-700 dark:text-zinc-300 align-middle border-r border-zinc-200 dark:border-zinc-700 last:border-r-0"
        style={style}
      >
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
