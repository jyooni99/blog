import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const prettyCodeOptions = {
  theme: {
    light: "catppuccin-latte",
    dark: "catppuccin-mocha",
  },
  keepBackground: true,
  defaultLang: "typescript",
};

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    format: "mdx",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
};
