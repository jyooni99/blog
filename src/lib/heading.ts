import GithubSlugger from "github-slugger";

export const getHeadings = (content: string) => {
  const withoutCodeBlocks = content.replace(/```[\s\S]*?```/g, "");

  const regex = /^(#{2,4}) (.*)$/gim;
  const headingMatches = withoutCodeBlocks.match(regex) ?? [];
  const slugger = new GithubSlugger();

  const rawHeadings = headingMatches.map((match: string) => {
    const text = match.replace(/^#{2,4}\s+/, "").trim();
    const id = slugger.slug(text);
    const level = match.match(/#/g)?.length ?? 0;
    return { text, id, level };
  });

  const minLevel =
    rawHeadings.length > 0 ? Math.min(...rawHeadings.map((h) => h.level)) : 2;

  const headings = rawHeadings.map(({ text, id, level }) => ({
    text,
    id,
    indentLevel: level - minLevel,
  }));

  return headings;
};
