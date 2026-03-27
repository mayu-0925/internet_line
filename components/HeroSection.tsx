import Link from "next/link";
import type { HeroStat, RankingItem } from "@/lib/types";
import { currentYearMonth } from "@/lib/date";

type Props = {
  stats: HeroStat[];
  featuredItem: RankingItem;
};

export default function HeroSection({ stats, featuredItem }: Props) {
  return (
    <section
      className="py-12 px-4"
      style={{
        background:
          "linear-gradient(160deg, #fef9c3 0%, #fde68a 30%, #fed7aa 60%, #fecaca 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: copy */}
          <div>
            {/* Mascot balloon */}
            <div className="relative inline-block mb-6">
              <div className="mascot-balloon bg-white rounded-2xl px-4 py-2.5 shadow-lg relative">
                <p className="text-sm text-gray-700">
                  👋 こんにちは！回線えらびをお手伝いします
                </p>
              </div>
            </div>

            {/* Confetti dots + date */}
            <div className="flex items-center gap-1 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-sm text-gray-500 ml-1">
                {currentYearMonth()} 最新版
              </span>
            </div>

            <h1 className="text-4xl font-black text-gray-800 leading-tight mb-4">
              むずかしくない！
              <br />
              <span className="text-orange-500">ネット回線えらび</span>
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              料金・速度・エリアを
              <span className="font-bold text-orange-500">わかりやすく</span>
              まとめました。初めてでも安心してえらべます。
            </p>

            {/* Quick pick */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500">
                あなたはどっち？
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/ranking?type=house"
                  className="bg-white border-2 border-orange-300 text-orange-600 font-bold px-5 py-3 rounded-2xl pop-btn text-sm flex items-center gap-2"
                >
                  🏠 一戸建てに住んでいる
                </Link>
                <Link
                  href="/ranking?type=mansion"
                  className="bg-white border-2 border-blue-300 text-blue-600 font-bold px-5 py-3 rounded-2xl pop-btn text-sm flex items-center gap-2"
                >
                  🏢 マンション・アパート
                </Link>
              </div>
            </div>
          </div>

          {/* Right: featured card + stats */}
          <div className="space-y-3">
            {/* Featured pick */}
            <div className="bg-white rounded-3xl p-5 shadow-lg">
              <p className="text-xs text-gray-400 font-bold mb-3">
                ⚡ 今月のベストピック
              </p>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-lg font-black text-gray-800">
                    {featuredItem.name}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <StarRating rating={featuredItem.rating} />
                    <span className="text-xs text-gray-400">
                      {featuredItem.rating}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">月額</div>
                  <div className="text-2xl font-black text-orange-500">
                    ¥{featuredItem.price.replace("月¥", "").replace("〜", "")}
                  </div>
                  <div className="text-xs text-gray-400">〜（税込）</div>
                </div>
              </div>
              <Link
                href={featuredItem.affiliateUrl}
                className="block bg-orange-400 hover:bg-orange-500 text-white text-center font-black py-3 rounded-2xl pop-btn transition-colors"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                キャンペーン詳細を見る 🎁
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-3 text-center shadow"
                >
                  <div className={`text-2xl font-black ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return (
    <span className="flex">
      {"★".repeat(full).split("").map((s, i) => (
        <span key={i} className="text-yellow-400 text-sm">{s}</span>
      ))}
      {"★".repeat(empty).split("").map((s, i) => (
        <span key={i} className="text-gray-300 text-sm">{s}</span>
      ))}
    </span>
  );
}
