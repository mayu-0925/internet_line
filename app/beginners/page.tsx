import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import RankingCard from "@/components/RankingCard";
import { siteAlert, rankingItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "はじめての光回線 初心者ガイド",
  description:
    "光回線が初めての方向けにわかりやすく解説。選び方・申し込み方法・よくある疑問をまとめました。",
  alternates: { canonical: "https://www.net-choice.jp/beginners" },
};

const steps = [
  {
    step: 1,
    emoji: "🏠",
    title: "住居タイプを確認する",
    desc: "一戸建てとマンションでは使える回線の種類が違います。まず建物タイプを確認しましょう。",
    color: "bg-orange-50 border-orange-200",
    stepColor: "bg-orange-400",
  },
  {
    step: 2,
    emoji: "📍",
    title: "エリアを確認する",
    desc: "使いたい回線のサービスエリアに住所が入っているか確認します。各社の公式サイトで調べられます。",
    color: "bg-blue-50 border-blue-200",
    stepColor: "bg-blue-400",
  },
  {
    step: 3,
    emoji: "💰",
    title: "料金・キャンペーンを比べる",
    desc: "月額料金だけでなく、工事費やキャッシュバックなども含めた総コストで比べるのがポイントです。",
    color: "bg-green-50 border-green-200",
    stepColor: "bg-green-400",
  },
  {
    step: 4,
    emoji: "📝",
    title: "申し込む",
    desc: "公式サイトからオンラインで申し込めます。工事は申し込みから1〜2週間後が目安です。",
    color: "bg-purple-50 border-purple-200",
    stepColor: "bg-purple-400",
  },
];

const faqs = [
  {
    q: "光回線の工事って大変ですか？",
    a: "工事は業者が行うため、基本的に立ち会うだけでOKです。所要時間は30分〜2時間程度。賃貸の場合は大家さんへの確認が必要な場合があります。",
  },
  {
    q: "マンションでも使えますか？",
    a: "ほとんどのマンションで利用可能です。ただし建物によっては使える回線が限られる場合があります。まずエリア確認をおすすめします。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "多くの回線は2年契約が基本で、途中解約すると違約金が発生します。最近は縛りなしプランを提供する会社も増えています。",
  },
  {
    q: "Wi-Fiルーターは別途必要ですか？",
    a: "光回線の申し込みとセットでレンタルできる場合が多いです。すでにお持ちのルーターがある場合はそのまま使える場合もあります。",
  },
  {
    q: "スマホのセット割って何ですか？",
    a: "同じ会社のスマホプランと光回線を合わせて契約すると毎月割引が受けられるサービスです。auスマホ＋auひかりなどが代表例です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function BeginnersPage() {
  const featuredItem = rankingItems[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <AlertBar alert={siteAlert} />
      <main>
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-green-400 to-teal-400 text-white py-10 px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full mb-3">
              📚 はじめての方へ
            </p>
            <h1 className="text-3xl font-black mb-2">
              🌱 初心者向け 光回線ガイド
            </h1>
            <p className="text-sm opacity-90">
              むずかしい言葉なし！5分で光回線のすべてがわかります
            </p>
          </div>
        </section>

        {/* What is hikari */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-2 text-center">
              💡 光回線ってなに？
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              まずはざっくり理解しましょう
            </p>
            <div className="bg-green-50 rounded-3xl p-6 border border-green-200 text-gray-700 leading-relaxed">
              <p className="mb-3">
                光回線とは、<strong>光ファイバーという細いケーブル</strong>
                を使ってインターネットに接続するサービスです。
              </p>
              <p className="mb-3">
                スマホの通信（4G/5G）と違い、<strong>速度が速くて安定</strong>
                しているのが特徴。動画・ゲーム・テレワークなど、自宅でインターネットをよく使う方に最適です。
              </p>
              <p>
                データ容量が<strong>無制限で使い放題</strong>
                なので、スマホのギガが足りなくなる心配もありません。
              </p>
            </div>

            {/* Merit/Demerit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                <h3 className="font-black text-blue-700 mb-3">
                  👍 メリット
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "速度が速い（動画・ゲームもサクサク）",
                    "通信が安定している",
                    "データ量が無制限",
                    "月額料金が固定",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">
                <h3 className="font-black text-orange-700 mb-3">
                  👎 デメリット
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "工事が必要（1〜2週間かかる）",
                    "引越し時に手続きが必要",
                    "エリア外は利用できない",
                    "契約期間の縛りがある場合も",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5">!</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-2 text-center">
              📋 光回線の選び方 4ステップ
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              この順番で考えれば迷いません
            </p>
            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className={`rounded-2xl border p-5 flex items-start gap-4 ${s.color}`}
                >
                  <div
                    className={`${s.stepColor} text-white font-black w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg`}
                  >
                    {s.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{s.emoji}</span>
                      <h3 className="font-black text-gray-800">{s.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section className="py-10 px-4 bg-orange-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-2 text-center">
              🏆 初心者に特におすすめの回線
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              迷ったらまずここから検討しましょう
            </p>
            <RankingCard item={rankingItems[0]} />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-2 text-center">
              ❓ よくある疑問
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              初めての方がよく気にする点をまとめました
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-gray-200 bg-gray-50 group"
                >
                  <summary className="flex items-center justify-between p-5 font-bold text-gray-800 cursor-pointer select-none">
                    <span className="flex items-center gap-2">
                      <span className="text-orange-400">Q.</span>
                      {faq.q}
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    <span className="text-green-500 font-bold mr-1">A.</span>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            {/* CTA to diagnosis */}
            <div className="mt-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl p-6 text-white text-center">
              <p className="text-lg font-black mb-2">
                ✨ どの回線が合うかまだ迷っている？
              </p>
              <p className="text-sm opacity-90 mb-4">
                3つの質問に答えるだけで、あなたにぴったりの回線がわかります
              </p>
              <Link
                href="/diagnosis"
                className="inline-block bg-white text-orange-500 font-black px-8 py-3 rounded-2xl pop-btn hover:bg-orange-50 transition-colors"
              >
                無料で診断する →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBottomCTA featuredItem={featuredItem} />
    </>
  );
}
