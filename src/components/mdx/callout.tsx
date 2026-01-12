import React from "react";

type CalloutTheme = "blue" | "green" | "yellow" | "red" | "violet" | "zinc";

interface CalloutProps {
  children: React.ReactNode;
  theme?: CalloutTheme;
  className?: string;
}

const themeStyles: Record<
  CalloutTheme,
  {
    bg: string;
    textColor: string;
  }
> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    textColor: "text-blue-900 dark:text-blue-100",
  },
  green: {
    bg: "bg-[#e1f8dd]/80 dark:bg-[#15803d]/15",
    textColor: "text-green-900 dark:text-green-100",
  },
  yellow: {
    bg: "bg-amber-100/70 dark:bg-amber-950/30",
    textColor: "text-yellow-900 dark:text-yellow-100",
  },
  red: {
    bg: "bg-red-50 dark:bg-red-950/30",
    textColor: "text-red-900 dark:text-red-100",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-950/30",
    textColor: "text-violet-900 dark:text-violet-100",
  },
  zinc: {
    bg: "bg-zinc-100 dark:bg-zinc-900/50",
    textColor: "text-zinc-700 dark:text-zinc-300",
  },
};

const Callout = ({ children, theme = "zinc", className = "" }: CalloutProps) => {
  const styles = themeStyles[theme];

  return (
    <div
      className={`flex gap-3 rounded-md ${styles.bg} ${styles.textColor} py-4 px-8 my-6 ${className}`}
    >
      <div className="flex-1 leading-7">{children}</div>
    </div>
  );
};

export default Callout;
