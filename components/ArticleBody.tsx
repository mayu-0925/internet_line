import type { ContentBlock } from "@/lib/types";
import type { RankingItem } from "@/lib/types";
import Link from "next/link";

type Props = {
  blocks: ContentBlock[];
  rankingItems: RankingItem[];
};

// **太字** と ==マーカー== をインラインレンダリング
function renderInlineText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return <mark key={i} className="bg-yellow-200 text-gray-900 rounded px-0.5">{part.slice(2, -2)}</mark>;
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
                    {renderInlineText(item)}
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
            return (
              <div
                key={i}
                className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4"
              >
                <p className="text-xs text-orange-500 font-bold mb-2">
                  {block.rankIndex === 0 ? "🥇 編集部イチオシ" : `🏅 第${block.rankIndex + 1}位`}
                </p>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-black text-gray-800 text-lg">
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
                  </div>
                  <Link
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`text-white font-black px-5 py-3 rounded-2xl pop-btn text-sm whitespace-nowrap transition-colors ${item.ctaColor}`}
                  >
                    公式サイトを見る →
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

          default:
            return null;
        }
      })}
    </div>
  );
}
