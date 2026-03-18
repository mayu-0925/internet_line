import Link from "next/link";

const navLinks = [
  { href: "/ranking", label: "ランキング" },
  { href: "/compare", label: "比べる" },
  { href: "/beginners", label: "初心者向け" },
];

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-orange-100 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl animate-float">📡</span>
          <div>
            <span className="text-xl font-black text-orange-500">
              ネットえらびナビ
            </span>
            <div className="text-xs text-gray-400 leading-none">
              かんたん回線比較
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/diagnosis"
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full pop-btn font-bold text-sm transition-colors"
          >
            無料で診断 ✨
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          aria-label="メニューを開く"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
