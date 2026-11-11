"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Position = "first" | "second" | "final";

const LABELS: Record<Position, string> = {
  first: "提供エリアを確認する（無料・1分）→",
  second: "最大65,000円キャッシュバックを受け取る →",
  final: "NURO光に申し込む（キャッシュバック対象）→",
};

function track(position: string) {
  window.gtag?.("event", "affiliate_click", {
    provider: "nuro",
    page: "killer_page",
    button_position: position,
  });
}

export default function NuroCTA({ href, position }: { href: string; position: Position }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={() => track(position)}
      className="block bg-orange-400 hover:bg-orange-500 text-white font-black text-center py-5 rounded-2xl text-lg md:text-xl shadow-md transition-colors pop-btn"
    >
      {LABELS[position]}
    </a>
  );
}

export function NuroStickyBar({ href }: { href: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t-2 border-orange-300 py-3 px-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <div className="flex-1 min-w-0 hidden sm:block">
          <p className="text-sm font-black text-gray-800">
            🎁 最大<span className="text-orange-500 text-lg">65,000円</span>現金キャッシュバック
          </p>
          <p className="text-xs text-gray-500">＋最大3か月無料体験・オプション加入不要</p>
        </div>
        <div className="flex-1 min-w-0 sm:hidden">
          <p className="text-xs font-black text-gray-800">🎁 最大65,000円現金CB</p>
          <p className="text-xs text-red-500 font-bold">＋3か月無料体験</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          onClick={() => track("sticky")}
          className="bg-orange-400 hover:bg-orange-500 text-white text-sm md:text-base font-black py-3 px-6 rounded-2xl pop-btn transition-colors whitespace-nowrap flex-shrink-0"
        >
          エリア確認へ →
        </a>
      </div>
    </div>
  );
}
