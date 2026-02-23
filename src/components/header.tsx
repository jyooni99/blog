import Link from "next/link";

const NAV_LINKS = [{ href: "https://github.com/jyooni99", label: "Github" }] as const;

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900 border-gray-200">
      <div className="max-w-5xl px-6 mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-lg">
          <span className="text-violet-600 dark:text-violet-light">YO_ON</span>
        </Link>

        <nav className="flex gap-6 items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover-violet">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
