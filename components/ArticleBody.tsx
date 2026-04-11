import type { ContentBlock } from "@/lib/types";
import type { RankingItem } from "@/lib/types";
import Link from "next/link";

type Props = {
  blocks: ContentBlock[];
  rankingItems: RankingItem[];
};

// **太字** / ==マーカー== / [テキスト](URL) をインラインレンダリング
function renderInlineText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==|\[[^\]]+\]\([^)]+\))/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return <mark key={i} className="bg-yellow-200 text-gray-900 rounded px-0.5">{part.slice(2, -2)}</mark>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const isExternal = url.startsWith("http");
      return (
        <Link
          key={i}
          href={url}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
          className="text-orange-500 font-bold underline underline-offset-2 hover:text-orange-600"
        >
          {label}
        </Link>
      );
    }
    return part;
  });
}

export default function ArticleBody({ blocks, rankingItems }: Props) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading2":
            return (
              <h2
                key={i}
                className="text-xl font-black text-gray-800 pt-4 border-l-4 border-orange-400 pl-3"
              >
                {block.text}
              </h2>
            );
          case "heading3":
            return (
              <h3
                key={i}
                className="text-base font-black text-gray-800 flex items-center gap-2"
              >
                <span className="w-6 h-6 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">
                  ▶
                </span>
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="text-gray-700 leading-relaxed text-sm">
                {renderInlineText(block.text)}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="text-orange-400 font-black mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{renderInlineText(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className="bg-yellow-50 border-l-4 border-yellow-400 rounded-2xl p-4 flex gap-3"
              >
                <span className="text-2xl flex-shrink-0">{block.emoji}</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {block.text}
                </p>
              </div>
            );
          case "ranking_cta": {
            const item = rankingItems[block.rankIndex];
            if (!item) return null;
            const isTop = block.rankIndex === 0;
            return (
              <div
                key={i}
                className={`rounded-2xl p-5 border-2 ${isTop ? "bg-gradient-to-br from-orange-50 to-red-50 border-orange-300" : "bg-orange-50 border-orange-200"}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-black">
                    {isTop ? "🥇 編集部イチオシ" : `🏅 第${block.rankIndex + 1}位`}
                  </span>
                  {isTop && (
                    <span className="text-xs bg-red-500 text-white font-black px-2 py-0.5 rounded-full animate-pulse">
                      期間限定特典あり
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-black text-gray-800 text-xl">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag.text}
                          className="text-xs bg-white border border-orange-200 text-orange-700 px-2 py-0.5 rounded-full"
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                    {isTop && (
                      <p className="text-xs text-red-500 font-bold mt-2">
                        🎁 {item.reward.label} {item.reward.value}キャッシュバック中
                      </p>
                    )}
                  </div>
                  <Link
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`text-white font-black px-6 py-4 rounded-2xl pop-btn text-base whitespace-nowrap transition-colors shadow-md ${item.ctaColor}`}
                  >
                    公式サイトで詳細を見る →
                  </Link>
                </div>
              </div>
            );
          }
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl shadow-sm">
                <table className="w-full text-sm bg-white">
                  <thead>
                    <tr className="bg-orange-400 text-white">
                      {block.headers.map((h, j) => (
                        <th key={j} className="py-3 px-4 text-left font-bold whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-orange-50"}>
                        {row.map((cell, k) => (
                          <td key={k} className={`py-3 px-4 border-b border-gray-100 ${k === 0 ? "font-bold text-gray-700" : "text-gray-600"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "bar_chart":
            return (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5">
                {block.title && (
                  <p className="text-sm font-bold text-gray-600 mb-4">{block.title}</p>
                )}
                <div className="space-y-3">
                  {block.items.map((item, j) => {
                    const maxValue = Math.max(...block.items.map((i) => i.value));
                    const pct = Math.round((item.value / maxValue) * 100);
                    return (
                      <div key={j}>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span className="font-bold">{item.label}</span>
                          <span className="font-black text-gray-800">
                            {item.value.toLocaleString()}{item.unit}
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-5">
                          <div
                            className={`h-5 rounded-full flex items-center justify-end pr-2 transition-all ${item.color}`}
                            style={{ width: `${pct}%` }}
                          >
                            <span className="text-white text-xs font-black">{pct}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );

          case "definition_list":
            return (
              <div key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <div key={j} className="flex gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                    <span className="flex-shrink-0 font-bold text-orange-500 text-sm min-w-0 w-36 leading-relaxed">{item.term}</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{renderInlineText(item.description)}</span>
                  </div>
                ))}
              </div>
            );

          case "steps":
            return (
              <div key={i} className="space-y-3">
                {block.items.map((step, j) => (
                  <div key={j} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center font-black text-sm">
                      {j + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm mb-1">{step.title}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{renderInlineText(step.description)}</div>
                    </div>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
