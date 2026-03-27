import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { siteAlert, rankingItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "光回線 比較表",
  description:
    "光回線の料金・速度・エリア・キャンペーンを一覧で比較。自分に合った回線をかんたんに見つけられます。",
};


export default function ComparePage() {
  const featuredItem = rankingItems[0];

  return (
    <>
      <Header />
      <AlertBar alert={siteAlert} />
      <main>
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-blue-400 to-cyan-400 text-white py-10 px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full mb-3">
              📊 一覧で比べる
            </p>
            <h1 className="text-3xl font-black mb-2">⚡ 光回線 比較表</h1>
            <p className="text-sm opacity-90">
              料金・速度・キャンペーンを横並びで比較しました
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-10 px-4 bg-blue-50">
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto rounded-3xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-4 px-5 text-left font-bold w-32">
                      比較項目
                    </th>
                    {rankingItems.map((item) => (
                      <th
                        key={item.rank}
                        className="py-4 px-5 text-center font-black"
                      >
                        <div className="text-xs mb-1 opacity-80">
                          {item.rank === 1 ? "🥇" : item.rank === 2 ? "🥈" : item.rank === 3 ? "🥉" : `第${item.rank}位`}
                        </div>
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* 料金 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 font-bold text-gray-600 bg-gray-50">
                      💰 月額料金
                    </td>
                    {rankingItems.map((item) => (
                      <td
                        key={item.rank}
                        className="py-4 px-5 text-center font-black text-blue-600"
                      >
                        {item.price}
                      </td>
                    ))}
                  </tr>

                  {/* 速度 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 font-bold text-gray-600 bg-gray-50">
                      ⚡ 最大速度
                    </td>
                    {rankingItems.map((item) => (
                      <td
                        key={item.rank}
                        className="py-4 px-5 text-center font-bold"
                      >
                        {item.speed}
                      </td>
                    ))}
                  </tr>

                  {/* キャンペーン */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 font-bold text-gray-600 bg-gray-50">
                      🎁 特典
                    </td>
                    {rankingItems.map((item) => (
                      <td key={item.rank} className="py-4 px-5 text-center">
                        <span className="text-xs font-bold text-gray-500">
                          {item.reward.label}
                        </span>
                        <div className="text-red-500 font-black">
                          {item.reward.value}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* こんな人向け */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 font-bold text-gray-600 bg-gray-50">
                      👤 こんな人向け
                    </td>
                    {rankingItems.map((item) => (
                      <td
                        key={item.rank}
                        className="py-4 px-5 text-center text-xs text-gray-600"
                      >
                        {item.description}
                      </td>
                    ))}
                  </tr>

                  {/* CTA */}
                  <tr className="bg-gray-50">
                    <td className="py-4 px-5 font-bold text-gray-600 bg-gray-100">
                      申し込み
                    </td>
                    {rankingItems.map((item) => (
                      <td key={item.rank} className="py-4 px-5 text-center">
                        <Link
                          href={item.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className={`inline-block text-white font-black px-5 py-2 rounded-xl text-sm pop-btn transition-colors ${item.ctaColor}`}
                        >
                          公式へ →
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Popular comparisons */}
            <div className="mt-10">
              <h2 className="text-xl font-black text-gray-800 mb-4 text-center">
                🔥 よく見られている比較
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "NURO光 vs auひかり",
                    emoji: "⚡",
                    slug: "nuro-vs-au",
                    color: "bg-orange-50 border-orange-200",
                  },
                  {
                    title: "auひかり vs ドコモ光",
                    emoji: "📱",
                    slug: "nuro-vs-au",
                    color: "bg-blue-50 border-blue-200",
                  },
                  {
                    title: "NURO光 vs ドコモ光",
                    emoji: "🏆",
                    slug: "nuro-vs-au",
                    color: "bg-green-50 border-green-200",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={`/blog/${item.slug}`}
                    className={`block rounded-2xl border p-4 font-bold text-gray-700 hover:shadow-md transition-shadow ${item.color}`}
                  >
                    <span className="text-2xl mr-2">{item.emoji}</span>
                    {item.title}
                    <span className="text-orange-400 ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBottomCTA featuredItem={featuredItem} />
    </>
  );
}
