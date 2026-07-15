"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  href: string;
  position: "first" | "second";
};

export default function NuroCTA({ href, position }: Props) {
  const handleClick = () => {
    window.gtag?.("event", "affiliate_click", {
      provider: "nuro",
      page: "killer_page",
      button_position: position,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleClick}
      className="block bg-orange-400 hover:bg-orange-500 text-white font-black text-center py-4 rounded-2xl text-lg shadow-md transition-colors pop-btn"
    >
      今すぐNURO光に申し込む →
    </a>
  );
}
