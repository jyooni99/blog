import Link from "next/link";

const NAV_LINKS = [
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
] as const;

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-4xl px-6 lg:px-0 mx-auto py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-black italic font-mono hover:text-blue-500 transition-colors"
        >
          Yoon_log
        </Link>

        <nav className="flex gap-6 items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-black font-mono italic hover:text-blue-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
